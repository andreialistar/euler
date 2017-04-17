console.time('p10');
var n = 50 * 1000 * 1000;
//var n = 10;

var a = 1;
var p = [3];
var s = 5;
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


for(var i = 5; i < n; i+=2)
    if (isPrime(i,p)){
        p.push(i);
        s+=i;
    }



console.timeEnd('p10');

console.log(s);
console.time('p10-2');

var limit = n;
var sum = 0;
var sievebound = (limit -1) % 2;
var sieve = {};
var crossLimit = (Math.floor(Math.sqrt(n)) - 1)/2;

for(var i = 1; i < crossLimit; i++ )
    if (!sieve[i]){
        for(var j = 2*i*(i+1); j< sievebound; j+= 2*i+1)
            sieve[j] = true;
    }
sum = 2;

for(var i = 1; i< sievebound; i++)
{
    if (!crossed[i])
        s+=2*i+1;
}
    
console.timeEnd('p10-2');
console.log(s);