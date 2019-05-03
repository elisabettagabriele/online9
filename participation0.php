<?php


    session_start(); 
    if (!isset($_SESSION['count'])){ 
     $_SESSION['count'] = 1; 
    }
    else{  
     $_SESSION['count']++;
    }


?>


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
                        
                
                        Join the party and participate. 
                    <br>Join the party <a href = "participation1.html"> here </a>.
                
                        Professors can host the party <a href = "participation2.html"> here </a>.
            </p>
    
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
                $emailErr = "Email is empty";

        }
            else{
                $email = $_POST["email"];
                 if (!preg_match("/^\w+[@]\w+.\w{3}?/", $email)) {
                    $emailErr = "Invalid email address";

                }


            }
        }

?>
            <form id = "f" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post" enctype="multipart/form-data">

			<fieldset  class = "leaving">
				<legend id ="title">Enter your information and I can get back to you!</legend>
				<div class = "divy">
					Name: <input id="thename" type="text" name="names" required />
					<span class="error">* <?php echo $namesErr;?></span>
				</div>

				<div class = "divy">
					Email: <input id="thename2" type="text" name="email" required/>
					<span class="error">* <?php echo $emailErr;?></span>
				</div>
                
                <div class = "divy">
                    Concerns: <input class="more" type = "text" name = "texxt">
                </div>
			</fieldset>
			
            
			
			
			<input id = "query" type="submit" />
		</form>
            
            
<?php
        
echo "<h2>Thanks for your info:</h2>";
         $th = $_POST["texxt"];
?> 
       
<div class="container1"> <?php echo $names;?> <br> <?php echo $email;?> <br> <?php echo $th;?> </div>
<?php
echo "<br>";


        

echo "<br>";

?>
            
       
    </body>
</html>
		
              
