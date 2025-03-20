package main

type UnionFind struct {
	parent []int
	size   []int
}

func (uf *UnionFind) find(x int) int {
	if x != uf.parent[x] {
		uf.parent[x] = uf.find(uf.parent[x])
	}
	return uf.parent[x]
}

func (uf *UnionFind) union(x, y int) {
	x = uf.find(x)
	y = uf.find(y)
	if x != y {
		if uf.size[x] < uf.size[y] {
			uf.parent[x] = y
			uf.size[y] += uf.size[x]
		} else {
			uf.parent[y] = x
			uf.size[x] += uf.size[y]
		}
	}
}

func New(n int) *UnionFind {
	uf := &UnionFind{
		parent: make([]int, n),
		size:   make([]int, n),
	}

	for i := range n {
		uf.parent[i] = i
		uf.size[i] = 1
	}

	return uf
}

func minimumCost(n int, edges [][]int, query [][]int) []int {
	uf := New(n)
	for _, e := range edges {
		uf.union(e[0], e[1])
	}

	componentCost := make(map[int]int)
	for _, e := range edges {
		root := uf.find(e[0])
		if val, exists := componentCost[root]; !exists {
			componentCost[root] = e[2]
		} else {
			componentCost[root] = val & e[2]
		}
	}

	res := make([]int, 0)

	for _, q := range query {
		r1, r2 := uf.find(q[0]), uf.find(q[1])
		if r1 != r2 {
			res = append(res, -1)
		} else {
			res = append(res, componentCost[r1])
		}
	}

	return res
}
