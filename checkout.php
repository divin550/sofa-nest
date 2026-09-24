<?php

$hostname = "localhost";

$user = "root";

$password = "";

$dbName = "user_db";

$con = mysqli_connect($hostname, $user, $password, $dbName);


if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $userName = $_POST["full_name"];

    $userNumber = $_POST["phone_number"];

    $userEmail = $_POST["email"];

    $userAddLine1 = $_POST["address_line_1"];

    $userAddLine2 = $_POST["address_line_2"];

    $userLandmark = $_POST["landmark"];

    $userPinCode = $_POST["pin_code"];

    $userCity = $_POST["city"];

    $userState = $_POST["state"];

    $userNation = $_POST["nation"];


    $query = "INSERT INTO user_info
    (name, phone, email, house, area, landmark, pincode, city, state, nation)
    
    VALUES
    ('$userName', '$userNumber', '$userEmail', '$userAddLine1',
     '$userAddLine2', '$userLandmark', '$userPinCode', '$userCity',
     '$userState', '$userNation')";


    $ins = mysqli_query($con, $query);


    if ($ins) {
    echo "<script>alert('Data inserted');</script>";
    echo "<script>window.location = 'checkOut.html'</script>";
} else {
    echo "Error: " . mysqli_error($con);
}

}

?>