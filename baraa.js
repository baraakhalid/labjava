const hw = require('./hw.json');
 function TopingTypes(){
    var count = "";
    for (let i=0; i<hw.length;i++) {
        for(let z=0; z< hw[i].topping.length; z++ ){
        count += hw[i].topping[z].type + "<br>";
      }
    } 
    console.log("All Toping Types:"+count);
 }
 function BatterTypes(){

    var i,z, count = "";
    for (let i=0; i<hw.length;i++) {
        for (let z=0; z< hw[i].batters.batter.length; z++) {
        count += hw[i].batters.batter[z].type + "<br>";
      }
    }
    console.log("All Batter Types:"+count);
 }
 function ppuAverage(){

    for (let i=0; i<hw.length;i++) {
        sum += hw[i].ppu ;
    }
    var avg=sum/data.length;
    console.log("Ppu average ="+avg);
 }
 function ppuSum(){
    var i = "";
    for (i in hw) {
       hw[i].ppu
        sum += hw[i].ppu ;
      
    }
    console.log("The Ppu sum=",sum);
 }

function theIDs(){

    var  x = "";
    for ( let i=0; i< hw.length; i++ ) {
        x += hw[i].id ;
        for (let j=0; j< hw[i].batters.batter.length;j++ ) {
        x += hw[i].batters.batter[j].id ;
      }
      for (let r=0; r< hw[i].topping.length;j++ ) {
        x += hw[i].topping[j].id ;
      }
    }
    console.log("the IDS:",x);
 }
 
