export const filterData = (key, value, data) => {
    return data.filter(item =>
        item[key].toLowerCase().includes(value.toLowerCase())
    );
};

export const isPresentInArray = (item, arrayData) => {
    if (!item)
        return new Error('something went wrong in isPresentInArray function');

    return arrayData.some(ele => ele.id === item.id);
};
