
// Get random element from an array
const getRandomElement = (array) => {
    return array[Math.floor(Math.random() * array.length)];
}

// Create random message from object containing starterStrings and endingStrings properties
const createMessage = (object) => {
    return getRandomElement(object.starterStrings) + ' ' + getRandomElement(object.endingStrings);
}

/* ---------  TEST  --------- */

const messages = {
    starterStrings: ['Il segreto della felicità?', 'La cosa migliore da fare domani?', 'La mia nuova filosofia di vita?'],
    endingStrings: ['Vivere con il sorriso.', 'Godersi ogni istante.', 'Non correre!.']
}
console.log(createMessage(messages));