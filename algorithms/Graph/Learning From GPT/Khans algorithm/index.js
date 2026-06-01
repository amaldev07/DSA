/* we have to fin the topological sortingin a graph
Only in graph where no loop
forst take the node with 0 indegree
then remove that node fromt he graph with its edges
then agian find the nodes with 0 indegree
if there is no cycle the length of topo sort array should be same as total no of nodes in graph
*/

/* 
to do that
firt covert edges to graph 
on the same for loop find indegree of each node

if there is a edge b/z a->b
indegree of b is 1

we can kee an array for indegree
now we have graph and indegree array
we need a queue for processing 0 indegree nodes
and a out put array for toposort
if there is any in the queue 

we have take that node 

get its neighbours from graph and reduce there indegree by1 

            1
        /       \
    /               \   
2                       3

so int he graph

2 and 3 has indegree [1,1]
when 1 from queue processed reduce their indegree by 1 

which is same as removing the edge from 1-> and 1->3
*/

function kahnsAlgorithm(numNodes, edges) {
    let graph = Array.from({ length: numNodes }, () => []);
    let indegree = Array(numNodes).fill(0);
    let queue = [];
    let result = [];

    for (let [u, v] of edges) {
        graph[u].push(v);
        indegree[v]++;
    }

    for (let i = 0; i < indegree.length; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }

    while (queue.length > 0) {
        let node = queue.shift();
        result.push(node);

        for (neighbour of graph[node]) {
            indegree[neighbour]--;
            if (indegree[neighbour === 0]) {
                queue.push(neighbour);
            }
        }
    }

    return result.length === numNodes ? result : [];

}