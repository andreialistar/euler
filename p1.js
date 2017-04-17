var s = 0;
for(var i = 2; i< 1000; i++)
    if ( i % 5 === 0 || i % 3 ===0 ) s += i;

console.log(s);