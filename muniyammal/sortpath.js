const person = {
    start: {A: 4, B: 3},
    A: {C: 2, D: 1},
    B: {A: 5, D: 7},
    C: {D: 6, end: 1},
    D: {end: 1},
    end: {}
  };

  const minCostNode = (costs, processed) => {
    return Object.keys(costs).reduce((min, node) => {
      if (min === null || costs[node] < costs[min]) {
        if (!processed.includes(node)) {
          min = node;
        }
      }
      return min;
    }, null);
  };

  // function that returns the minimum cost and path to reach end
  const dijkstra = (graph) => {

    // track min cost to reach each node
    const costs = Object.assign({end: Infinity}, graph.start);

    // track paths
    const totals = {end: null};
    for (let child in graph.start) {
      totals[child] = 'start';
    }
    const processed = [];

    let node = minCostNode(costs, processed);

    while (node) {
      let cost = costs[node];
      let single = graph[node];
      for (let n in single) {
        let newCost = cost + single[n];
        if (!costs[n]) {
          costs[n] = newCost;
          totals[n] = node;
        }
        if (costs[n] > newCost) {
          costs[n] = newCost;
          totals[n] = node;
        }
      }
      processed.push(node);
      node = minCostNode(costs, processed);
    }

    let optimalPath = ['end'];
    let total = totals.end;
    while (total) {
      optimalPath.push(total);
      total = totals[total];
    }
    optimalPath.reverse();

    const results = {
      length: costs.end,
      path: optimalPath
    };

    return results;
  };
  // function call
  console.log(dijkstra(person));