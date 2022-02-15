function deepClone (array) {
  return array.map((element) => {
    return Array.isArray(element) ? deepClone(element) : element;
  });
}

export default deepClone;
