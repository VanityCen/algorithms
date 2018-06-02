export function quickSort (array) {
  if (Array.isArray(array)) {
    return quick(array, 0, array.length - 1)
  }
}

function quick (array, left, right) {
  let index = partition(array, left, right)

  if (left < index - 1) {
    quick(array, left, index - 1)
  }

  if (right > index) {
    quick(array, index, right)
  }
}

function partition (array, left, right) {
  let pivot = array[Math.floor((left + right) / 2)]
  let i = left
  let j = right

  while (i <= j) {
    while (array[i] < pivot) {
      i++
    }

    while (array[j] > pivot) {
      j--
    }

    if (i <= j) {
      swap(array, i, j)
      i++
      j--
    }
  }

  return i
}

function swap (array, index1, index2) {
  let aux = array[index1]
  array[index1] = array[index2]
  array[index2] = aux
}