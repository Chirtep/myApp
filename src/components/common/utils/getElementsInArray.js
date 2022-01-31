export const getElementsInArray = (arr, offset) => {
    let STEP = 14;
    return arr.slice(offset, offset + STEP);

}