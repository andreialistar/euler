
var a = 999;
var b = a;

var palindrom = function(x)
{
    var s = x + "";
    
    for(var i = 0; i< s.length/2; i++)
        if (s[i] != s[s.length-i-1])
            return false;
    return true;
}

console.time('p4 - 1');

var p = 0;
var m = "";

while( a > 100){
    b = a;
    while(b > 99){
        
        if (a*b < p)
            break;
        
        if (palindrom(a*b)){
            //console.log(a + ' ' + b + ' ' + a*b );
            if (p < a*b){
                p = a*b;
                m = a + ' ' + b + ' ' + a*b ;
            }
        }
        b= b-1;
    }
    a = a-1;
}
console.timeEnd('p4 - 1');
console.log("MAX: "+ m);

console.time('p4 - 2');

p = 0;
a = 999;
var db = 1;
while(a >= 100)
    {
        if (a % 11 === 0){
            b = 999;
            db = 1
        }else {
            b = 990;
            db = 11;
        }
            
        while( b >= a){
            if (a *b <= p) break;
            if (palindrom(a*b))
                p = a*b;
            b = b - db;
        }
        a = a-1;
    }

console.timeEnd('p4 - 2');
console.log("MAX: "+ m);




