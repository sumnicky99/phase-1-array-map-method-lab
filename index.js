const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
const titleCased = () => {  
  return tutorials.map(element => {
    const mySplitArray = element.split(" ")
    const Array3 = mySplitArray.map(
      newEl => newEl.charAt(0).toUpperCase() +  newEl.slice(1))
      const finalResponse = Array3.join(' ')
      return finalResponse
    })
}