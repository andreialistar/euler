console.time('p19');

var monthDays= function(month, year)
{
  switch(month){
      case 1 : 
      case 3 : 
      case 5 :
      case 7 :
      case 8 :
      case 10 :
      case 12 : return 31;
      case 4: 
      case 6:
      case 9:
      case 11: return 30;
      case 2 : 
          if (year % 4 === 0)  return 29
          return 28;
  }
}

var y = 1901;
var m = 1;
var day = 6; // first sunday 6 - 01 - 1901
var sundays = 0;
do {
    day += 7;
    var mDays =  monthDays(m, y)
    if (day > mDays){
        day = day - mDays
        m ++;
        if (m > 12){
            m = 1;
            y++
        }
    }
    if (day === 1){
       sundays ++;
        console.log(y+"-"+m);
    }  
}while(y<2001);



//
//
//do{
//    
//    m++
//    var ds = '';
//    if (y < 10) ds = '190'+y+'-'+m+'-1';
//    else if (y < 100) ds = '19'+y+'-'+m+'-1';
//    else ds = '2000-'+m+'-1';
//
//    if (new Date (ds).getDay() === 0){
//        sundays ++;
//        console.log(ds);
//    }
//    
//    if (m == 12)
//        {
//            m = 0;
//            y++;
//        }
//        
//}while(y < 100 && m < 12)

console.timeEnd('p19');
console.log(sundays);