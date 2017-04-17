var a = 1;
var p = [2];

var isPrime = function(a,v)
{
    if (a < 9) return true;
    var f = Math.floor(Math.sqrt(a));
    
    for(var i= 0;i<v.length; i++){
        if (v[i] > f) return true;
        if (a%v[i]===0) return false;
    }
    return true;
}
var primeNr = 0;
var limit = 10001;

console.time("p7");
while(p.length < limit)
{
    a+=2;
    if (isPrime(a,p))
    {
        p.push(a);
 //       console.log(p.length + " " + a);
    }
}

console.timeEnd("p7");

console.log(a);
