// this module has functions for generating melodic SSML for Amazon Alexa
// tested with the "French (FR)" speech model

const notes = [
  { name: '1',     SSMLValue: '-33.3%',  value: -33.3 },
  { name: '2mi',   SSMLValue: '-29%',    value: -29 },
  { name: '2maj',  SSMLValue: '-25%',    value: -25 },
  { name: '3mi',   SSMLValue: '-21%',    value: -21 },
  { name: '3maj',  SSMLValue: '-17%',    value: -17 },
  { name: '4',     SSMLValue: '-11%',    value: -11 },
  { name: '5',     SSMLValue: '+0%',     value: 0 },
  { name: '6mi',   SSMLValue: '+5%',     value: 5 },
  { name: '6maj',  SSMLValue: '+12%',    value: 12 },
  { name: '7mi',   SSMLValue: '+17%',    value: 17 },
  { name: '7maj',  SSMLValue: '+25%',    value: 25 },
  { name: '8',     SSMLValue: '+31%',    value: 31 },
];

const getNoteIndexForName = name => notes.find(note => note.name === name);

const getNoteSSML = (noteIndex, text) => {
  return `<prosody pitch="${notes[noteIndex].SSMLValue}">${text}</prosody>`;
}

const getNoteText = (consonant = '', vowel = 'a', length) => {
  return consonant.padEnd(length + consonant.length, vowel);
}

module.exports = {
  getNoteIndexForName,
  getNoteSSML,
  getNoteText
}
