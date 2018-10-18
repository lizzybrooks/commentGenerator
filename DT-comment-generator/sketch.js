
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
   var textile = createInput('drawing from life comment');
   textile.input(textileComment);
   textile.position(60,350);
   textile.size(800,30);

 // something to work on comment box
    var improve = createInput('something to work on');
    improve.input(improveComment);
    improve.position(60,450);
    improve.size(800,30);


  congratulate();

  let radio1 = createInput('your first ');
  textile.input(textileComment);
  textile.position(60,350);
  textile.size(800,30);

  radio = createRadio();
  radio.option('Be proud of your hard work!', "You have a lot to be proud of.");
  radio.option('You pushed yourself beyond', "You consistently took risks and stretched your skill set.");
  radio.option('You persevered ', "You persevered over technical challenges. You kept a good attitude and stayed focused, and your efforts paid off in success. I hope you are proud of what you have accomplished. ");
  radio.style('width', '210px');
  radio.position(60,150);

  progress = createRadio();
  progress.option('steady completion', "You have steadily completed the classwork and homework. Your drawings on paper and in the computer are accurate and methodical. Your skills as a designer are growing. I hope you are enjoying your new toolkit!");
  progress.option('you have excelled', "You worked beyond the requirements of the assignment, exploring new tools and experimenting with new ideas. Your technical and creative skills are growing as you push yourself out of your comfort zone.");
  progress.option('spotty submission', "Your ideas are strong, but you have struggled with attention to detail. Assignments are often late or incorrectly named. As I observe your work habits in the classroom, I see that you sometimes become frustrated and lose focus. You have demonstrated the technical and creative skills required to complete the work. Believe in yourself, and use mental discipline to work through challenges. I think you will find that you know more than you think you do.");
  progress.style('width', '150px');
  progress.position(60,250);


  closing = createRadio();
  closing.option('keep it up', "I hope these past few weeks have inspired you with the many possibilities available when creative and technical skills intersect. Continue to push yourself and to treat assignments as your own work (rather than something you are doing for a grade). Take risks and allow yourself to fail on a big idea. Creativity thrives in the absence of perfection. ");
  closing.option('step it up', "You have demonstrated what you are capable of producing when you focus and apply yourself. In the second half of the semester, you will switch from doing exercises to creating your own original work. This is an opportunity for you to take control of your own learning. Take ownership of the work that you make and invest yourself in the process of creating. I look forward to seeing what you make!");
  closing.option('feel better', "This course moves quickly and you have learned an extraordinary amount in the past few weeks. Focus on your accomplishments. Think of a moment when you were stuck and you worked through the problem (either by asking for help, or by patiently troubleshooting). In the second half of the semester, try to replicate that success. Be an advocate for yourself-- come for help when you need it, and trust your own skills and knowledge. You are doing a great job! ");
  closing.style('width', '90px');
  closing.position(60,500);


  button = createButton('Generate Comment');
  button.position(60, 619);
  button.mousePressed(generateComment);



}

function draw() {
  background(209, 60, 249);
  stroke(255);

  affirmation();


  progress1();

  closingStatement();

}


function myInputEvent(){
  studentName = this.value();
//  console.log(studentName, ',');

}

function textileComment(){
  textileGrade = this.value();
//  console.log(textileGrade,',');

}

function improveComment(){
  improvements = this.value();
//  console.log(this.value(),',');

}

function congratulate(){

  congratulations = "Congratulations on your "+ achievements[int(random(0, achievements.length))] + " in Design and Technology.";
//  congratulations.position(60, 100);

}

function affirmation(){

   goodJob = radio.value();


}

function progress1(){

  report1 = progress.value();
  // if (report1) {
  //   console.log(report1);
  // }

}

function closingStatement(){

 changes = closing.value();
  // if (doIt) {
  //   console.log(doIt);
  // }

}

function generateComment() {
  console.log(studentName, congratulations, goodJob, report1, textileGrade, improvements, changes);
}
