let ques=document.getElementById('question')
let quiz=document.querySelector('.quiz');
let opt=document.getElementsByClassName('ansbtn')
let next=document.getElementById('nextbtn')
let answerbtn=document.getElementById('answerbutton')
let resultdiv=document.querySelector('.resultdiv')
let result=document.querySelector('.res')
let playagain=document.querySelector('.playagain')
let j=0
let count=0
let resetbtn=document.getElementById('Quiz')
let answerButtons = Array.from(document.getElementsByClassName('ansbtn'));
const questions = [
   {
     question: "Which is the biggest continent in the world?",
     answers: [
       { Text: "North America", correct: false },
       { Text: "South America", correct: false },
       { Text: "Asia", correct: false },
       { Text: "Africa", correct: true }
     ]
   },
   {
     question: "What is the capital of France?",
     answers: [
       { Text: "London", correct: false },
       { Text: "Berlin", correct: false },
       { Text: "Madrid", correct: false },
       { Text: "Paris", correct: true }
     ]
   },
   {
     question: "Who painted the Mona Lisa?",
     answers: [
       { Text: "Vincent van Gogh", correct: false },
       { Text: "Leonardo da Vinci", correct: true },
       { Text: "Pablo Picasso", correct: false },
       { Text: "Michelangelo", correct: false }
     ]
   },
   {
     question: "Which planet is known as the 'Red Planet'?",
     answers: [
       { Text: "Jupiter", correct: false },
       { Text: "Saturn", correct: false },
       { Text: "Mars", correct: true },
       { Text: "Uranus", correct: false }
     ]
   },
   {
     question: "Who wrote the play 'Romeo and Juliet'?",
     answers: [
       { Text: "William Shakespeare", correct: true },
       { Text: "Charles Dickens", correct: false },
       { Text: "Jane Austen", correct: false },
       { Text: "Mark Twain", correct: false }
     ]
   }
 ];


  // Outputs the array of questions with answers
 
function displayquestion(){

  if(j<questions.length){
   ques.textContent=questions[j].question
  
   for(let i=0;i<4;i++){
      opt[i].textContent=questions[j].answers[i].Text
     
     
   }
   

  }
}
displayquestion()

next.addEventListener('click',()=>{
  answerButtons.forEach(button => {
    button.style.backgroundColor = "";
    button.style.color = ""; // Reset text color to default
});

  if(j===questions.length-1){
    quiz.style.display="none"
    resultdiv.style.display="block"
    result.textContent=`you have scored ${count} out of ${questions.length} marks`
  }
    j=j+1
  
  
    // Disable all answer buttons after one is clicked
    answerButtons.forEach(button => {
      button.disabled = false;
      button.style.background=""
      // button.style.color="black"
      
    });
   displayquestion()
  

})
answerbtn.addEventListener('click',(ele)=>{

   let answerButtons = Array.from(document.getElementsByClassName('ansbtn'));
   let index = answerButtons.indexOf(ele.target);
 
   if (questions[j].answers[index].correct) {
      ele.target.style.backgroundColor = "#008000b8 ";
        ele.target .style.color="white"
      count++
      
    } else {
      ele.target.style.backgroundColor = "#ff000091 ";
      ele.target .style.color="white"
      for(let k=0;k<4;k++){
        if(questions[j].answers[k].correct===true){
          
          answerButtons[k].style.backgroundColor="#008000b8 "
          answerButtons[k].style.color="white"

          
        }
      }

    }
  
    answerButtons.forEach(button => {
      button.disabled = true;
    });
   
          
})
playagain.addEventListener('click',()=>{
  count=0
  j=0
  quiz.style.display="block"
  resultdiv.style.display="none"
  displayquestion()
})



















































































































// function startquiz()
// {
//     currentquestionindex=0;
//     score=0;
//     nextbtn.innerHTML='next';
//     showquestion();
// }
// function  showquestion()
// {
//      let     Currentquestion=questions[currentquestionindex];
//       let    questiono=currentquestionindex+1;
//           questionelement.innerHTML= questiono +"."+Currentquestion.question;
//           questions;
//           Currentquestion.answers.forEach(answer =>{
//             const button=document.createElement("button");
//             button.innerHTML=answer.Text;
//             button.classList.add("btns");
//             ansbutton.appendChild(button);
//             nextbtn.addEventListener('click',()=>{
//                currentquestionindex=currentquestionindex+1
//             })
//           });
// }

// startquiz();