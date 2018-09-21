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
     var min = arguments[0], l = arguments.length;
    for (var i = 0; i < l; i++){
      if (arguments[i] < min){
        min = arguments[i];
      }
    }
    var temp = this.items.slice (min, l);
    temp.sort();
    for (var i = 0; i<temp.length; i++){
      this.items.splice(min+i, 1, temp[i]);
    }

    return this.items;
    // your implementation
  }

  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;
