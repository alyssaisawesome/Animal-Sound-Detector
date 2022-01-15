function start() {

  navigator.mediaDevices.getUserMedia({audio:true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/nRk4riSbx/model.json', modelReady);
  
  }
  
  function modelReady() {
  
    classifier.classify(gotResults);
  
  }
  
  function gotResults(error, results) {
  
  if (error) {
    console.error(error);
  }
  
  else {
  
    console.log(results);
  
    r = Math.floor(Math.random()*255) + 1;
    g = Math.floor(Math.random()*255) + 1;
    b = Math.floor(Math.random()*255) + 1;
  
    document.getElementById("result_label").innerHTML = "I can hear: " + results[0].label;
    document.getElementById("result_confidence").innerHTML = "Accuracy: " + (results[0].confidence*100).toFixed(2) + "%";
  
    document.getElementById("result_label").style.color="rgb(" + r + "," + g + "," + b + ")";
    document.getElementById("result_confidence").style.color="rgb(" + r + "," + g + "," + b + ")";
  
    img = document.getElementById("animalimg");
  
    if (results[0].label == "Cat") {
      img.src="cat.jpg";
    }
  
    else if (results[0].label == "Chicken") {
  
      img.src="chicken.jpg";
  
    }
  
    else if (results[0].label == "Cow") {
      
      img.src="cow.jpg";
  
    }
  
    else if (results[0].label == "Dog") {
      
      img.src="dog.jpg";
  
    }
    else if (results[0].label == "Sheep") {
      
      img.src="sheep.jpg";
  
    }
    else if (results[0].label == "Wolf") {
      
      img.src="wolf.jpg";

    }

    else {

img.src="cat-cute.webp";

    }
  
  }
  
  }