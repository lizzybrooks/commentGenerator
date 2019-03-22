// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/DcoAjEZYies

var textfield;
var output;
var submit;
var values = [];

var studentName = "name";

var testing;

let input1;
let first = "Write your first input here, e.g. classroom behavior";

function setup() {
  createCanvas(900,1200);
  // textfield = createInput("your favorite food");
  textfield = select("#txt");
  output = select('#output');


  
  submit = select("#submit");

  testing = select("#categoryinput")


  submit.mousePressed(saveDashboard);


  // var name = createInput('name');
  // name.input(myInputEvent);
  // name.position(360,100);
  //
  input1 = new DashBox(first, 60,150,800,30);
  input1.makeInputBox();

}

// function myInputEvent(){
//   studentName = this.value();
//   console.log(studentName, ',');
//



function saveDashboard() {

  values.push(textfield.value());
  values.push(studentName);

  text(values[0],100,200);
  console.log(values);
  console.log(testing);

}

class DashBox {

    constructor(category, xposition, yposition, xsize, ysize){
            this.category = category;
            //this.great = great;
            // this.average = average;
            // this.poor = poor;
            this.xposition = xposition;
            this.yposition = yposition;
            this.xsize = xsize;
            this.ysize = ysize;
    }

    makeInputBox(){
// make an element id for category and then use the select function like above to set the contents equal to a variable
        //print("making input box"+this.category);
        this.category  = createInput(this.category);
        this.category.position(this.xposition,this.yposition);
        this.category.size(this.xsize,this.ysize);
        this.category.id("categoryinput");


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

};
