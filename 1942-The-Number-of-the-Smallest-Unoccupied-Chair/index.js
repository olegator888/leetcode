// total sam )))

class MinHeap {
  constructor({ items, compare } = {}) {
    this.compare = compare || ((a, b) => a < b);
    this.heap = [];
    for (const item of items || []) {
      this.add(item);
    }
  }

  add(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  pop() {
    const value = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.heapifyDown();
    }
    return value;
  }

  heapifyUp(i = this.size - 1) {
    if (i === 0) return;
    const p = Math.floor((i - 1) / 2);
    if (this.compare(this.heap[i], this.heap[p])) {
      this.swap(i, p);
      this.heapifyUp(p);
    }
  }

  heapifyDown(i = 0) {
    const left = i * 2 + 1;
    const right = i * 2 + 2;
    if (left >= this.size) return;
    let smallest = left;
    if (right < this.size && this.heap[right] < this.heap[left]) {
      smallest = right;
    }
    if (this.compare(this.heap[smallest], this.heap[i])) {
      this.swap(smallest, i);
      this.heapifyDown(smallest);
    }
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  get size() {
    return this.heap.length;
  }
}

var smallestChair = function (times, targetFriend) {
  const chairsHeap = new MinHeap({
    items: Array.from({ length: times.length }).map((_, i) => i),
  });
  const leaveHeap = new MinHeap({ compare: (a, b) => a[0] < b[0] });

  times = times.map((time, i) => [...time, i]).sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < times.length; i++) {
    while (leaveHeap.size > 0 && leaveHeap.heap[0][0] <= times[i][0]) {
      chairsHeap.add(leaveHeap.pop()[1]);
    }

    const chair = chairsHeap.pop();

    if (times[i][2] === targetFriend) {
      return chair;
    }

    leaveHeap.add([times[i][1], chair]);
  }
};
