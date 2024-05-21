<?php

$host = "localhost";
$username = "root";
$password = "";
$dbname = "bookings";

// Create a connection
$conn = new mysqli($host, $username, $password, $dbname); // Corrected variable name from $servername to $host

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Initialize variables
$firstn = '';
$lastn = '';
$date = '';
$email = '';
$time = '';
$people = '';
$phonen = '';
$comments = '';

if(isset($_POST['submit']))
{
    $firstn = $_POST['firstn'];
    $lastn = $_POST['lastn'];
    $date = $_POST['date'];
    $email = $_POST['email'];
    $time = $_POST['time'];
    $people = $_POST['people'];
    $phonen = $_POST['phonen'];
    $comments = $_POST['comments'] ?? 'Default comment';
    
    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO info (firstn, lastn, date, email, time, people, phonen, comments) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssiis", $firstn, $lastn, $date, $email, $time, $people, $phonen, $comments);

    // redirect to home-page
    header('Location:  https://jadey1223.github.io/Jade-Palace/');
exit;
    // Execute and check
    if ($stmt->execute()) {
        echo "Data inserted successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }
    
    // Close statement
    $stmt->close();
}

// Close the connection
$conn->close();
