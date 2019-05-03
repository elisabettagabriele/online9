<?php

$mode = $_GET["mode"]; 

if ($mode == "destroy") {
    delete_first("questions.txt");
}

if (!empty($_POST['data'])) {
    
    $data = $_POST['data'];
    $file = fopen("questions.txt",'a');
    fwrite($file, $data . "\n");
    fclose($file);
   
} else {
    $file = file("questions.txt");
    $output = $file[0];
    echo $output;
}

function delete_first($filename) {
  $file = file($filename);
  unset($file[0]);
  file_put_contents($filename, $file);
}


?>