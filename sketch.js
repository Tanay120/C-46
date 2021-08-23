var mathsButton;
var mathsInput;

var englishButton;
var englishInput;

var frenchButton;
var frenchInput;

var physicsButton;
var physicsInput;

var chemistryButton;
var chemistryInput;

var ictButton;
var ictInput;

var bsButton;
var bsInput;

var bioButton;
var bioInput;

var accountsButton;
var accountsInput;

var ecoButton;
var ecoInput;

var hindiButton;
var hindiInput;

function setup() {
  createCanvas(10000,1000);

  // Write in format: Year(2020)/PaperCode(0500)_month(m,s or w)+(20)_(ms or qp)_paper num(12);
  //m is for feb-march
  //s is for may-june
  //w is for oct-nov
  //for single digit numbers add a "0" befor the number 
  
  mathsButton = createButton("Check Maths");
  mathsButton.position(10,100);

  mathsInput = createInput("2020/0580_m20_ms_12");
  mathsInput.position(10,65);

  mathsButton.mousePressed(maths);

  englishButton = createButton("Check English");
  englishButton.position(210,100);

  englishInput = createInput("2020/0500_m20_ms_12");
  englishInput.position(210,65);

  englishButton.mousePressed(english);

  frenchButton = createButton("Check French");
  frenchButton.position(410,100);

  frenchInput = createInput("2020/0520_m20_ms_12");
  frenchInput.position(410,65);

  frenchButton.mousePressed(french);

  physicsButton = createButton("Check Physics");
  physicsButton.position(610,100);

  physicsInput = createInput("2020/0625_m20_ms_12");
  physicsInput.position(610,65);

  physicsButton.mousePressed(physics);

  chemistryButton = createButton("Check Chemsitry");
  chemistryButton.position(810,100);

  chemistryInput = createInput("2020/0620_m20_ms_12");
  chemistryInput.position(810,65);

  chemistryButton.mousePressed(chemistry);

  ictButton = createButton("Check ICT");
  ictButton.position(1010,100);

  ictInput = createInput("2020/0417_m20_ms_12");
  ictInput.position(1010,65);

  ictButton.mousePressed(ict);

  bsButton = createButton("Check Business Studies");
  bsButton.position(10,400);

  bsInput = createInput("2020/0450_m20_ms_12");
  bsInput.position(10,365);

  bsButton.mousePressed(bs);

  bioButton = createButton("Check Biology");
  bioButton.position(210,400);

  bioInput = createInput("2020/0610_m20_ms_12");
  bioInput.position(210,365);

  bioButton.mousePressed(bio);
   
  accountsButton = createButton("Check Accounting");
  accountsButton.position(410,400);

  accountsInput = createInput("2020/0452_m20_ms_12");
  accountsInput.position(410,365);

  accountsButton.mousePressed(accounts);

  ecoButton = createButton("Check Economics");
  ecoButton.position(610,400);

  ecoInput = createInput("2020/0455_m20_ms_12");
  ecoInput.position(610,365);

  ecoButton.mousePressed(eco);

  hindiButton = createButton("Check Hindi");
  hindiButton.position(810,400);

  hindiInput = createInput("2020/0549_m20_qp_01");
  hindiInput.position(810,365);

  hindiButton.mousePressed(hindi);
}

function draw() {
  background("cyan");
}

function maths(){
  console.log("maths");
  var paperNum = mathsInput.value();
  window.open("https://papers.gceguide.com/Cambridge%20IGCSE/Mathematics%20(0580)/" + paperNum + ".pdf")
}

function english(){
  console.log("english");
  var paperNum = englishInput.value();
  window.open("https://papers.gceguide.com/Cambridge%20IGCSE/English%20-%20First%20Language%20(0500)/"+ paperNum + ".pdf")
}

function french(){
  console.log("french");
  var paperNum = frenchInput.value();
  window.open("https://papers.gceguide.com/Cambridge%20IGCSE/French%20-%20Foreign%20Language%20(0520)/"+ paperNum +".pdf")
}

function physics(){
  console.log("physics");
  var paperNum = physicsInput.value();
  window.open("https://papers.gceguide.com/Cambridge%20IGCSE/Physics%20(0625)/"+ paperNum +".pdf")
}

function chemistry(){
  console.log("chemistry");
  var paperNum = chemistryInput.value();
  window.open("https://papers.gceguide.com/Cambridge%20IGCSE/Chemistry%20(0620)/"+ paperNum +".pdf")
}

function ict(){
  console.log("ict");
  var paperNum = ictInput.value();
  window.open("https://papers.gceguide.com/Cambridge%20IGCSE/Information%20and%20Communication%20Technology%20(0417)/"+ paperNum +".pdf")
}

function bs(){
  console.log("bs");
  var paperNum = bsInput.value();
  window.open("https://papers.gceguide.com/Cambridge%20IGCSE/Business%20Studies%20(0450)/"+ paperNum +".pdf")
}

function bio(){
  console.log("bio");
  var paperNum = bioInput.value();
  window.open("https://papers.gceguide.com/Cambridge%20IGCSE/Biology%20(0610)/"+ paperNum +".pdf")
}

function accounts(){
  console.log("accounts");
  var paperNum = accountsInput.value();
  window.open("https://papers.gceguide.com/Cambridge%20IGCSE/Accounting%20(0452)/"+ paperNum +".pdf")
}

function eco(){
  console.log("eco");
  var paperNum = ecoInput.value();
  window.open("https://papers.gceguide.com/Cambridge%20IGCSE/Economics%20(0455)/"+ paperNum +".pdf")
}

function hindi(){
  console.log("hindi");
  var paperNum = hindiInput.value();
  window.open("https://papers.gceguide.com/Cambridge%20IGCSE/Hindi%20as%20a%20Second%20Language%20(0549)/"+ paperNum +".pdf")
}