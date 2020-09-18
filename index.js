function findMinAndRemoveSorted(array) {
    return array.shift()
}

// console.log(findMinAndRemoveSorted([2, 4, 5, 1, 0]))

function merge(firstArray, secondArray) {
    let sorted = [];
    while(firstArray.length > 0 && secondArray.length > 0) {
        if(firstArray[0] < secondArray[0]) {
            sorted.push(findMinAndRemoveSorted(firstArray)) 
        } else {
            sorted.push(findMinAndRemoveSorted(secondArray))
        }    
    }
    return sorted.concat(firstArray).concat(secondArray)
}

console.log(merge([1, 2, 3, 4], [5, 6, 7, 8]))

function mergeSort(array) {
    let mid = array.length/2;
    let firstHalf = array.slice(0, mid);
    let secondHalf = array.slice(mid, array.length);
    let sorted;

    if(array.length < 2) return array;
    return sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf))
}