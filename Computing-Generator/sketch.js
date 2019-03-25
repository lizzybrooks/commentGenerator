
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
  var changes;
   var takemake;

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
   var textile = createInput('textile comment');
   textile.input(textileComment);
   textile.position(60,350);
   textile.size(800,30);

 // something to work on comment box
    // var improve = createInput('take space or make space? ');
    // improve.input(improveComment);
    // improve.position(60,450);
    // improve.size(800,30);


  congratulate();

  radio = createRadio();
  radio.option('Be proud of your hard work!', "You have a lot to be proud of.");
  radio.option('You pushed yourself beyond', "You took risks and stretched your skills beyond the requirements.");
  radio.option('You learned so much already', "You have learned so much in these past few weeks that it is hard to believe you only just began coding.");
  radio.option('You persevered ', "You persevered over technical challenges. You kept a good attitude and stayed focused, and your efforts are paying off in success. I hope you are proud of what you have accomplished. ");
  radio.style('width', '210px');
  radio.position(60,150);

  progress = createRadio();
  progress.option('steady completion', "You have steadily completed the classwork and homework (drawing with code, functions, variables, and loops worksheets) and your skills as a programmer are growing. ");
  progress.option('you have excelled', "You have excelled in the small assignments, consistently pushing yourself to try new things. This effort shows in the quality of your textile project. I hope you feel that you are gaining some mastery over the art of programming (yes, I do think it is artful). ");
  progress.option('scraping by', "Your ideas and skills are strong, but I think you could do more, both creatively and technically. Sometimes I see you get stuck, and stop. I want you to believe in yourself, and to ask for help when you need it. ");
  progress.style('width', '150px');
  progress.position(60,250);

  space = createRadio();
  space.option('Make space', "You are a strong programmer, but you sometimes you get caught up in socializing and distract yourself and your classmates. Be mindful of the other students in the room. Look for ways that you can lift up your peers, and make space for them to shine.");
  space.option('Take space', "I sense that you prefer to solve puzzles independently, and to work through a problem alone when you get stuck. I challenge you to take more space: ask for help when you need it, and share your process with the group. Your classmates can learn a lot from collaborating with you. ");
  space.option('You rock ', "You have been a supportive collaborator, drawing out your classmates and encouraging them to shine. You also modeled focus and resilience in your ability to work independently through a challenging puzzle. These are skills that will serve you throughout your academic career. ");
  space.style('width', '100px');
  space.position(60,420);


  closing = createRadio();
  closing.option('keep it up   ', "I hope these past few weeks have opened your mind to the myriad of possibilities available to a  creative programmer. These are your tools now! Take a deep breath and congratulate yourself on learning a new language. Allow yourself to explore and experiment. Try out some weird ideas. I look forward to seeing what you create. ");
  closing.option('invest more  ', "You have invested your time and energy in learning the foundational skills of writing software. It takes discipline to learn these tools, but once you have them, you can make work that you genuinely care about. I hope that you are now excited about what you can do with code. In the second half of the semester, I want to see you take ownership of your work. Treat these projects as something that you are doing for yourself, not for a class. I look forward to seeing what you create!");
  closing.option('be patient', "You have wildly creative ideas that at the moment are surpassing your technical skills. That's actually a great problem to have (imagine if it was the other way around)! Be patient with the process of learning programming. It takes time and it can be humbling, but when you get something to work, the power is extraordinary.");
  closing.style('width', '100px');
  closing.position(60,500);


  button = createButton('Generate Comment');
  button.position(60, 619);
  button.mousePressed(generateComment);



}

function draw() {
  background(209, 233, 249);
  stroke(255);

  affirmation();


  progress1();

   makeSpace();

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

  congratulations = "Congratulations on your "+ achievements[int(random(0, achievements.length))] + " in Computing class thus far.";
//  congratulations.position(60, 100);

}

function affirmation(){

   goodJob = radio.value();


}

function progress1(){

  report1 = progress.value();


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
  console.log(studentName, congratulations, goodJob, report1, textileGrade, takemake, changes);
}
