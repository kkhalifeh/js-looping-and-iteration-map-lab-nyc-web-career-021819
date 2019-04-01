function lowerCaseDrivers(arr) {
  return arr.map(obj => obj.toLowerCase());
}

function nameToAttributes(arr) {
  return arr.map(obj => {
    var rObj = {};
    let splitted = obj.split(" ")
    rObj['firstName'] = splitted[0];
    rObj['lastName'] = splitted[1];
    return rObj;
  })
}

function attributesToPhrase(arr) {
  return arr.map(obj => {
    const sentence = obj["name"] + ' is from ' + obj["hometown"]
    return sentence
  })
}
