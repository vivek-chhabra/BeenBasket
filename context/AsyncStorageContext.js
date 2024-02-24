import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext } from 'react';

const AsyncStorageContext = createContext();

const AsyncStorageContextProvider = ({ children }) => {
    async function setData(key, data) {
        try {
            const prevData = (await getData(key)) || [];
            const dataToSet = JSON.stringify([data, ...prevData]);

            await AsyncStorage.setItem(key, dataToSet);
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
    async function deleteData(key, id) {}
    async function getDataById(key, data, id) {}

    return (
        <AsyncStorageContext.Provider
            store={{ setData, getData, updateData, deleteData }}
        >
            {children}
        </AsyncStorageContext.Provider>
    );
};
