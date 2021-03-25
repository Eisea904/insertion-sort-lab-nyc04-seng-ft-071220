let array = [2, 5, 7, 8, 6, 3, 1]


function findMinAndRemove(array){
    let minValue = array[0]
    let minIndex = 0
    for (i = 0; i < array.length; i++) {
        if (array[i] < minValue) {
            minValue = array[i]
            minIndex = i
        }
    }
    array.splice(minIndex, 1)
    return minValue
}

function selectionSort(array){
    let sorted = []
    let newMin
    while (array.length !=0) {
        newMin = findMinAndRemove(array)
        sorted.push(newMin)
    }
    console.log(sorted)
}

selectionSort(array)
