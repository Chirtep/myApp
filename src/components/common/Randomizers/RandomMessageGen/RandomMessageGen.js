export const RandomMessageGen = (array) => {
    let randomArray = []

    for(let i = 0; i < array.length; i++) {
        let rand = Math.floor(Math.random() * array[i].length)
        let elem = array[i][rand]
        randomArray.push(elem)
    }

    let result = randomArray.join(' ') + '!'

    return result

}