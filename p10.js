console.time('p10');
var n = 20 * 1000 * 1000;
//var n = 10;
// made a change
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
s = 0;
var bound = (n -1) % 2;
var crossed = {};
for(var i = 4; i < n; i+=2 )
    crossed[i] = true;
var crossLimit = (Math.floor(Math.sqrt(n)) - 1)/2;


for(var k =3; k< crossLimit; k +=2)
{
    if (!crossed[k] )
        {
            for(var i = 2*k*(k+1); i< bound; i+=2*k+1)
                crossed[i] = true;
        }
}


for(var i = 2; i< n; i++)
{
    if (!crossed[i])
        s+=2*i+1;
}
    
console.timeEnd('p10-2');
console.log(s);