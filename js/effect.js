function game(a){
	var player// player//
	var com;// computer//
	var score;
	var result;
	var lastResult;
	player=a;	
	com=Math.floor(Math.random()*3); //get a random computer value//	
	var b;//The outcome of subtraction//
	b=player-com;
	if (b==0){
		result=0; 
	}else if (b==1 || b==-2){
		result=1;
	}
	else {
	    result=-1;
	}
   	
   if (result==0){
   document.getElementById("result").innerHTML="Draw";
   }
   if (result==1){
   	document.getElementById("result").innerHTML="Win";
   }
    if (result==-1){
   	document.getElementById("result").innerHTML="Lose";
   }
    	var choice= new Array(3)
	choice[0]=" cloth"
	choice[1]=" shear"
	choice[2]=" stone" //0means cloth,1means shear,2means stone//	
	alert("Computer choose" + choice[com]);
    
   lastResult= document.getElementById("score").innerHTML;
   lastResult= parseInt(lastResult);
   score= lastResult+result;
   document.getElementById("score").innerHTML=score;
 
}
