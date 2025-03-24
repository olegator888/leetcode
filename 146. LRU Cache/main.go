package main

type Node struct {
	key   int
	value int
	prev  *Node
	next  *Node
}

type Deque struct {
	Left  *Node
	Right *Node
}

func (d *Deque) Append(node *Node) {
	// this means both nodes are nil
	if d.Left == nil {
		d.Left = node
		d.Right = node
		return
	}
	d.Right.next = node
	node.prev = d.Right
	d.Right = node
}

func (d *Deque) Popleft() *Node {
	if d.Left == nil {
		return nil
	}
	node := d.Left
	d.Left = node.next
	node.next = nil
	if d.Left != nil {
		d.Left.prev = nil
	}
	return node
}

func (d *Deque) Remove(node *Node) {
	if node == d.Left {
		d.Popleft()
		return
	}
	if node == d.Right {
		d.Right = d.Right.prev
		d.Right.next = nil
		node.prev = nil
		return
	}
	prev, next := node.prev, node.next
	if prev != nil {
		prev.next = next
	}
	if next != nil {
		next.prev = prev
	}
	node.prev = nil
	node.next = nil
}

func (d *Deque) MoveToFront(node *Node) {
	d.Remove(node)
	d.Append(node)
}

type LRUCache struct {
	cache    map[int]*Node
	capacity int
	q        Deque
}

func Constructor(capacity int) LRUCache {
	return LRUCache{
		capacity: capacity,
		cache:    make(map[int]*Node),
		q:        Deque{},
	}
}

func (this *LRUCache) Get(key int) int {
	if node, exists := this.cache[key]; exists {
		this.q.MoveToFront(node)
		return node.value
	}
	return -1
}

func (this *LRUCache) Put(key int, value int) {
	if node, exists := this.cache[key]; exists {
		node.value = value
		this.q.MoveToFront(node)
	} else {
		node = &Node{key: key, value: value}
		this.cache[key] = node
		this.q.Append(node)
	}
	if len(this.cache) > this.capacity {
		lru := this.q.Popleft()
		if lru == nil {
			return
		}
		delete(this.cache, lru.key)
	}
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * obj := Constructor(capacity);
 * param_1 := obj.Get(key);
 * obj.Put(key,value);
 */
