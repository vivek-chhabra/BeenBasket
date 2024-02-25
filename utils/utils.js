export const filterData = (key, value, data) => {
    return data.filter(item => item[key] === value);
};
