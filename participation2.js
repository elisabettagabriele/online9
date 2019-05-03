'use strict';
(function(){
    
    window.onload = function() {
        displayQuestion();
        setInterval(refreshAll,60);
        $("solve").onclick = nextInQueue;
        
    }
    
    function nextInQueue() {
        console.log("[REDACTED]");
        let REDACTED = document.querySelector(".personInQueue");
        REDACTED.remove();
        updateServer();
        updateServerQuestion();
    }
    
    
    function checkStatus(response) { 
        if (response.status >= 200 && response.status < 300) {  
            return response.text();
        } else {  
            return Promise.reject(new Error(response.status+": "+response.statusText)); 
        } 
    }
        
    function refreshAll() {
        refreshQueue();
        displayQuestion();
    }
    
    function refreshQueue() {
        let url = "QueueServer.php";
        fetch(url, {method: "GET", mode: 'no-cors'})   
        
        .then(checkStatus)
        .then(function(responseText){
              document.getElementById("queue").innerHTML = responseText;
              })
        
        .catch(function(error){
            alert(error);
        })
    }
    
    function displayQuestion() {
        let url = "questionsServer.php";
        fetch(url, {method: "GET", mode: 'no-cors'})   
        .then(checkStatus)
        .then(function(responseText){
              document.getElementById("question").innerHTML = responseText;
              })
        
        .catch(function(error){
            alert(error);
        })
    }
    
    function updateServer(){
        console.log("updated"); 
        let url = "QueueServer.php";
        let personQueue = $("queue").innerHTML;
        let myJSON = JSON.stringify({personQueue});
        let data =  new FormData();
        data.append("data",myJSON);
        var xhr = (window.XMLHttpRequest) ? new XMLHttpRequest() : new activeXObject("Microsoft.XMLHTTP");
        xhr.open( 'post', url, true );
        xhr.send(data);
  	}
    
    function updateServerQuestion(){
        console.log("updated Question"); 
        let url = "questionsServer.php";
        var xhr = (window.XMLHttpRequest) ? new XMLHttpRequest() : new activeXObject("Microsoft.XMLHTTP");
        xhr.open( 'GET', url + "?mode=destroy");
        xhr.send();
  	}
    
    
    
    //jquery hack
    function $(elementID) {
        return document.getElementById(elementID);
    }
        
})();