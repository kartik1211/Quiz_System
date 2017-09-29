//creating a constructor function
function Question(text,choices,answer){//this constructor func will rec. these 3 variables and will give these values to these var. at down!
	this.text=text;
	this.choices=choices;
	this.answer=answer;
}

Question.prototype.correctAnswer=function(choice){//this userchoice parameter will contain the value of user click.
//now we will check if userchoice is = to ans.
return choice === this.answer;
}