import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext } from 'react';
import { filterData } from '../utils/utils';

const AsyncStorageContext = createContext();

const AsyncStorageContextProvider = ({ children }) => {
    async function setData(key, data, onSuccess, showAlert) {
        try {
            const prevData = (await getData(key)) || [];
            const item = filterData('id', data.id, prevData);

            const sizes = item[0]?.sizes;
            const existingSizes = sizes ? [...sizes] : [];
            if (
                item.length &&
                sizes?.some(size => size.size === data.sizes[0].size)
            )
                return showAlert();
            else if (key === 'favorite' && item.length) {
                let dataToSet = prevData.filter(ele => ele.id !== item[0].id);
                dataToSet = JSON.stringify(dataToSet);
                return await AsyncStorage.setItem(key, dataToSet);
            }

            const itemToSet =
                key === 'favorite'
                    ? data
                    : { ...data, sizes: [...data.sizes, ...existingSizes] };

            const dataToSet = JSON.stringify([itemToSet, ...prevData]);
            await AsyncStorage.setItem(key, dataToSet);

            onSuccess && onSuccess();
        } catch (err) {
            console.log(err.message);
            alert(err.message);
        }
    }

    async function getData(key) {
        try {
            const res = await AsyncStorage.getItem(key);
            return JSON.parse(res);
        } catch (err) {
            console.log(err.message);
            alert(err.message);
            return null;
        }
    }

    async function updateData() {}

    async function deleteData(key, id) {
        try {
            const prevData = await getData(key);
            const filteredData = prevData.filter(item => item.id !== id);

            const dataToSet = JSON.stringify(filteredData);
            await AsyncStorage.setItem(key, dataToSet);
        } catch (err) {
            console.log(err.message);
            alert(err.message);
        }
    }

    async function getDataById(key, data, id) {}

    return (
        <AsyncStorageContext.Provider
            value={{ setData, getData, updateData, deleteData }}
        >
            {children}
        </AsyncStorageContext.Provider>
    );
};

export const useAsyncStorage = () => {
    return useContext(AsyncStorageContext);
};

export default AsyncStorageContextProvider;
