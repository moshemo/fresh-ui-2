import { material } from './material-colors'

// Color Functions
export const colorArray = (color, obj = material) =>
  Object.values(obj[color]).slice(0, -1)

export const accentArray = (color, obj = material) =>
  Object.values(obj[color].accent)

export const colorObject = (color, value, object = material) => {
  let name = { base: object[color][value] }
  let colArr = Object.values(object[color])
  colArr.pop()
  let arrIndex = colArr.indexOf(name.base)

  if (arrIndex + 1 < colArr.length) {
    name.dark = colArr[arrIndex + 1]
  }

  if (arrIndex + 2 < colArr.length) {
    name.darker = colArr[arrIndex + 2]
  }

  if (arrIndex + 3 < colArr.length) {
    name.darkest = colArr[arrIndex + 3]
  }

  if (arrIndex - 1 < colArr.length) {
    name.light = colArr[arrIndex - 1]
  }

  if (arrIndex - 2 < colArr.length) {
    name.lighter = colArr[arrIndex - 2]
  }

  if (arrIndex - 3 < colArr.length) {
    name.lightest = colArr[arrIndex - 3]
  }

  if (arrIndex - 4 < colArr.length) {
    name.faint = colArr[arrIndex - 4]
  }

  if (arrIndex - 5 < colArr.length) {
    name.fainter = colArr[arrIndex - 5]
  }

  if (arrIndex - 6 < colArr.length) {
    name.faintest = colArr[arrIndex - 6]
  }

  return name
}
