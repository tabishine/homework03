//1) using if/else, alert, prompt operators 

let height = prompt("What is your height?");
if (height < 160) 
{ alert("You are not allowed on this attraction");
 } else { 
    alert("You allowed to pass");
}

//2) using switch/case

let a = +prompt('a?', ' ');
switch(a) {
case '0':
    alert('0');
    break;
case '1':
    alert('1');
    break;
case '2':
case '3':
    alert('2,3' );
    break;
}

//3) loops - finding sum of even numbers with 'for' loop

let sum = 0;
for(let i = 0; i <= 100; i++){
    if(i%2 == 0){
    sum +=i;
  }
}
alert(sum);

//4) loops - while
let i = 0;
while(i<3){
   i++;
}
alert(`number ${i}!`);
//homework03
//homework03