<?php
    
if(isset($_POST['submit']))
    {
        $firstn = $_POST['firstn'];
        $lastn= $_POST['lastn'];
        $date = $_POST['date'];
        $email = $_POST['email'];
        $time = $_POST['time'];
        $people = $_POST['people'];
        $phonen= $_POST['phonen'];
        $comments= $_POST['comments'];
    }

    $host = "127.0.0.1";
    $username = "root";
    $password = "";
    $dbname = "booking'";
   
    // creating a connection
    $con = mysqli_connect($host, $username, $password, $dbname);
    
    // to ensure that the connection is made
    if (!$con)
    {
        die("Connection failed!" . mysqli_connect_error());
    }

    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        // collect value of input field
        $data = $_REQUEST['val1'];
    
        if (empty($data)) {
            echo "data is empty";
        } else {
            echo $data;
        }
    }
    
    // Closing the connection.
    $conn->close();
?>