const fs = require('fs');
const yargs  = require('yargs');

const argv = yargs
  .options({
    f:{
      demand:true,
      alias: 'file',
      describe: 'Text file that will be sorted',
      string: true
    }
  })
  .alias('file','f')
  .argv;

console.log(argv.file);

const data = fs.readFileSync(__dirname + "\\instancias-num\\" + argv.file, 'utf8');
const array = data.split('-').map(item => parseInt(item,10));


console.log(heapSort(array));


//var array = [1,12,9,5,6,10,55,8];
 //output 12,6,10,5,1,9


//let father = Math.floor((i - 1) / 2);
// let node = i;
// let left = (2 * i) + 1;
// let right = (2 * i) + 2;


function heapSort (array) {

  //Max-heapifying the array
  for ( let i = Math.floor(array.length / 2 - 1); i >= 0; i-- ){
    maxHeapify(array,array.length,i);
  }

  //Sorting
  for ( let i = array.length - 1; i >= 0 ; i--){
    swap(array,i,0);
    maxHeapify(array,i,0);
  }
  return array;
}



function maxHeapify  (array,arrayLength, i)  {

  let largest = i;
  let left = (2 * i) + 1;
  let right = (2 * i) + 2;

  //Verifying if the largest node is the left child
  if( left < arrayLength && array[left] > array[largest]){
      largest = left;
  }

  //Verifying if the largest node is the right child
  if( right < arrayLength && array[right] > array[largest]){
    largest = right;
  }

  //Verifying if the largest node is itself
  if(largest != i){
    swap(array, largest, i);
    maxHeapify(array, arrayLength ,largest);
  }


}

//Swaping the largest node with the current node
function swap (array,largest,i)  {
  let aux = array[i];
  array[i] = array[largest];
  array[largest] = aux;
}
