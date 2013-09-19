var num=prompt("What is your phone number? It is totally not shady to put it on this site. Sincerly -The NSA");
if(num.length===10){
	alert("Thank you your soul is now ours.");}
else if (num.length!=7){
	alert("Nice try but we need your real number.");
}

var bday=prompt("What is your birthday? Please enter in mm/dd/yy format");
 if (bday.charAt(2)==="/" && bday.charAt(5)==="/"){
 alert("Thanks you are rad");
}
 else { 
 	alert("You are the weakest link try again");
}

var pc=prompt("What is your zip code? So the FBI can better find you.")
if (pc.length===5){
alert("Thank you!");
}
else if(pc.length===10 && pc.charAt(6)==="-"){
alert("Congrats!");
}
else{
	alert("Wow! You suck! Do it again...");
}
 var st=prompt("Lets be real the gov isn't the smartest... we need to know more. What is your state abreviations? All caps bc we are picky.")
 //change to uppercase later
 if (st.length===2) {
 	alert("Thanks, They need all the help they can get.");
}
else if(st.length!==2){
 	alert("Resistance is futile... Do it again.");
}
var married=prompt("Are you married? Must be yes of no.")
if (married.length===3){
	alert("Cool!")
}
else if(married.length===2){
	alert("Keep trying. Someone will love your wierdness.")
}
else{
	alert("Okay wise guy, be real.")
}

