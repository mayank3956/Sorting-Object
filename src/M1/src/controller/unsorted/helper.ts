const generateObject = (rootKeyCount, maxDepth) => {
  const generatedObj = {};

  for (let i = 0; i < rootKeyCount; i++) {
    let generatedObjField;

    switch (randomInt(5)) {
      case 0:
        generatedObjField = randomInt(100);
        break;

      case 1:
        generatedObjField = Math.random() ? true : false;
        break;

      case 2:
        generatedObjField = randomString(randomInt(4) + 4);
        break;

      case 3:
        generatedObjField = [];
        break;

      default:
        generatedObjField = generateObject(rootKeyCount / 2, maxDepth);
        break;
    }
    generatedObj[randomString(1 + randomInt(10))] = generatedObjField;
  }
  return generatedObj;
};

const randomInt = rightBound => {
  return Math.floor(Math.random() * rightBound);
};

const randomString = size => {
  const alphaChars =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
  let generatedString = '';
  for (let i = 0; i < size; i++) {
    generatedString += alphaChars[randomInt(alphaChars.length)];
  }

  return generatedString;
};

export default generateObject;
