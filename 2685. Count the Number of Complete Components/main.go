package main

func countCompleteComponents(n int, edges [][]int) int {
	adj := make(map[int][]int)
	for _, edge := range edges {
		u, v := edge[0], edge[1]
		adj[u] = append(adj[u], v)
		adj[v] = append(adj[v], u)
	}

	visit := make(map[int]bool)
	res := 0

	var dfs func(i int, nodes *[]int) *[]int
	dfs = func(i int, nodes *[]int) *[]int {
		if visit[i] {
			return &[]int{}
		}
		visit[i] = true
		*nodes = append(*nodes, i)
		for _, nei := range adj[i] {
			dfs(nei, nodes)
		}
		return nodes
	}

	for i := range n {
		if visit[i] {
			continue
		}

		component := dfs(i, &[]int{})
		flag := true
		for _, node := range *component {
			if len(adj[node]) != len(*component)-1 {
				flag = false
				break
			}
		}
		if flag {
			res++
		}
	}

	return res
}
