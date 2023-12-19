function ordenacaoQuickSort(arrayNumeros) {
    if (arrayNumeros.length <= 1) {
        return arrayNumeros
    } else {
        const pivot = arrayNumeros[0]
        const menorQuePivot = arrayNumeros.slice(1).filter(x => x <= pivot)
        const maiorQuePivot = arrayNumeros.slice(1).filter(x => x > pivot)
        return [...ordenacaoQuickSort(menorQuePivot), ...ordenacaoQuickSort(maiorQuePivot)]
    }
}

let listaDesordenada = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
let listaOrdenada = ordenacaoQuickSort(listaDesordenada)

console.log("Lista desordenada: " + listaDesordenada)
console.log("Lista ordenada: " + listaOrdenada)