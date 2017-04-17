//(a+b+c)(a+b+c) - a2 -b2 -c3 = ab +ac + ba +  bc + ca + cb = 2ab + 2bc + 2ac
var n = 100;

console.time("p6");
var s = 0;
for(var a  = 1; a < n; a ++)
    for(var b = a+1; b<= n; b++)
        {
          s += 2* a*b;  
        }


console.timeEnd("p6");
console.log("sqr(sum) - sum(sqr) = "+s);

console.time("p6-2")
var sumOfSquares = n*(n+1)*(2*n+1) / 6;
var squareOfSums = n*n*(n+1)*(n+1) / 4;
var s = squareOfSums - sumOfSquares;

console.timeEnd("p6-2");

console.log("sqr(sum) - sum(sqr) = "+s);
