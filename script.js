const starterStrings = ['Il segreto della felicità?', 'La cosa migliore da fare domani?', 
                        'La mia nuova filosofia di vita?'];
const endingStrings = ['Vivere con il sorriso.', 'Godersi ogni istante.', 'Non correre!.'];

const getRandomString = (stringsArray) => {
    return stringsArray[Math.floor(Math.random() * stringsArray.length)];
}

const createMessage = (arr1, arr2) => {
    return getRandomString(arr1) + ' ' + getRandomString(arr2);
}

console.log(createMessage(starterStrings, endingStrings));