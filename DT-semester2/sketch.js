
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
var space;
var closing;

//radio button storage variables
  var goodJob;
  var report1;
  var takemake;
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
   // var textile = createInput('');
   // textile.input(textileComment);
   // textile.position(60,350);
   // textile.size(800,30);

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
  radio.option('Be proud of your hard work!', "You have a lot to be proud of.");
  radio.option('You pushed yourself beyond', "You consistently took risks and stretched your skill set.");
  radio.option('You persevered ', "You persevered over technical challenges. You kept a good attitude and stayed focused, and your efforts paid off in success. I hope you are proud of what you have accomplished. ");
  radio.style('width', '210px');
  radio.position(60,150);

  space = createRadio();
  space.option('Make space', "You are a strong designer, but you sometimes you get caught up in socializing and distract yourself and your classmates. Be mindful of the other students in the room. Look for ways that you can lift up your peers, and make space for them to shine.");
  space.option('Take space', "I sense that you prefer to solve puzzles independently, and to work through a problem alone when you get stuck. I challenge you to take more space: ask for help when you need it, and share your process with the group. Your classmates can learn a lot from collaborating with you. ");
  space.option('You rock ', "You have been a supportive collaborator, drawing out your classmates and encouraging them to shine. You also modeled focus and resilience in your ability to work independently through a challenging puzzle. These are skills that will serve you throughout your academic career. ");
  space.style('width', '210px');
  space.position(60,250);

// acrylic cuts
  progress = createRadio();
  progress.option('steady completion', "You have steadily completed the coding and laser cutting exercises. You overcame challenges as they arose. Your lamp is coming together beautifully. ");
  progress.option('you have excelled', "You worked beyond the requirements of the programming and laser cutting unit, exploring the limits of the tools and experimenting with creative ideas. Your technical and creative skills are growing as you push yourself out of your comfort zone.");
  progress.option('trouble finishing', "You have done the hard work of solving the coding challenges and learning to use the laser cutter, but you're having trouble applying these skills to your own lamp. I think you may be getting in your own way, second-guessing your ideas when you should believe in yourself and persevere through challenges as they arise.");
  progress.style('width', '150px');
  progress.position(60,350);


// take space, make space
  closing = createRadio();
  closing.option('keep it up', "I hope these past few weeks have inspired you with the many possibilities available when creative and technical skills intersect. Continue to push yourself, take risks and allow yourself to fail. Creativity thrives in the absence of perfection. ");
  closing.option('step it up', "You have demonstrated what you are capable of producing when you focus and apply yourself. In the second half of the semester, you will see this work come together in a finished lamp. This is an opportunity for you to take ownership of the work that you make and invest yourself in the process of creating. I look forward to seeing what you make!");
  closing.option('feel better', "This course moves quickly and you have learned an extraordinary amount in the past few weeks. Focus on your accomplishments. Think of a moment when you were stuck and you worked through the problem (either by asking for help, or by patiently troubleshooting). As you work toward completing your lamp, try to replicate that success. Be an advocate for yourself-- come for help when you need it, and trust your own skills and knowledge. You are doing a great job! ");
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

  makeSpace();

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

function makeSpace(){

  takemake = space.value();
}

function closingStatement(){

 changes = closing.value();
  // if (doIt) {
  //   console.log(doIt);
  // }

}

function generateComment() {
  console.log(studentName, congratulations, goodJob, takemake, report1, changes);
}
