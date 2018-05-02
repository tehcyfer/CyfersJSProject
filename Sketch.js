// Cloud Variables

var cloudOne = 200;
var cloudTwo = 150;
var cloudThree = 300;
var cloudFour = 100;

function setup() {
    createCanvas(500,500)
}

function draw() {
    background('white');
    fill('yellow')
    ellipse(250, 250, 200, 200)

    fill('white');
    ellipse(cloudOne, 100, 200, 50);
    ellipse(cloudTwo, 150, 200, 50);


    ellipse(cloudThree, 400, 200, 50);
    ellipse(cloudFour, 370, 200, 50);

    cloudOne++;
    cloudTwo++;
    cloudThree++;
    cloudFour++;
    


}