function swap(array, index1, index2){
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;

}

function selectionSort(items) {
    let  min;

    for (let i = 0; i < items.length; i++) {
        // set Minimun to this position
        min = i;
        // check the rest of the array to see if anything is smaller
            let nextItem = (i + 1 <= items.length) ? i+1: i;
            if (items[nextItem] < items[min]) {
                min = nextItem;
            }
        if(i != min){
            swap(items, i, min);
        }
    }
    return items;
}

console.log(selectionSort([6,1,23,4,2,3]));
