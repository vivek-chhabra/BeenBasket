import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext } from 'react';
import { isPresentInArray } from '../utils/utils';

const AsyncStorageContext = createContext();

const AsyncStorageContextProvider = ({ children }) => {
    async function setData(key, data, onSuccess) {
        try {
            const prevData = (await getData(key)) || [];
            const isInStorage = isPresentInArray(data, prevData);

            if (isInStorage) return;
            const dataToSet = JSON.stringify([data, ...prevData]);
            await AsyncStorage.setItem(key, dataToSet);
            
            onSuccess();
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
