let arrayToSort = Array(1000000).fill().map(() => Math.round(Math.random() * 1000000))

function quicksort(array, left, right) {
  left = left || 0
  right = right || array.length - 1
  let pivot = partition(array, left, right)

  if (left < pivot - 1) {
    quicksort(array, left, pivot - 1)
  }

  if (right > pivot) {
    quicksort(array, pivot, right)
  }

  return array
}

// Hoare partition scheme
function partition(array, left, right) {
  let pivot = Math.floor((left + right) / 2)

  while (left <= right) {
    while (array[left] < array[pivot]) {
      left++
    }

    while (array[right] > array[pivot]) {
      right--
    }

    if (left <= right) {
      swap(array, left, right)
      left++
      right--
    }
  }

  return left
}

function swap(array, i, j) {
  let tmp = array[i]
  array[i] = array[j]
  array[j] = tmp
}

console.time('quicksort')
console.log(quicksort(arrayToSort))
console.timeEnd('quicksort')