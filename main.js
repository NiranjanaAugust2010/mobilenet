function preload(){
 
}

function setup(){
  canvas=createCanvas(300,300)
  canvas.center()
  camera=createCapture(VIDEO)
  camera.hide()
  classifier=ml5.imageClassifier('MobileNet', modelLoaded)
}

function draw(){
  image(camera,0,0,300,300)
  classifier.classify(camera,gotResult)
}

function modelLoaded(){
  console.log("modelLoaded")
}
var previousresult=''
function gotResult(error,results){
  if(error){
    //console.error(error)

  }

  else{
   
    if((results[0].confidence>0.5)&&(previousresult != results[0].label)){
      console.log(results)
      console.log(results[0].label)
      document.getElementById("result_object_name").innerHTML=results[0].label
      document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3)
      var synth=window.speechSynthesis
      speak_data="object detected is "+ results[0].label
      var utterthis=new SpeechSynthesisUtterance(speak_data)
      //synth.speak(utterthis)
    }
    
  }

  

  
}

