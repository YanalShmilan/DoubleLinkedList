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

  addStaion = (name) => {
    let node = new Node(name);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
  };
  AddAt(index, name) {
    let current = this.head;
    let counter = 1;
    let node = new Node(name);
    if (index == 0) {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    } else {
      while (current) {
        current = current.next;
        if (counter == index) {
          node.prev = current.prev;
          current.prev.next = node;
          node.next = current;
          current.prev = node;
        }
        counter++;
      }
    }
  }

  removeStation = (name) => {
    let current = this.head;
    while (current) {
      if (current.data === name) {
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
  };

  traverse = () => {
    let current = this.head;
    let stations = [];
    while (current !== null) {
      stations.push(current.data);
      current = current.next;
    }
    return stations;
  };
}
let galaxies = new DoubleLinkedList();
galaxies.addStaion('Andromeda');
galaxies.addStaion('Cigar');
galaxies.addStaion('Butterfly');

console.log(galaxies.traverse());
galaxies.AddAt(2, 'Zeinab');
console.log(galaxies.traverse());

galaxies.removeStation('Cigar');
console.log(galaxies.traverse());
