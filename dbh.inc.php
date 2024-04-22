<?php

$dsn = "mysql:host=localhost;dbname=bookings";
$dbusername = "root";
$dbpassword = "Jadeyb708@";

try {
  $pdo = new PDO("$dsn,$dbusername,$dbpassword");
  $pdo ->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXECPTION);
} catch (PDOException $e) {
  echo "connectionfailed:" . $e->getMessage();
}
