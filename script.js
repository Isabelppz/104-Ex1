//Ex1 -Make a simple script, insert it in a html file, using an array calculate the average score of the values contained in the array:Print out in an alert showing each of the values contained in the array before calculating the average, then show an alert showing the average:
let numbers=['Num1:','Num2:','Num3:','Num4:'];
var num=[5,15,30,3];
console.table(numbers);
var position=4;
for(position=0;position<4;position++){
alert(numbers[position]+" "+ num[position]);
} 

var num1=5;
var num2=15;
var num3=30;
var num4=3;

var avrg=(num1+num2+num3)/num4;
console.log(avrg);
alert(avrg);
