export function mergesort (array) {
  return mergesortRec(array)
}

function mergesortRec (array) {
  if (array.length <=1 ) {
    return array
  }

  let pivot = Math.floor(array.length / 2)
  let left = array.slice(0, pivot)
  let right = array.slice(pivot)

  return merge(mergesortRec(left), mergesortRec(right))
}

function merge (left, right) {
  let result = []
  let i = 0
  let j = 0
  
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++])
    } else {
      result.push(right[j++])
    }
  }

  while (i < left.length) {
    result.push(left[i++])
  }

  while (j < right.length) {
    result.push(right[j++])
  }

  return result
}
