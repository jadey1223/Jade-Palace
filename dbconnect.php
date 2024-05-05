<?php
function OpenCon()
{
$dbhost = "localhost";
$dbuser = "root";
// $dbpass = "1234";
$dbname = "mysql";
$conn = new mysqli($dbhost, $dbuser,$dbname) or die("Connect failed: %s\n". $conn -> error);
return $conn;
}
function CloseCon($conn)
{
  $sql = "INSERT INTO bookingdb (firstn, lastn, email, date,time,people,email,phonen,comments)
VALUES ('Jade', 'Fleck', 'jade@example.com') ,";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
$conn -> close();
}

if (isset($_POST['submit'])) {
  $sql = "INSERT INTO bookingdb (firstn, lastn, date, time, people, email, phonen, comments) VALUES ('$_POST[firstn]', '$_POST[lastn]', '$_POST[date]', '$_POST[time]', '$_POST[people]', '$_POST[email]', '$_POST[phonen]', '$_POST[comments]')";
  mysqli_query($conn, $sql);
}

