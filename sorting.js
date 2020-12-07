import { swap,randomArray} from './helpers.js'

const a = randomArray(100, 10)
const b = [3,4,2]

function bubbleSort(arr){
    for(let j=0; j<arr.length; j++){
     for(let i=0; i<arr.length; i++){
        if (arr[i]>arr[i+1]){
           swap(arr, i, i+1)
        }
     }
    }
    return arr
}
console.log(bubbleSort(a))