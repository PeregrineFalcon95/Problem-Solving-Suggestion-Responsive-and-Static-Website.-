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
        problem.setAttribute("href" , "https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=676&page=show_problem&problem=272");
        problem.innerText = "1. Online Judge (Ex.UVA) 336 - A Node Too Far";

        var problem = document.getElementById('Problem2');
        problem.setAttribute("href" , "https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=676&page=show_problem&problem=1594");
        problem.innerText = "2. Online Judge (Ex.UVA) 10653 - Bombs! NO they are Mines!!";

        var problem = document.getElementById('Problem3');
        problem.setAttribute("href" , "https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=676&page=show_problem&problem=370");
        problem.innerText = "3. Online Judge (Ex.UVA) 429 - Word Transformation";

        var problem = document.getElementById('Problem4');
        problem.setAttribute("href" , "https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=676&page=show_problem&problem=703");
        problem.innerText = "4. Online Judge (Ex.UVA) 762 - We Ship Cheap";

        var problem = document.getElementById('Problem5');
        problem.setAttribute("href" , "https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=676&page=show_problem&problem=865");
        problem.innerText = "5. Online Judge (Ex.UVA) 924 - Spreading The News";

        var problem = document.getElementById('Problem6');
        problem.setAttribute("href" , "https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=24&page=show_problem&problem=1900");
        problem.innerText = "6. Online Judge (Ex.UVA) 10959 - The Party, Part I";

        var problem = document.getElementById('Problem7');
        problem.setAttribute("href" , "https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=24&page=show_problem&problem=3312");
        problem.innerText = "7. Online Judge (Ex.UVA) 12160 - Unlock the Lock";

        var problem = document.getElementById('Problem8');
        problem.setAttribute("href" , "https://codeforces.com/problemset/problem/199/D");
        problem.innerText = "8. Codeforces - Jumping on Walls";

        var problem = document.getElementById('Problem9');
        problem.setAttribute("href" , "https://codeforces.com/contest/329/problem/B");
        problem.innerText = "9. Codeforces - Biridian Forest";

        var problem = document.getElementById('Problem10');
        problem.setAttribute("href" , "https://codeforces.com/problemset/problem/242/C");
        problem.innerText = "10. Codeforces - King's Path";

        

        
    })

    dfs.addEventListener('click', function(){
        makeAllClassEmpty()
        dfs.className = "current";
        let test = document.querySelector('.heading');
        test.innerText = "Depth First Search";
        
        var problem = document.getElementById('Problem1');
        problem.setAttribute("href" , "https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=24&page=show_problem&problem=1246");
        problem.innerText = "1. Online Judge (Ex.UVA) 10305 - Ordering Tasks";

        var problem = document.getElementById('Problem2');
        problem.setAttribute("href" , "https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=24&page=show_problem&problem=2001");
        problem.innerText = "2. Online Judge (Ex.UVA) 11060 - Beverages";

        var problem = document.getElementById('Problem3');
        problem.setAttribute("href" , "https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=24&page=show_problem&problem=136");
        problem.innerText = "3. Online Judge (Ex.UVA) 200 - Rare Order";

        var problem = document.getElementById('Problem4');
        problem.setAttribute("href" , "https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=24&page=show_problem&problem=60");
        problem.innerText = "4. Online Judge (Ex.UVA) 124 - Following Orders";

        var problem = document.getElementById('Problem5');
        problem.setAttribute("href" , "https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=24&page=show_problem&problem=2035");
        problem.innerText = "5. Online Judge (Ex.UVA) 11094 - Continents";

        var problem = document.getElementById('Problem6');
        problem.setAttribute("href" , "https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=24&page=show_problem&problem=288");
        problem.innerText = "6. Online Judge (Ex.UVA) 352 - The Seasonal War";

        var problem = document.getElementById('Problem7');
        problem.setAttribute("href" , "https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=24&page=show_problem&problem=598");
        problem.innerText = "7. Online Judge (Ex.UVA) 657 - The die is cast";

        var problem = document.getElementById('Problem8');
        problem.setAttribute("href" , "https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=24&page=show_problem&problem=2465");
        problem.innerText = "8. Online Judge (Ex.UVA) 11470 - Square Sums";

        var problem = document.getElementById('Problem9');
        problem.setAttribute("href" , "https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=24&page=show_problem&problem=3104");
        problem.innerText = "9. Online Judge (Ex.UVA) 11953 - Battleships";

        var problem = document.getElementById('Problem10');
        problem.setAttribute("href" , "https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=24&page=show_problem&problem=2499");
        problem.innerText = "10. Online Judge (Ex.UVA) 11504 - Dominos";
        
    })

        
    mst.addEventListener('click', function(){
        makeAllClassEmpty()
        mst.className = "current";
        let test = document.querySelector('.heading');
        test.innerText = "Minimum Spanning Tree";

        var problem = document.getElementById('Problem1');
        problem.setAttribute("href" , "https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=24&page=show_problem&problem=849");
        problem.innerText = "1. Online Judge (Ex.UVA) 908 - Re-connecting Computer Sites";

        var problem = document.getElementById('Problem2');
        problem.setAttribute("href" , "https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=24&page=show_problem&problem=3615");
        problem.innerText = "2. Online Judge (Ex.UVA) 1174 - IP-TV";

        var problem = document.getElementById('Problem3');
        problem.setAttribute("href" , "https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=24&page=show_problem&problem=975");
        problem.innerText = "3. Online Judge (Ex.UVA) 10034 - Freckles";

        var problem = document.getElementById('Problem4');
        problem.setAttribute("href" , "https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=24&page=show_problem&problem=2169");
        problem.innerText = "4. Online Judge (Ex.UVA) 11228 - Transportation system.";

        var problem = document.getElementById('Problem5');
        problem.setAttribute("href" , "https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=24&page=show_problem&problem=2678");
        problem.innerText = "5. Online Judge (Ex.UVA) 11631 - Dark roads";

        var problem = document.getElementById('Problem6');
        problem.setAttribute("href" , "https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=24&page=show_problem&problem=2847");
        problem.innerText = "6. Online Judge (Ex.UVA) 11747 - Heavy Cycle Edges";

        var problem = document.getElementById('Problem7');
        problem.setAttribute("href" , "https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=24&page=show_problem&problem=475");
        problem.innerText = "7. Online Judge (Ex.UVA) 534 - Frogger";

        var problem = document.getElementById('Problem8');
        problem.setAttribute("href" , "https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=24&page=show_problem&problem=485");
        problem.innerText = "8. Online Judge (Ex.UVA) 544 - Heavy Cargo";

        var problem = document.getElementById('Problem9');
        problem.setAttribute("href" , "https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=24&page=show_problem&problem=989");
        problem.innerText = "9. Online Judge (Ex.UVA) 10048 - Audiophobia";

        var problem = document.getElementById('Problem10');
        problem.setAttribute("href" , "https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=24&page=show_problem&problem=1040");
        problem.innerText = "10. Online Judge (Ex.UVA) 10099 - The Tourist Guide";
    })
    
    dij.addEventListener('click', function(){
        makeAllClassEmpty()
        dij.className = "current";
        let test = document.querySelector('.heading');
        test.innerText = "Dijkstra";

        var problem = document.getElementById('Problem1');
        problem.setAttribute("href" , "https://codeforces.com/problemset/problem/20/C");
        problem.innerText = "1. Codeforces Dijkstra?";

        var problem = document.getElementById('Problem2');
        problem.setAttribute("href" , "https://codeforces.com/contest/449/problem/B");
        problem.innerText = "2. Codeforces Jzzhu and Cities.";

        var problem = document.getElementById('Problem3');
        problem.setAttribute("href" , "https://codeforces.com/contest/715/problem/B");
        problem.innerText = "3. Codeforces Complete The Graph.";

        var problem = document.getElementById('Problem4');
        problem.setAttribute("href" , "https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=24&page=show_problem&problem=1742");
        problem.innerText = "4. Online Judge (Ex.UVA) 10801 - Lift Hopping";

        var problem = document.getElementById('Problem5');
        problem.setAttribute("href" , "https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=24&page=show_problem&problem=870");
        problem.innerText = "5. Online Judge (Ex.UVA) 929 - Number Maze";

        var problem = document.getElementById('Problem6');
        problem.setAttribute("href" , "https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=24&page=show_problem&problem=1927");
        problem.innerText = "6. Online Judge (Ex.UVA) 10986 - Sending email";

        var problem = document.getElementById('Problem7');
        problem.setAttribute("href" , "https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=24&page=show_problem&problem=3553");
        problem.innerText = "7. Online Judge (Ex.UVA) 1112 - Mice and Maze";

        var problem = document.getElementById('Problem8');
        problem.setAttribute("href" , "https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=24&page=show_problem&problem=464");
        problem.innerText = "8. Online Judge (Ex.UVA) 523 - Minimum Transport Cost";

        var problem = document.getElementById('Problem9');
        problem.setAttribute("href" , "https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=24&page=show_problem&problem=1219");
        problem.innerText = "9. Online Judge (Ex.UVA) 10278 - Fire Station";

        var problem = document.getElementById('Problem10');
        problem.setAttribute("href" , "http://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=24&page=show_problem&problem=4743");
        problem.innerText = "10. Online Judge (Ex.UVA) 12878 - Flowery Trails";
    })
    
    segTree.addEventListener('click', function(){
        makeAllClassEmpty()
        segTree.className = "current";
        let test = document.querySelector('.heading');
        test.innerText = "Segment Tree";
        
        var problem = document.getElementById('Problem1');
        problem.setAttribute("href" , "https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=24&page=show_problem&problem=2176");
        problem.innerText = "1. Online Judge (Ex.UVA) 11235 - Frequent values";

        var problem = document.getElementById('Problem2');
        problem.setAttribute("href" , "https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=24&page=show_problem&problem=2272");
        problem.innerText = "2. Online Judge (Ex. UVA ) 11297 - Census";

        var problem = document.getElementById('Problem3');
        problem.setAttribute("href" , "http://www.lightoj.com/volume_showproblem.php?problem=1207&language=english&type=pdf");
        problem.innerText = "3. Lightoj 1207 – Posters for Election";

        var problem = document.getElementById('Problem4');
        problem.setAttribute("href" , "http://www.lightoj.com/volume_showproblem.php?problem=1080&language=english&type=pdf");
        problem.innerText = "4. Lightoj 1080 – Binary Simulation";

        var problem = document.getElementById('Problem5');
        problem.setAttribute("href" , "http://www.lightoj.com/volume_showproblem.php?problem=1082&language=english&type=pdf");
        problem.innerText = "5. Lightoj 1082 – Array Queries";

        var problem = document.getElementById('Problem6');
        problem.setAttribute("href" , "http://www.lightoj.com/volume_showproblem.php?problem=1085&language=english&type=pdf");
        problem.innerText = "6. Lightoj 1085 – All Possible Increasing Subsequences";

        var problem = document.getElementById('Problem7');
        problem.setAttribute("href" , "http://www.lightoj.com/volume_showproblem.php?problem=1097&language=english&type=pdf");
        problem.innerText = "7. Lightoj 1097 – Lucky Number";

        var problem = document.getElementById('Problem8');
        problem.setAttribute("href" , "https://codeforces.com/contest/339/problem/D");
        problem.innerText = "8. Codeforces Xenia and Bit Operations";

        var problem = document.getElementById('Problem9');
        problem.setAttribute("href" , "https://codeforces.com/contest/356/problem/A");
        problem.innerText = "9. COdeforces Knight Tournament";

        var problem = document.getElementById('Problem10');
        problem.setAttribute("href" , "https://codeforces.com/contest/459/problem/D");
        problem.innerText = "10. Codeforces Pashmak and Parmida's problem";
    })
    
    bit.addEventListener('click', function(){
        makeAllClassEmpty()
        bit.className = "current";
        let test = document.querySelector('.heading');
        test.innerText = "Binary Indexed Tree";
        
        var problem = document.getElementById('Problem1');
        problem.setAttribute("href" , "https://www.spoj.com/problems/INVCNT/");
        problem.innerText = "1. Spoj Inversion Count";

        var problem = document.getElementById('Problem2');
        problem.setAttribute("href" , "https://codeforces.com/gym/100741/problem/A");
        problem.innerText = "2. Codeforces Queries";

        var problem = document.getElementById('Problem3');
        problem.setAttribute("href" , "https://www.hackerrank.com/challenges/similarpair/problem");
        problem.innerText = "3. HackerRank Similar Pair";

        var problem = document.getElementById('Problem4');
        problem.setAttribute("href" , "https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&page=show_problem&problem=3977");
        problem.innerText = "4. Online Judge (Ex. UVA) 12532 - Interval Product";

        var problem = document.getElementById('Problem5');
        problem.setAttribute("href" , "https://codeforces.com/problemset/problem/296/C");
        problem.innerText = "5. Codeforces Greg and Array";

        var problem = document.getElementById('Problem6');
        problem.setAttribute("href" , "https://codeforces.com/contest/276/problem/C");
        problem.innerText = "6. Codeforces Little Girl and Maximum Sum";

        var problem = document.getElementById('Problem7');
        problem.setAttribute("href" , "https://codeforces.com/contest/1354/problem/D");
        problem.innerText = "7. Codeforces Multiset";

        var problem = document.getElementById('Problem8');
        problem.setAttribute("href" , "https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=24&page=show_problem&problem=3238");
        problem.innerText = "8. Online Judge (Ex. UVA) 12086 - Potentiometers";

        var problem = document.getElementById('Problem9');
        problem.setAttribute("href" , "http://www.lightoj.com/volume_showproblem.php?problem=1112&language=english&type=pdf");
        problem.innerText = "9. Lightoj 1112 – Curious Robin Hood";

        var problem = document.getElementById('Problem10');
        problem.setAttribute("href" , "http://www.lightoj.com/volume_showproblem.php?problem=1266&language=english&type=pdf");
        problem.innerText = "10. Lightoj 1266 – Points in Rectangle";
    })
    
    dsu.addEventListener('click', function(){
        makeAllClassEmpty()
        dsu.className = "current";
        let test = document.querySelector('.heading');
        test.innerText = "Disjoint Set Union";
        
        var problem = document.getElementById('Problem1');
        problem.setAttribute("href" , "https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=24&page=show_problem&problem=734");
        problem.innerText = "1. Online Judge(Ex. UVA) 793 - Network Connections";

        var problem = document.getElementById('Problem2');
        problem.setAttribute("href" , "https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=24&page=show_problem&problem=3638");
        problem.innerText = "2. Online Judge(Ex. UVA) 1197 - The Suspects";

        var problem = document.getElementById('Problem3');
        problem.setAttribute("href" , "https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=24&page=show_problem&problem=4075");
        problem.innerText = "3. Online Judge(Ex. UVA) 1329 - Corporative Network";

        var problem = document.getElementById('Problem4');
        problem.setAttribute("href" , "https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=24&page=show_problem&problem=1099");
        problem.innerText = "4. Online Judge(Ex. UVA) 10158 - War";

        var problem = document.getElementById('Problem5');
        problem.setAttribute("href" , "https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=24&page=show_problem&problem=1168");
        problem.innerText = "5. Online Judge(Ex. UVA) 10227 - Forests";

        var problem = document.getElementById('Problem6');
        problem.setAttribute("href" , "https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=24&page=show_problem&problem=1448");
        problem.innerText = "6. Online Judge(Ex. UVA) 10507 - Waking up brain";

        var problem = document.getElementById('Problem7');
        problem.setAttribute("href" , "https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=24&page=show_problem&problem=1524");
        problem.innerText = "7. Online Judge(Ex. UVA) 10583 - Ubiquitous Religions";

        var problem = document.getElementById('Problem8');
        problem.setAttribute("href" , "https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=24&page=show_problem&problem=1549");
        problem.innerText = "8. Online Judge(Ex. UVA) 10608 - Friends";

        var problem = document.getElementById('Problem9');
        problem.setAttribute("href" , "https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=24&page=show_problem&problem=2498");
        problem.innerText = "9. Online Judge(Ex. UVA) 11503 - Virtual Friends";

        var problem = document.getElementById('Problem10');
        problem.setAttribute("href" , "https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=24&page=show_problem&problem=2737");
        problem.innerText = "10. Online Judge(Ex. UVA) 11690 - Money Matters";
    })
    


}();

