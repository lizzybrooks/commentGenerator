//
// // text box input variables
// var studentName = "name";
// var textileGrade;
// var improvements;
//
// //congratulations randomizer
// var congratulations;
// var achievements = ["achievements", "work", "progress", "learning", "adventures"];
//
// //radio button input variables
// var radio;
// var progress;
// var closing;
//
// //radio button storage variables
//   var goodJob;
//   var report1;
//   var changes;
//
// //generate button
// var button;

//let string = "hey";

let input1;
let first = "Write your first input here, e.g. classroom behavior";
let firstInputs = [];

let input2;
let second = "Write your second input here, e.g. organization and turning stuff in";

let input3;
let third = "Write your third input here, e.g. design and laser cutting";

let input4;
let fourth = "Write your fourth input here, e.g. programming";

let input5;
let conclusion = "In conclusion:";

function setup() {


//create canvas section
  createCanvas(900, 1200);

  stroke(0);
  textSize(32);
  textFont('Georgia');
  text('DT Comment Generator', 12, 50);

  stroke(0);
  textSize(18);
  textFont('Georgia');
  text('Set your template in this dashboard.', 12, 100);


    // let opening  = createInput('Write your opening line in here');
    // opening.position(60,150);
    // opening.size(800,30);



     input1 = new DashBox(first, 60,150,800,30);
     input1.makeInputBox();
     input1.pushInput();

     input2 = new DashBox(second, 60,350,800,30);
     input2.makeInputBox();

     input3 = new DashBox(third, 60,550,800,30);
     input3.makeInputBox();

     input4 = new DashBox(fourth, 60,750,800,30);
     input4.makeInputBox();

     input5 = new DashBox(conclusion, 60,950,800,30);
     input5.makeInputBox();

}
function draw(){

console.log(firstInputs);

}



class DashBox {

    constructor(number,  xposition, yposition, xsize, ysize){
            this.category = number;
            //this.great = great;
            // this.average = average;
            // this.poor = poor;
            this.xposition = xposition;
            this.yposition = yposition;
            this.xsize = xsize;
            this.ysize = ysize;
    }

    makeInputBox(){

        //print("making input box"+this.category);
        this.category  = createInput(this.category);
        this.category.position(this.xposition,this.yposition);
        this.category.size(this.xsize,this.ysize);
        //this.category.input(this.pushInput);

        this.great = createInput("Write the you did great option in here");
        this.great.position(this.xposition,this.yposition+40);
        this.great.size(this.xsize,this.ysize);
        //this.great.input(this.pushInput);

        this.average = createInput("Write the you did average option in here");
        this.average.position(this.xposition,this.yposition+80);
        this.average.size(this.xsize,this.ysize);

        this.poor = createInput("Write the you did poorly option in here");
        this.poor.position(this.xposition,this.yposition+120);
        this.poor.size(this.xsize,this.ysize);

    }

    pushInput(){
      firstInputs.push = (this.category, this.great, this.average, this.poor);


      //console.log(this.value);
    }


};

// // //name box
//    var name = createInput('name');
//    name.input(myInputEvent);
//    name.position(60,60);
//
// // textile comment box
//    var textile = createInput('drawing from life comment');
//    textile.input(textileComment);
//    textile.position(60,350);
//    textile.size(800,30);
//
//  // something to work on comment box
//     var improve = createInput('something to work on');
//     improve.input(improveComment);
//     improve.position(60,450);
//     improve.size(800,30);
//
//
//   congratulate();
//
//   let radio1 = createInput('your first ');
//   textile.input(textileComment);
//   textile.position(60,350);
//   textile.size(800,30);
//
//   radio = createRadio();
//   radio.option('Be proud of your hard work!', "You have a lot to be proud of.");
//   radio.option('You pushed yourself beyond', "You consistently took risks and stretched your skill set.");
//   radio.option('You persevered ', "You persevered over technical challenges. You kept a good attitude and stayed focused, and your efforts paid off in success. I hope you are proud of what you have accomplished. ");
//   radio.style('width', '210px');
//   radio.position(60,150);
//
//   progress = createRadio();
//   progress.option('steady completion', "You have steadily completed the classwork and homework. Your drawings on paper and in the computer are accurate and methodical. Your skills as a designer are growing. I hope you are enjoying your new toolkit!");
//   progress.option('you have excelled', "You worked beyond the requirements of the assignment, exploring new tools and experimenting with new ideas. Your technical and creative skills are growing as you push yourself to your edges.");
//   progress.option('spotty submission', "Your ideas are strong, but you have struggled with attention to detail. Assignments are often late or incorrectly named. As I observe your work habits in the classroom, I see that you sometimes become frustrated and lose focus. You have demonstrated the technical and creative skills required to complete the work. Believe in yourself, and use mental discipline to work through challenges. I think you will find that you know more than you think you do.");
//   progress.style('width', '150px');
//   progress.position(60,250);
//
//
//   closing = createRadio();
//   closing.option('keep it up', "I hope these past few weeks have inspired you with the many possibilities available when creative and technical skills intersect. Continue to push yourself and to treat assignments as your own work (rather than something you are doing for a grade). Take risks and allow yourself to fail on a big idea. Creativity thrives in the absence of perfection. ");
//   closing.option('step it up', "You have demonstrated what you are capable of producing when you focus and apply yourself. In the second half of the semester, you will switch from doing exercises to creating your own original work. This is an opportunity for you to take control of your own learning. Take ownership of the work that you make and invest yourself in the process of creating. ");
//   closing.option('feel better', "This course moves quickly and you have learned an extraordinary amount in the past few weeks. Focus on your accomplishments. Think of a moment when you were stuck and you worked through the problem (either by asking for help, or by patiently troubleshooting). In the second half of the semester, try to replicate that success. Be an advocate for yourself-- come for help when you need it, and trust your own skills and knowledge. You are doing a great job! ");
//   closing.style('width', '90px');
//   closing.position(60,500);
//
//
//   button = createButton('Generate Comment');
//   button.position(60, 619);
//   button.mousePressed(generateComment);
//
//
//
// }
//
// function draw() {
//   background(209, 60, 249);
//   stroke(255);
//
//   affirmation();
//
//
//   progress1();
//
//   closingStatement();
//
// }
//
//
// function myInputEvent(){
//   studentName = this.value();
// //  console.log(studentName, ',');
//
// }
//
// function textileComment(){
//   textileGrade = this.value();
// //  console.log(textileGrade,',');
//
// }
//
// function improveComment(){
//   improvements = this.value();
// //  console.log(this.value(),',');
//
// }
//
// function congratulate(){
//
//   congratulations = "Congratulations on your "+ achievements[int(random(0, achievements.length))] + " in Design and Technology.";
// //  congratulations.position(60, 100);
//
// }
//
// function affirmation(){
//
//    goodJob = radio.value();
//
//
// }
//
// function progress1(){
//
//   report1 = progress.value();
//   // if (report1) {
//   //   console.log(report1);
//   // }
//
// }
//
// function closingStatement(){
//
//  changes = closing.value();
//   // if (doIt) {
//   //   console.log(doIt);
//   // }
//
// }
//
// function generateComment() {
//   console.log(studentName, congratulations, goodJob, report1, textileGrade, improvements, changes);
// }
