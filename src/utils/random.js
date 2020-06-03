export function getRandomDouble (min = 1, max = 1.5) {
  return Number.parseFloat(Math.random() * (max - min) + min).toFixed(2)
}
export function getRandomInt (min = 1, max = 10) {
  return Math.floor(Math.random() * (max - min)) + min
}
