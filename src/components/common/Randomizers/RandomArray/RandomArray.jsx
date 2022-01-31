export const RandomArray = (arr, limit) => {

    let randomElems = []

    for (let i = 0 ; (i < limit) && (i < arr.length) ; i++) {
        let r = Math.floor(Math.random() * (arr.length - i)) + i;
        let elem = arr[r]
        arr[r] = arr[i]
        arr[i] = elem

        randomElems.push(elem)
    }

    return randomElems
}