
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
var organization;

//radio button storage variables
  var goodJob;
  var report1;
  var changes;
  var organize;

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
    // var improve = createInput('something to work on');
    // improve.input(improveComment);
    // improve.position(60,450);
    // improve.size(800,30);


  congratulate();

  radio = createRadio();
  radio.option('High level', "your hand drawings were clear, well thought out and showed a high level of attention to detail.");
  radio.option('Mid level ', "your hand drawings were good, reasonably thought out and showed a moderate level of attention to detail.");
  radio.option('Just okay ', "your hand drawings show some good work. Try to focus on the details of your drawings and the accuracy of your lines. ");
  radio.style('width', '100px');
  radio.position(60,150);

  progress = createRadio();
  progress.option('clear understanding', "The Rhino tutorials were quite challenging but through perseverance and hard work you were able to complete them all demonstrating a clear understanding of the concepts taught.");
  progress.option('mid understanding', "The Rhino tutorials were quite challenging but through perseverance and hard work you were able to complete them all, demonstrating a reasonable understanding of the concepts taught.");
  progress.option('fair understanding', "The Rhino tutorials were quite challenging and tested you throughout, how ever through perseverance and hard work you were able to complete them all demonstrating a fair understanding of the concepts taught.");
  progress.style('width', '150px');
  progress.position(60,250);


  closing = createRadio();
  closing.option('very well executed', "Your create a tutorial was drawn and written well and exhibited a clear understanding for Rhino, the vocabulary of the program, and the processes of drawing simple and complex shapes. ");
  closing.option('Reasonably well', "Your create a tutorial was drawn and written  reasonably well and exhibited a fairly clear understanding for Rhino, the vocabulary of the program, and the processes of drawing simple and complex shapes. ");
  closing.option('Simple and unclear', "Your create a tutorial was simply drawn and not clearly written, you exhibited a rudimentary understanding for Rhino, the vocabulary of the program, and the processes of drawing simple and complex shapes.  The Rhino program will be referenced throughout your time at Lick, I would suggest taking time to practice some of the tutorials that you found challenging. ");
  closing.style('width', '140px');
  closing.position(60,450);


  organization = createRadio();
  organization.option('well organized', "Finally your shared folder is well organized and up to date, keep this up as staying on top of this will be important as we move into the next phase of our Design Technology course. ");
  organization.option('okay organization', "Finally your shared folder is reasonably well organized and up to date, always make sure to put your files into clear folders this will be important as we move into the next phase of our Design Technology course. ");
  organization.style('width', '120px');
  organization.position(60,570);


  button = createButton('Generate Comment');
  button.position(60, 700);
  button.mousePressed(generateComment);



}

function draw() {
  background(176, 242, 231);
  stroke(255);

  rapidViz();


  rhinoTutorials();

  makeTutorial();

  organized();

}


function myInputEvent(){
  studentName = this.value();
//  console.log(studentName, ',');

}

function textileComment(){
  textileGrade = this.value();
//  console.log(textileGrade,',');

}

// // function improveComment(){
// //   improvements = this.value();
// // //  console.log(this.value(),',');
//
// }

function congratulate(){

  congratulations = "Congratulations on making it through your first quarter of Design and Technology, you have accomplished so much over the past 8 weeks. ";
//  congratulations.position(60, 100);

}

function rapidViz(){
noStroke();
text("Rapid Viz", 60,135 );
   goodJob = "In the rapid visualization portion of our course at the beginning of the year, "+radio.value();


}

function rhinoTutorials(){
  noStroke();
  text("Rhino Tutorials", 60,235 );
  report1 = progress.value();
  // if (report1) {
  //   console.log(report1);
  // }

}

function makeTutorial(){
  noStroke();
  text("Make a tutorial", 60,435 );
 changes = closing.value();
  // if (doIt) {
  //   console.log(doIt);
  // }

}

function organized(){
  noStroke();
  text("Folder organization", 60,555 );
 organize = organization.value();
  // if (doIt) {
  //   console.log(doIt);
  // }

}

function generateComment() {
  console.log(studentName, congratulations, goodJob, report1, textileGrade, changes, organize);
}
