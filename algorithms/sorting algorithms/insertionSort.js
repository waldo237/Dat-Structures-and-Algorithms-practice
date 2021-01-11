function insertionSort(items) {
    let i, j, value;

    for (i = 0; i < items.length; i++) {
        value = items[i];
        for (j = i - 1; j > -1 && items[j] > value; j--) {
            items[j + 1] = items[j];
        }
        items[j + 1] = value;
    }
    return items;
}


console.log(insertionSort([6, 1, 23, 4, 2, 3]));