console.time('p14');
var seq = {};
var a = 1;
var s = 0;
var maxChain = 0;
var maxa = 0;

var collantz = function(x){
    if (x % 2 === 0 ) return x / 2;
    return 3*x+1;
}

do{
    s = 0;
    n = ++a;
  //  var ss = '' + n;
    while(n > 1){
        if (seq[n]) {
            s += seq[n];
            break;
        }
        n = collantz(n);
  //      ss += '->'+n; 
        s ++;
    }
    seq[a] = s;
    s = s+1;
  //  console.log(a +' ' + s + " " + ss);
    if (s > maxChain){ maxChain = s;
                      maxa = a;
                     }
    
}while(a < 1000000)
    
    
console.timeEnd('p14');
console.log( maxa +' ' + maxChain);
//console.log(seq);