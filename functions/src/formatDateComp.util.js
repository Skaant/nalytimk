module.exports = (value, add = 0) =>
  (value + add).toString().padStart(2, '0')