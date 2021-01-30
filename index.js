function findMinAndRemove(array){
    let minValue = 0
    let minIndex = 0
    for (i = 0; i < array.length; i++) {
        if (array[i] < minValue) {
            minValue = array[i]
            minIndex = i
        }
    }
    array.splice(minIndex)
    return currentMin
}

function selectionSort(array){
    let arrayCopy = array   // nondestructive, preserve original array
    let sortedArray = []
    let currentMin
    while (array.length !=0) {
        currentMin = findMinAndRemove(arrayCopy)
        sortedArray.push(currentMin)
    }
    return sortedArray
}

