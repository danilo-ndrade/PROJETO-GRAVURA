function setup() {
    var cnv = createCanvas(600, 600);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
    background(0);
  }

  
let val;
function getValue(){
    /*val = document.getElementById('input1').value;*/
    for (let i = 0; i < 5; i++) {
        /*let r  = random(val);*/
        let r1 = random(600);
        let r2 = random(600);
        stroke(random(100));
        
        line(300 + (10*i), 300 + (10*i), r1, r2);
        stroke(random(100));
        
        line(r1, r2, random(600), random(600))
}

}

let val2;
function getValue2(){
    for (let i = 0; i < 4; i++) {
        /*let r  = random(val);*/
        let r1 = random(600);
        let r2 = random(600);
        stroke(255);
        line(0, 0, r1, r2);
}



}

let val3;
function getValue3(){
    rect(random(600), random(600), 50, 50);
    fill(random(255));
    rect(random(600), random(600), 50, 50);
    fill(random(255));
}






















