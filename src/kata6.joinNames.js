const joinNames = (namesObj) => {
    let names = [];
for (let i=0; i < names.length; i++){
  return names.push(namesObj)
};
      return namesObj.splice(0, -1).join(', ') + '&' + namesObj.slice(-1);
      return names.join(' ');
}

module.exports = joinNames;
