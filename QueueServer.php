

<?php

    
if (!empty($_POST['data'])) {
    $data = $_POST['data'];
    $file = fopen("queue.json",'w');
    fwrite($file, $data);
    fclose($file);
} else {
    $data = file_get_contents("queue.json");
    $char = json_decode($data);
    foreach ($char as $value) {
        echo $value;
    }

    
}


?>
    