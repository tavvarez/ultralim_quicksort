function ordenacaoQuickSort(array) {
    if (array.lenght <= 1) {
        return array
    } else {
        const pivot = array[0]
        const menorQuePivot = array.slice(1).filter(x => x <= pivot)
    }
}