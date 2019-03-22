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


let first = [];
let second = [];
let third = [];
let fourth = [];
let conclusion = [];


function setup() {


//create canvas section
  createCanvas(900, 1200);

  stroke(0);
  textSize(32);
  textFont('Georgia');
  text('DT Comment Generator', 12, 50);

  dashBoard();

}

function firstTopic(){
  first.push = this.value();
  console.log(first);
}
function firstGreat(){
  first.push[1] = this.value();
  console.log(first);
}


function dashBoard(){
    stroke(0);
    textSize(18);
    textFont('Georgia');
    text('Set your template in this dashboard.', 12, 100);


      let opening  = createInput('Write your opening line in here');
      opening.position(60,150);
      opening.size(800,30);



        //input1 = new DashBox("first", 60,250,800,300 );


  // first entry
      let first  = createInput('Write your first discussion topic, e.g. classroom behavior');
      first.position(60,250);
      first.size(800,30);
      first.input(firstTopic);

      let firstGreat = createInput('Write the you did great option');
      firstGreat.position(60,290);
      firstGreat.size(800,30);
      firstGreat.input(firstGreat);

      let firstAverage = createInput('Write the you did average option');
      firstAverage.position(60,330);
      firstAverage.size(800,30);

      let firstImprove = createInput('Write the you need improvement option');
      firstImprove.position(60,370);
      firstImprove.size(800,30);


      // second entry
          let second  = createInput('Write your second discussion topic, e.g. work habits and organization');
          second.position(60,450);
          second.size(800,30);

          let secondGreat = createInput('Write the you did great option');
          secondGreat.position(60,490);
          secondGreat.size(800,30);

          let secondAverage = createInput('Write the you did average option');
          secondAverage.position(60,530);
          secondAverage.size(800,30);

          let secondImprove = createInput('Write the you need improvement option');
          secondImprove.position(60,570);
          secondImprove.size(800,30);


          // third entry
              let third  = createInput('Write your third discussion topic, e.g. laser cutting, or creative problem-solving');
              third.position(60,650);
              third.size(800,30);

              let thirdGreat = createInput('Write the you did great option');
              thirdGreat.position(60,690);
              thirdGreat.size(800,30);

              let thirdAverage = createInput('Write the you did average option');
              thirdAverage.position(60,730);
              thirdAverage.size(800,30);

              let thirdImprove = createInput('Write the you need improvement option');
              thirdImprove.position(60,770);
              thirdImprove.size(800,30);

  //        // fourth entry
              let fourth  = createInput('Write your fourth discussion topic, e.g. programming, or technical skills');
              fourth.position(60,850);
              fourth.size(800,30);

              let fourthGreat = createInput('Write the you did great option');
              fourthGreat.position(60,890);
              fourthGreat.size(800,30);

              let fourthAverage = createInput('Write the you did average option');
              fourthAverage.position(60,930);
              fourthAverage.size(800,30);

              let fourthImprove = createInput('Write the you need improvement option');
              fourthImprove.position(60,970);
              fourthImprove.size(800,30);


              // conclusion entry
                         let conclusion  = createInput('Write your conclusion, e.g. keep it up/step it up/relax a little');
                         conclusion.position(60,1050);
                         conclusion.size(800,30);

                         let conclusionKeepUp = createInput('Write the keep up the good work option');
                         conclusionKeepUp.position(60,1090);
                         conclusionKeepUp.size(800,30);

                         let conclusionStepUp = createInput('Write the step it up option');
                         conclusionStepUp.position(60,1130);
                         conclusionStepUp.size(800,30);

                         let conclusionRelax = createInput('Write the relax, enjoy and experiment more option');
                         conclusionRelax.position(60,1170);
                         conclusionRelax.size(800,30);


}



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
