class Sorter {
  constructor() {
    this.items = Sorter.items = []; // your implementation
  }

  add(element) {
   this.items.push(element); // your implementation
  }

  at(index) {
   return this.items[index];// your implementation
  }

  get length() {
    return this.items.length; // your implementation
  }

  toArray() {
    return this.items;// your implementation
  }

  sort(indices) {
    var args = arguments[0];
    /*for (var i = 0; i < arguments.length; i++) {
      args[i] = arguments[0][i];
    }*/
    console.log (args);
    var min = args[0], l = args.length;
    for (var i = 0; i < l; i++){
      if (args[i] < min){
        min = args[i];
      }
    }
    console.log (min);
    console.log (l);
    var temp = [];
    temp = this.items.slice (min, l);
    temp.sort();
    console.log (temp);
    for (var i = 0; i<temp.length; i++){
      this.items.splice(min+i, 1, temp[i]); 
    }
    console.log (this.items);
    return this.items;
    // your implementation
  }

  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;
