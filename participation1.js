"use strict";
(function() {
    
    window.onload = function() {
        var person = $("picture");
        var username = $("name");
        var textField = $("comment");
        
        setInterval(refreshMessages,60);
        
        person.onclick = updateServer;
        
        
        var info = $("info1");
        var texty = $("texty");
        
        info.onmouseover = (function(){
           
            texty.innerHTML = "Silent: Teacher reads aloud. Aloud: you read aloud.";
            
        })
        info.onmouseout = (function(){
     
            texty.innerHTML = "";
            
            
        })
        
        
        person.onclick = function() {
            if (!checkReady()) {
                console.log("username empty");
                console.log("no question!");
                //Do not allow post if username is empty
            } else {
                addToQueue();
                appendQuestion();
                textField.value = "";
            }
        }
       
    }
    
     function checkStatus(response) {  
        if (response.status >= 200 && response.status < 300) {  
            return response.text();
        } else {  
            return Promise.reject(new Error(response.status+": "+response.statusText)); 
        } 
    }
    
    
         
    function refreshMessages(){
        let url = "QueueServer.php";
        fetch(url, {method: "GET", mode: 'no-cors'})   
        .then(checkStatus)
        .then(function(responseText){
              document.getElementById("queue").innerHTML = responseText;
              })
        
        .catch(function(error){
            alert(error);
        })  
        
        checkReady();   
    }
    
    function updateServer(){
        let url = "QueueServer.php";
        let personQueue = $("queue").innerHTML;
        let myJSON = JSON.stringify({personQueue});
        let data =  new FormData();
        data.append("data",myJSON);
        var xhr = (window.XMLHttpRequest) ? new XMLHttpRequest() : new activeXObject("Microsoft.XMLHTTP");
        xhr.open( 'post', url, true );
        xhr.send(data);
  	}
        
    function appendQuestion() {
        let url = "questionsServer.php";
        let question = $("comment").value;
        let data =  new FormData();
        data.append("data",question);
        var xhr = (window.XMLHttpRequest) ? new XMLHttpRequest() : new activeXObject("Microsoft.XMLHTTP");
        xhr.open( 'post', url, true );
        xhr.send(data);
    }
        
    
    //check if conditions are met to post into queue
    //TODO: turn this into a php form validation that returns either true or false
    function checkReady() {
        if ($("name").value == "" || $("comment").value == "") {
            $("picture").style.borderColor = "red";
            return false;
        } else {
             $("picture").style.borderColor = "green";
            return true;
        }
    }
   
    //add image 
    function addToQueue() {
        //get stuff
        let container = $("queue");
        let choice = document.querySelector(".switch input").checked;
        let newEntry = document.createElement("div");
        let newEntryText = document.createElement("p")
        let question = $("comment").value;
        
        //set class
        newEntry.className = "personInQueue";
        //fill with name of user
        newEntryText.classList.add("text");
        newEntryText.appendChild(document.createTextNode($("name").value));
        newEntry.appendChild(newEntryText);
        
        //create image, set image source (can be changed to whatever). Set class too
        let newImg = document.createElement("img");
        newImg.src = "person.png";
        newImg.alt = "student picture";
        newImg.className = "image";
    
        //add image to it;
        newEntry.appendChild(newImg);
        
        //add text from textfield to questionfield
        document.querySelector("#question p").innerHTML = question;
        
        //add new entry based on option selected
        if (choice == true) {
            console.log("aloud set");
            container.appendChild(newEntry);
            updateServer();
          
            
        
        } else {
            console.log("silent set");
            newEntry.classList.add("silent");
            container.appendChild(newEntry);
            updateServer();
           
        }
        
    }
    
    /*TODO
        take the text from textfield and push the contents into an array in PHP.
        Everytime the teacher client clicks on the image of someone in the queue, load next content of array into question container.
        
        Take contents of container and push all to php
        
        update container constantly based on php data.
    
    */
    
    
    
    //jquery hack
    function $(elementID) {
        return document.getElementById(elementID);
    }

})();
