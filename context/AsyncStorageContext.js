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
            const existingSizes =
                sizes &&
                data.sizes.length === 1 &&
                sizes[0].quantity === data.sizes[0].quantity
                    ? [...sizes]
                    : [];

            if (
                item?.length &&
                data.sizes?.length === 1 &&
                sizes?.some(
                    size =>
                        size.size === data.sizes[0].size &&
                        size.quantity === data.sizes[0].quantity
                )
            )
                return showAlert();
            else if (key === 'favorite' && item?.length) {
                let dataToSet = prevData.filter(ele => ele.id !== item[0].id);
                dataToSet = JSON.stringify(dataToSet);
                return await AsyncStorage.setItem(key, dataToSet);
            }

            const nonZeroSizes =
            data.sizes && data.sizes.filter(size => size.quantity > 0);

            const prevDataTwo =
                key === 'cart' && item?.length
                    ? prevData.filter(ele => ele.id !== data.id)
                    : prevData;

            const dataToBeSet =
                key === 'favorite'
                    ? [data, ...prevDataTwo]
                    : nonZeroSizes.length === 0
                    ? prevDataTwo.filter(item => item?.sizes?.length > 0)
                    : [
                          {
                              ...data,
                              sizes: [...nonZeroSizes, ...existingSizes]
                          },
                          ...prevDataTwo
                      ];

            const dataToSet = JSON.stringify(dataToBeSet);
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

    async function removeKeyData(key) {
        try {
            await AsyncStorage.removeItem(key);
        } catch (err) {
            console.log(err.message);
            alert(err.message);
        }
    }

    return (
        <AsyncStorageContext.Provider
            value={{ setData, getData, deleteData, removeKeyData }}
        >
            {children}
        </AsyncStorageContext.Provider>
    );
};

export const useAsyncStorage = () => {
    return useContext(AsyncStorageContext);
};

export default AsyncStorageContextProvider;
