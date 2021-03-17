


function swap(array, index1, index2) {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;

}
function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)], //middle element
        i = left, //left pointer
        j = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //swap two elements
            i++;
            j--;
        }
    }
    return i;
}
function quickSortHelper(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSortHelper(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSortHelper(items, index, right);
        }
    }
    return items;
}



function quickSort(items) {
    return quickSortHelper(items, 0, items.length - 1);
}

console.log(quickSort([6, 1, 23, 4, 2, 3]));

module.exports = { quickSort, quickSortHelper, partition, swap }