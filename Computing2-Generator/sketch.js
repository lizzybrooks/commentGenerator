
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
  background(209, 233, 249);
  stroke(255);

// //name box
   var name = createInput('name');
   name.input(myInputEvent);
   name.position(60,60);

// textile comment box
   var textile = createInput('summarize python learning log');
   textile.input(textileComment);
   textile.position(60,150);
   textile.size(800,30);
//


  congratulate();

//python
  //text("python")
  radio = createRadio();
  radio.option('You were advanced and pushed yourself', "You took advantage of the opportunity to push yourself deeper into the python language and to explore topics that challenged and stretched your existing knowledge. I hope this time was useful and rewarding to you. ");
  radio.option('You were beginner and pushed yourself', "You took advantage of the opportunity to learn the Python language. You worked in a focused and self-directed way to overcome the obstacles and uncertainty involved in acquiring a new skill set. I am so proud of you. ");
  radio.option('You played it safe ', "You engaged in the Python exercises, but I think that you could have pushed yourself further. This was an open-ended assignment, and you fulfilled all the requirements, but you stayed close to your comfort zone. Don't be afraid to take a risk in this class. ");
  radio.style('width', '280px');
  radio.position(60,250);

//community computing outreach and research
  //text("community computing outreach and research", 60,200);
  progress = createRadio();
  progress.option('Engaged wholeheartedly', "You brought all of your skills to the task of researching potential Community Computing projects. You participated in the outreach effort, met with potential clients, and explored various technical solutions to determine whether the project is viable. This is what it takes to design and build software! ");
  progress.option('Own this thing', "You participated in the task of researching potential Community Computing projects and you presented your work to the larger group. Some of your research was great, but I think you could have gone deeper. As a software designer, it's important to talk with clients and brainstorm a variety of ways to approach a potential puzzle. The research and human outreach component is at least as important as the technical build! ");
  progress.style('width', '190px');
  progress.position(60,350);

// leadership
 // text("leadership",60,450);
  closing = createRadio();
  closing.option('keep it up   ', "I hope you are proud of what you've accomplished and excited to embark on the Community Build. Push yourself to engage more deeply with your teammates. Be kind and generous, and expect to be surprised by what you and your team will accomplish. ");
  closing.option('invest more  ', "You are an excellent software engineer. Don't be afraid to invest yourself in this discipline, and to trust that you will find solutions to all the puzzles that you encounter. Take ownership of this skill set. ");
  closing.style('width', '100px');
  closing.position(60,450);


  button = createButton('Generate Comment');
  button.position(60, 519);
  button.mousePressed(generateComment);



}

function draw() {


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

  congratulations = "Congratulations on your "+ achievements[int(random(0, achievements.length))] + " in Computing 2 thus far.";
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
  console.log(studentName, congratulations, textileGrade, goodJob, report1, changes);
}
