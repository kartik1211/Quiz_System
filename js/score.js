//this will contain score and the no. of ques.

function populate(){
	if(quiz.isEnded()){
		showscores();
		//showScores();
	}else{
		//show the Question
		var element=document.getElementById("papa");
		element.innerHTML=quiz.getQuestionIndex().text;
		//show choices
		var choices=quiz.getQuestionIndex().choices;
		for(var i=0;i<choices.length;i++){
			var element=document.getElementById("choice"+i);
			element.innerHTML=choices[i];
			guess("btn"+i,choices[i]);//this func will check if the user clicked on right ans or wrong ans and will navigate to next ques!

		}
	showquestionno();
	}
};
function guess(id,guess){
var button=document.getElementById(id);
button.onclick=function(){
	quiz.guess(guess);
	populate();//to check if quiz has ended if not show next ques

}
};

function showquestionno(){
	//this will change the footer by showing. Question - of - at the bottom
	var currentques=quiz.questionIndex+1;
	var element=document.getElementById("base");
	element.innerHTML="Question "+currentques+" of "+quiz.questions.length;			

} 


function showscores(){
var finalscore="<h1>Final Score</h1>";
finalscore+="<h2 id='score'>Your Score: "+quiz.score+"</h2>";
var element=document.getElementById("quiz");
element.innerHTML=finalscore;

t=" ";	
var ele=document.getElementById("base");
ele.innerHTML=t;
}



//here we'll make an array for questions.
var questions=[
//this will send the questions to the constructor in question.js
new Question("How many hours in a day?",["20","22","24","28"],"24"),
new Question("How many minutes in an hour?",["50","60","70","80"],"60"),
new Question("How many seconds in a minute?",["40","52","64","60"],"60"),
new Question("Who was the first President of US?",["George Washington","Bill Clinton","Benjamin Franklin","John F Kennedy"],"George Washington"),
new Question("Which of the following is the poorest state in US?",["Maryland","Mississippi","Alaska","Rhode Island"],"Mississippi")

];

//object creation for questions.js
var quiz=new Quiz(questions);
populate();