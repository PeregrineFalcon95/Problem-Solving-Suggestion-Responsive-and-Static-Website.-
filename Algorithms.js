let  main = function(){
    let bfs = document.getElementById('bfs');
    let dfs = document.getElementById('dfs');
    let dsu = document.getElementById('dsu');
    let mst = document.getElementById('mst');
    let dij = document.getElementById('dij');
    let segTree = document.getElementById('seg');
    let bit = document.getElementById('bit');

    function makeAllClassEmpty()
    {
        dfs.className = "";
        bfs.className = "";
        mst.className = "";
        dij.className = "";
        segTree.className = "";
        bit.className = "";
        dsu.className = "";
    }

    bfs.addEventListener('click', function(){
        makeAllClassEmpty()
        bfs.className = "current";

        let test = document.querySelector('.heading');
        test.innerText = "Breadth First Search";

        var problem = document.getElementById('Problem1');
        problem.setAttribute("href" , "https://cp-algorithms.com/graph/breadth-first-search.html");
        problem.innerText = "1. CP-Algorithms Tutorial";

        var problem = document.getElementById('Problem2');
        problem.setAttribute("href" , "https://www.tutorialspoint.com/data_structures_algorithms/breadth_first_traversal.htm");
        problem.innerText = "2. Tutorialspoints Tutorial";

        var problem = document.getElementById('Problem3');
        problem.setAttribute("href" , "https://www.hackerearth.com/practice/algorithms/graphs/breadth-first-search/tutorial/");
        problem.innerText = "3. Hackerearths Tutorial";

        var problem = document.getElementById('Problem4');
        problem.setAttribute("href" , "https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/");
        problem.innerText = "4. Geeksforgeeks Tutorial";

        var problem = document.getElementById('Problem5');
        problem.setAttribute("href" , "https://www.khanacademy.org/computing/computer-science/algorithms/breadth-first-search/a/the-breadth-first-search-algorithm");
        problem.innerText = "5. Khanacademys Tutorial";

    })

    dfs.addEventListener('click', function(){
        makeAllClassEmpty()
        dfs.className = "current";
        let test = document.querySelector('.heading');
        test.innerText = "Depth First Search";
        
        var problem = document.getElementById('Problem1');
        problem.setAttribute("href" , "https://cp-algorithms.com/graph/depth-first-search.html");
        problem.innerText = "1. CP-Algorithms Tutorial";

        var problem = document.getElementById('Problem2');
        problem.setAttribute("href" , "https://www.hackerearth.com/practice/algorithms/graphs/depth-first-search/tutorial/");
        problem.innerText = "2. Hackerearths Tutorial";

        var problem = document.getElementById('Problem3');
        problem.setAttribute("href" , "https://www.tutorialspoint.com/data_structures_algorithms/depth_first_traversal.htm");
        problem.innerText = "3. Tutorialspoints Tutorial";

        var problem = document.getElementById('Problem4');
        problem.setAttribute("href" , "https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/");
        problem.innerText = "4. Geeksforgeeks Tutorial";

        var problem = document.getElementById('Problem5');
        problem.setAttribute("href" , "https://www.programiz.com/dsa/graph-dfs");
        problem.innerText = "5. Programiz Tutorial";
        
    })

        
    mst.addEventListener('click', function(){
        makeAllClassEmpty()
        mst.className = "current";
        let test = document.querySelector('.heading');
        test.innerText = "Minimum Spanning Tree";

        var problem = document.getElementById('Problem1');
        problem.setAttribute("href" , "https://cp-algorithms.com/graph/mst_kruskal.html");
        problem.innerText = "1. Cp-Algorithms Tutorial";

        var problem = document.getElementById('Problem2');
        problem.setAttribute("href" , "https://www.hackerearth.com/practice/algorithms/graphs/minimum-spanning-tree/tutorial/");
        problem.innerText = "2. Hackerearths Tutorial";

        var problem = document.getElementById('Problem3');
        problem.setAttribute("href" , "https://www.tutorialspoint.com/data_structures_algorithms/spanning_tree.htm");
        problem.innerText = "3. Tutorialspoints Tutorial";

        var problem = document.getElementById('Problem4');
        problem.setAttribute("href" , "https://www.programiz.com/dsa/spanning-tree-and-minimum-spanning-tree");
        problem.innerText = "4. Programiz Tutorial";

        var problem = document.getElementById('Problem5');
        problem.setAttribute("href" , "https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/");
        problem.innerText = "5. Geeksforgeeks Tutorial";

    })
    
    dij.addEventListener('click', function(){
        makeAllClassEmpty()
        dij.className = "current";
        let test = document.querySelector('.heading');
        test.innerText = "Dijkstra";

        var problem = document.getElementById('Problem1');
        problem.setAttribute("href" , "https://cp-algorithms.com/graph/dijkstra.html");
        problem.innerText = "1. CP-Algorithms";

        var problem = document.getElementById('Problem2');
        problem.setAttribute("href" , "https://www.hackerearth.com/practice/algorithms/graphs/shortest-path-algorithms/tutorial/");
        problem.innerText = "2. Hackerearths Tutorial";

        var problem = document.getElementById('Problem3');
        problem.setAttribute("href" , "https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/");
        problem.innerText = "3. Geeksforgeeks Tutorial";

        var problem = document.getElementById('Problem4');
        problem.setAttribute("href" , "https://www.programiz.com/dsa/dijkstra-algorithm");
        problem.innerText = "4. Programiz Tutorial";

        var problem = document.getElementById('Problem5');
        problem.setAttribute("href" , "https://codeforces.com/blog/entry/43508");
        problem.innerText = "5. Codeforces Tutorial";


    })
    
    segTree.addEventListener('click', function(){
        makeAllClassEmpty()
        segTree.className = "current";
        let test = document.querySelector('.heading');
        test.innerText = "Segment Tree";
        
        var problem = document.getElementById('Problem1');
        problem.setAttribute("href" , "https://cp-algorithms.com/data_structures/segment_tree.html");
        problem.innerText = "1. CP-Algorithms";

        var problem = document.getElementById('Problem2');
        problem.setAttribute("href" , "https://codeforces.com/blog/entry/15890");
        problem.innerText = "2. Codeforces Tutorial";

        var problem = document.getElementById('Problem3');
        problem.setAttribute("href" , "https://www.hackerearth.com/practice/data-structures/advanced-data-structures/segment-trees/tutorial/");
        problem.innerText = "3. Hackerearth Tutorial";

        var problem = document.getElementById('Problem4');
        problem.setAttribute("href" , "https://www.geeksforgeeks.org/segment-tree-set-1-sum-of-given-range/");
        problem.innerText = "4. Geeksforgeeks Tutorial";

        var problem = document.getElementById('Problem5');
        problem.setAttribute("href" , "https://www.tutorialspoint.com/segment-trees-in-data-structure");
        problem.innerText = "5. Tutorialspoint Tutorial";

    })
    
    bit.addEventListener('click', function(){
        makeAllClassEmpty()
        bit.className = "current";
        let test = document.querySelector('.heading');
        test.innerText = "Binary Indexed Tree";
        
        var problem = document.getElementById('Problem1');
        problem.setAttribute("href" , "https://medium.com/@edison.cy.yang/explaining-the-binary-indexed-tree-34f27ad0a513");
        problem.innerText = "1. Medium Tutorial";

        var problem = document.getElementById('Problem2');
        problem.setAttribute("href" , "https://cp-algorithms.com/data_structures/fenwick.html");
        problem.innerText = "2. CP-algorithms Tutorial";

        var problem = document.getElementById('Problem3');
        problem.setAttribute("href" , "https://www.topcoder.com/community/competitive-programming/tutorials/binary-indexed-trees/");
        problem.innerText = "3. TopCoder Tutorial";

        var problem = document.getElementById('Problem4');
        problem.setAttribute("href" , "https://www.geeksforgeeks.org/binary-indexed-tree-or-fenwick-tree-2/");
        problem.innerText = "4. Geekforgeeks Tutorial";

        var problem = document.getElementById('Problem5');
        problem.setAttribute("href" , "https://codeforces.com/blog/entry/57292");
        problem.innerText = "5. Codeforces Tutorial";

    })
    
    dsu.addEventListener('click', function(){
        makeAllClassEmpty()
        dsu.className = "current";
        let test = document.querySelector('.heading');
        test.innerText = "Disjoint Set Union";
        
        var problem = document.getElementById('Problem1');
        problem.setAttribute("href" , "https://www.topcoder.com/community/competitive-programming/tutorials/disjoint-set-data-structures/");
        problem.innerText = "1. TopCoder Tutorial";

        var problem = document.getElementById('Problem2');
        problem.setAttribute("href" , "https://cp-algorithms.com/data_structures/disjoint_set_union.html");
        problem.innerText = "2. CP-Algorithm Tutorial";

        var problem = document.getElementById('Problem3');
        problem.setAttribute("href" , "https://codeforces.com/blog/entry/44351");
        problem.innerText = "3. Codeforces Tutorial";

        var problem = document.getElementById('Problem4');
        problem.setAttribute("href" , "https://www.hackerearth.com/practice/data-structures/disjoint-data-strutures/basics-of-disjoint-data-structures/tutorial/");
        problem.innerText = "4. HackerEarth Tutorial";

        var problem = document.getElementById('Problem5');
        problem.setAttribute("href" , "https://discuss.codechef.com/t/disjoint-set-complete-video-tutorial-course-1-new-video-added-24-march-2020/57689");
        problem.innerText = "5. Codechef Video Tutorial";

    })
    


}();

