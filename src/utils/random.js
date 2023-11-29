const getRandomPhrase = (phrases) => {

    const indexRandom = Math.floor(Math.random() * phrases.length);

    return phrases[indexRandom]

};

export {getRandomPhrase}