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

export function truncateText(string, end, showDot) {
    if (string.length < end) return string;
    return string.slice(0, end) + (showDot ? '...' : '');
}

export function truncateTextWithWords(string, end) {
    const wordsArr = string.split(' ');
    const truncate = wordsArr.length > end ? '...' : '';

    return wordsArr.slice(0, end).join(' ') + truncate;
}
