// A small function to check if a js object is empty
const isObjectEmpty = (object) => {
  return !object || Object.keys(object).length === 0
}

module.exports = {
  isObjectEmpty
}
