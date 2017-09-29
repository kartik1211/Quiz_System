//constructor function
function Quiz(questions){
	this.score=0;
	this.questions=questions;
	this.questionIndex=0;
}


Quiz.prototype.getQuestionIndex=function(){
	return this.questions[this.questionIndex];
}

//this function will check if the quiz has ended or not.
Quiz.prototype.isEnded=function(){
	return this.questions.length===this.questionIndex;
}

//function to check if the ans is correct or not and if it is correct-increment our score
//function will increment the question index even if the ans is right/wrong
Quiz.prototype.guess=function(answer){

if(this.getQuestionIndex().correctAnswer(answer)){
this.score++;
}
this.questionIndex++; 
}

