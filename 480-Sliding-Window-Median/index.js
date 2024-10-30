/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function (nums, k) {
    const res = [];
    const heapCount = {};
    const minHeap = new Heap();
    const maxHeap = new Heap((a, b) => a > b);

    for (let i = 0; i < k; i++) {
        maxHeap.push(nums[i]);
    }
    for (let i = 0; i < Math.floor(k / 2); i++) {
        minHeap.push(maxHeap.pop());
    }

    const findMedian = () => {
        if (k % 2 === 1) {
            return maxHeap.heap[0]
        } else {
            return (maxHeap.heap[0] + minHeap.heap[0]) / 2;
        }
    }

    let median = findMedian();
    res.push(median);

    for (let i = k; i < nums.length; i++) {
        const prev = nums[i - k];
        heapCount[prev] = (heapCount[prev] || 0) + 1;
        let balance = prev <= median ? -1 : 1;

        if (nums[i] <= median) {
            maxHeap.push(nums[i]);
            balance++;
        } else {
            minHeap.push(nums[i]);
            balance--;
        }

        if (balance < 0) {
            maxHeap.push(minHeap.pop())
        } else if (balance > 0) {
            minHeap.push(maxHeap.pop());
        }

        while (maxHeap.size && heapCount[maxHeap.heap[0]] > 0) {
            heapCount[maxHeap.heap[0]] -= 1
            maxHeap.pop()
        }
        while (minHeap.size && heapCount[minHeap.heap[0]] > 0) {
            heapCount[minHeap.heap[0]] -= 1
            minHeap.pop()
        }

        median = findMedian();
        res.push(median);
    }

    return res;
};