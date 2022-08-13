<<<<<<< HEAD
<html>
<head>
    <meta charset="utf-8">
    <title>Cadastro de usuários interessados em trabalhar na Pies & Cia.</title>
    <link rel="stylesheet" text="text/css" href="estilo.css"> -->
</head>
<body>
<?php
require ("config.php");
?>

<?php

$fullname = $_POST['fullname'];
$address = $_POST['address'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$area = $_POST['area'];
$file = $_POST['file'];

$sql = "INSERT INTO usuarios (fullname, address, email, phone, area, file) 
        VALUES (:fullname, :address, :email, :phone, :area, :file)
";

$stmt = $conexao->prepare($sql);

$params = array(
    ':fullname' => $fullname, 
    ':address' => $address,
    ':email' => $email, 
    ':phone' => $phone, 
    ':area' => $area, 
    ':file' => $file
);

$stmt->execute($params);

echo "<script>
          alert('Usuário cadastrado com sucesso.');
      </script>
      <meta http-equiv='refresh' content='0, url=usuarios.php'>
";
?>
</body>
=======
<html>
<head>
    <meta charset="utf-8">
    <title>Cadastro de usuários interessados em trabalhar na Pies & Cia.</title>
    <link rel="stylesheet" text="text/css" href="estilo.css"> -->
</head>
<body>
<?php
require ("config.php");
?>

<?php

$fullname = $_POST['fullname'];
$address = $_POST['address'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$area = $_POST['area'];
$file = $_POST['file'];

$sql = "INSERT INTO usuarios (fullname, address, email, phone, area, file) 
        VALUES (:fullname, :address, :email, :phone, :area, :file)
";

$stmt = $conexao->prepare($sql);

$params = array(
    ':fullname' => $fullname, 
    ':address' => $address,
    ':email' => $email, 
    ':phone' => $phone, 
    ':area' => $area, 
    ':file' => $file
);

$stmt->execute($params);

echo "<script>
          alert('Usuário cadastrado com sucesso.');
      </script>
      <meta http-equiv='refresh' content='0, url=usuarios.php'>
";
?>
</body>
>>>>>>> 59f7530a47230756c9e584f1369ab35b68e9ab1e
</html>