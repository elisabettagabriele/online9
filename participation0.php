<!DOCTYPE html>
<html>
	
	<head>
        <title>Participation Party!</title>
        <link href="https://fonts.googleapis.com/css?family=EB+Garamond" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="participation0.css">
       
	</head>
	
	<body>
    

        
        <div id = "titles"><h3>Participation Party!</h3></div>
        
       <img id = "logo" src = "imagesf/logo3.jpg">
        <div class = "container">
            <p>We created particpation party so that classrooms are not forcing students, especially introverted, or simply 'not having it' students to fight for participation.

                        Made by students for students
                        
                        Join the party and participate.</p>
        </div>

        <fieldset class = "leaving">
				
				<div>
                <h3 id ="title">Enter your information and I can get back to you!</h3>
					Name: <input type="text" name="names" />
					<span class="error">* <?php echo $namesErr;?></span>
				</div>

				<div>
					Email: <input type="text" name="email"/>
					<span class="error">* <?php echo $emailErr;?></span>
                </div>
                
			<input id = "query" type="submit" class="submit"/>
            </fieldset>
            

    
        
        
        
        </div>
		
                   
        




<?php

            // define variables and set to empty values 
            $names = $email = " ";
            $namesErr = $emailErr = " ";

            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                //your code goes here. 
                if (empty($_POST["names"])) {
                    $namesErr = "Name is required";
                }
                else{
                     $names = $_POST["names"];
                    if (!preg_match("/\w+\s+\w+/", $names)) {
                        $namesErr = "Error, invalid name field";

                    }
            }  


    
    
    
            if (empty($_POST["email"])){
                $emailErr = "error, your email name is empty";

        }
            else{
                $email = $_POST["email"];
                 if (!preg_match("/^\w+[@]\w+.\w{3}?/", $email)) {
                    $emailErr = "Invalid email address";

                }


            }
        }

?>