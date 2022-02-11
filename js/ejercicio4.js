let monto=100000
 let decimal1=0.5
 let decimal2=.10
if(monto <= 30000){
 console.log("no tienen descuento");
}
else if((monto>30000) && (monto<100000)){
let descuento=monto * decimal1
console.log("su descuento es de un 5% y su valor total es:",descuento + monto)
}
if(monto>=100000)
 descuento1=(monto * decimal2)
console.log("su descuento es de un 10% y su valor total es:",descuento1 + monto);
;