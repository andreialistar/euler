var a = 600851475143;
//var a = 13195  * 7 * 29 * 29;

var p = 1;
while( 1 != a)
    {
        
        p = p + 2;
        while (a % p == 0) {
            a = a / p;
            console.log(p);
        }
    }

console.log("LPF: " + p);