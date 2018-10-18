
// text box input variables
var studentName = "name";
var textileGrade;
var improvements;

//congratulations randomizer
var congratulations;
var achievements = ["achievements", "work", "progress", "learning", "adventures"];

//radio button input variables
var radio;
var progress;
var closing;
var goodbye;

//radio button storage variables
  var goodJob;
  var report1;
  var changes;

//generate button
var button;


function setup() {


//create canvas section
  createCanvas(900, 1000);



// //name box
   var name = createInput('name');
   name.input(myInputEvent);
   name.position(60,60);

// textile comment box
   var drawing = createInput('Future furniture comment');
  drawing.input(drawingFromLife);
   drawing.position(60,300);
   drawing.size(800,30);

 // something to work on comment box
    // var improve = createInput('something to work on');
    // improve.input(improveComment);
    // improve.position(60,450);
    // improve.size(800,30);


  congratulate();


  // let radio1 = createInput('your first ');
  // textile.input(textileComment);
  // textile.position(60,350);
  // textile.size(800,30);

  radio = createRadio();



  radio.option('Be proud ', "Be proud of all your accomplishments. You have learned so much in so little time.");
  radio.option('Impressed', "You consistently impressed me by taking risks and challenging yourself beyond the requirements.");
  radio.option('Overcame challenges', "You overcame many technical challenges. I appreciate your good attitude and focused state of mind. Your efforts paid off, be proud of everything accomplished!");
  radio.style('width', '500px');
  radio.position(60,150);

  progress = createRadio();
  progress.option('Normal', "You stayed on track and completed all classwork and homework. Your drawings on paper and in the computer are  accurate.  Your skills as a designer are growing. Enjoy your new skillset and celebrate all your accomplishments!");
  progress.option('Excellent', "You consistently worked beyond the requirements of the assignment by challenging yourself with ambitious ideas. Your technical and creative skills are growing as you push yourself forward. Keep it up! ");
  progress.option('You struggled', "Your ideas are strong, but you have struggled with attention to detail. Assignments are often late or incorrectly named. As I observe your work habits in the classroom, I see that you sometimes lose focus. You have demonstrated the technical and creative skills required to complete the work. Believe in yourself, and use mental discipline to work through challenges. ");
  progress.style('width', '500px');
  progress.position(60,230);


  closing = createRadio();
  closing.option('Clear understanding', "The Rhino tutorials were quite challenging but through dedication and hard work you were able to complete them all demonstrating a clear understanding on how to apply the tools presented in class and beyond. ");
  closing.option('Reasonable understanding', "The Rhino tutorials were challenging and tested you throughout, yet your commitment and hard work paid off and you were able to complete them all demonstrating a reasonable understanding on how to use the tools presented in class. ");
  closing.option('Moderate understanding', "The Rhino tutorials were quite challenging and tested you throughout, yet your hard work paid off and you were able to complete them all demonstrating a moderate comprehension on how to apply the tools presented in class. ")
  closing.style('width', '700px');
  closing.position(60,410);

  bye = createRadio();
  bye.option('Flourish!',"I hope your time in DT has inspired to open your eyes and mind to the endless possibilities available when creativity and technical skills intersect. I encourage you to continue taking risks by treating each assignments as your own work (rather than an assignment). Allow yourself to fail on a big ideas rather than playing it safe because those failures are nothing more than a learning wave. Give your creativity a chance to flourish !!");
  bye.option('You can do it!', "This is a fast-paced class. You have learned a tremendous amount of tools and technical skill in the past few weeks. Focus on all your accomplishments! Think about how much you have grown from the first day of class. In the second half of the semester, I encourage you to be an advocate for yourself-- come for help when you need it, and trust your own skills and knowledge. You are doing a great job!");
  bye.style('width', '700px');
  bye.position(60, 460 );


  button = createButton('Generate Comment');
  button.position(60, 519);
  button.mousePressed(generateComment);



}

function draw() {
  background(209, 60, 249);
  fill("black");
  textSize(14);
  text("1.",60,140);
  text("2.", 60,220);
  text("Rhino", 60,400);
//  stroke(255);


  affirmation();


  progress1();

  closingStatement();

  byeBye();

}


function myInputEvent(){
  studentName = this.value();
//  console.log(studentName, ',');

}

function drawingFromLife(){
  textileGrade = this.value();
  // console.log(textileGrade,',');

}

// function improveComment(){
//   improvements = this.value();
// //  console.log(this.value(),',');
//
// }

function congratulate(){


  congratulations = "Great Job!!  on your "+ achievements[int(random(0, achievements.length))] +" in Design and Technology. ";

}

function affirmation(){

   goodJob = radio.value();


}

function progress1(){

  report1 = progress.value();


}

function closingStatement(){

 changes = closing.value();

}

function byeBye(){
  goodbye =bye.value();
}

function generateComment() {
  console.log(studentName, congratulations, goodJob, report1, textileGrade, changes, goodbye);
}
