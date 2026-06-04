/* 

distance[source] = 0
heap = [[source, 0]]

while heap not empty:
    take node with smallest distance

    if this distance is old:
        continue

    check all neighbours:
        newDistance = currentDistance + edgeWeight

        if newDistance is better:
            update distance
            push into heap
            
*/