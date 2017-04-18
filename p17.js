console.time('p17');

var a = {};
a[1] = 'one';
a[2] = 'two';
a[3] = 'three';
a[4] = 'four';
a[5] = 'five';
a[6] = 'six';
a[7] = 'seven';
a[8] = 'eight';
a[9] = 'nine';
a[10] = 'ten';
a[11] = 'eleven';
a[12] = 'twelve';
a[13] = 'thirteen';
a[14] = 'fourteen';
a[15] = 'fifteen';
a[16] = 'sixteen';
a[17] = 'seventeen';
a[18] = 'eighteen';
a[19] = 'nineteen';
a[20] = 'twenty';
a[30] = 'thirty';
a[40] = 'forty';
a[50] = 'fifty';
a[60] = 'sixty';
a[70] = 'seventy';
a[80] = 'eighty';
a[90] = 'ninety';

for(var i = 2; i< 10; i++){
    for(var j = 1; j< 10; j++)
        a[i*10 + j] = a[i*10]+a[j];
}


var numberToString = function(a, n)
{
    if (n < 100) return a[n];
    var h = Math.floor( n / 100); 
    if (n % 100 === 0)
    return a[h]+"hundred";
    return a[h] +"hundredand" + a[n % 100];
}

var sum = 0;
for(var i = 1; i < 1000; i++){
    var s = numberToString(a,i)
    console.log(i + '\t' +  s);
    sum+= s.length;
}
sum += 'onethousand'.length;


console.timeEnd('p17');
console.log(sum);
console.log(342 +' ' + numberToString(a,342).length);
console.log(115 +' ' + numberToString(a,115).length);
console.log(100 + ' ' + numberToString(a,100).length);
console.log(700 + ' ' + numberToString(a,700).length);