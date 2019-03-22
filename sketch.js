
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
   var drawing = createInput('drawing from life comment');
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

  radio.option('Excellent ', "In the rapid visualization portion of our course at the beginning of the year, your hand drawings were clear, well thought out and showed a high level of attention to detail.");
  radio.option('Good', "In the rapid visualization portion of our course at the beginning of the year, your hand drawings were good, reasonably thought out and showed a moderate level of attention to detail.");
  radio.option('Needs improvement', "In the rapid visualization portion of our course at the beginning of the year, your Hand drawings show some good work, try to focus on the details of your drawings and the accuracy of your lines.");
  radio.style('width', '500px');
  radio.position(60,150);

  progress = createRadio();
  progress.option('Excellent', "The Rhino tutorials were quite challenging but through perseverance and hard work you were able to complete them all demonstrating a clear understanding of the concepts taught.");
  progress.option('Good', "The Rhino tutorials were quite challenging but through perseverance and hard work you were able to complete them all, demonstrating a reasonable understanding of the concepts taught.");
  progress.option('Needs improvement', "The Rhino tutorials were quite challenging and tested you throughout, how ever through perseverance and hard work you were able to complete them all demonstrating a fair understanding of the concepts taught.");
  progress.style('width', '500px');
  progress.position(60,230);


  closing = createRadio();
  closing.option('Excellent', "Finally your shared folder is well organized and up to date, keep this up as staying on top of this will be important as we move into the next phase of our Design Technology course. Well done on a great job so far, stay focused the fun is about to begin...");
  closing.option('Okay', "Finally your shared folder is reasonably well organized and up to date, always make sure to put your files into clear folders this will be important as we move into the next phase of our Design Technology course. Well done on a great job so far, stay focused the fun is about to begin...");
  closing.style('width', '500px');
  closing.position(60,410);


  button = createButton('Generate Comment');
  button.position(60, 519);
  button.mousePressed(generateComment);



}

function draw() {
  background(209, 60, 249);
  fill("black");
  textSize(14);
  text("Rapid Viz",60,140);
  text("Rhino Tutorials", 60,220);
  text("Organization of folder", 60,400);
//  stroke(255);


  affirmation();


  progress1();

  closingStatement();

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

  congratulations = "Congratulations on making it through your first quarter of Design and Technology, you have accomplished so much over the past 8 weeks.";
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
  console.log(studentName, congratulations, goodJob, report1, textileGrade, changes);
}
