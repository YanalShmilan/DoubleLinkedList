class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addStaion(item) {
    let node = new Node(item);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
  }

  removeStation(item) {
    let current = this.head;
    while (current) {
      if (current.data === item) {
        if (current == this.head && current == this.tail) {
          this.head = null;
          this.tail = null;
        } else if (current == this.head) {
          this.head = this.head.next;
          this.head.prev = null;
        } else if (current == this.tail) {
          this.tail = this.tail.prev;
          this.tail.next = null;
        } else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }
      }
      current = current.next;
    }
  }

  traverse() {
    let current = this.head;
    let stations = [];
    while (current !== null) {
      stations.push(current.data);
      current = current.next;
    }
    return stations;
  }
}
let galaxies = new DoubleLinkedList();
galaxies.addStaion('andromeda');
galaxies.addStaion('Cigar');
galaxies.addStaion('butterfly');

console.log(galaxies.traverse());
galaxies.removeStation('Cigar');
console.log(galaxies.traverse());
