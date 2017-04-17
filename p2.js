var a = 1;
var b = 2;
var c = a+b;
var s = 2;


while(b < 4000000)
{
    c = a+b;
    a = b;
    b = c;
    
    if (b % 2 === 0)
        s = s + b;   
}

console.log(s);
// every third number in the sequence is even, it can be found by the formula c = 4*b + a

var s2 = s;
a = 2;
b = 8;
s = 10;
while(b < 4000000)
{
    s = s + b;
    c = 4*b + a;
    a = b;
    b = c;

    console.log(b + "  "+s);
}

console.log(s);