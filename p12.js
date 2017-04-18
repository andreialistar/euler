console.time('p12');
var a = 1;
var j = 1;
var nrDiv = 0;
do{
    nrDiv = 0;
    j ++;
    a +=j;
    
    for(var i = 1; i<= Math.sqrt(a); i++)
        if (a % i === 0) nrDiv +=2;
    if (a%2 !=0) nrDiv --; // correction
   console.log(j + '\t' +a + '\t' + nrDiv); 
}while(nrDiv <500);

console.timeEnd('p12');
console.log(a);