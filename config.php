<<<<<<< HEAD
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>

    <?php
        $host = "localhost";
        $user = "root";
        $pass = "";
        $banco = "empresa";
        $conexao = new mysqli($host,$user,$pass,$banco);

            if (mysqli_connect_errno()) {
                die('Não foi possível conectar-se ao banco de dados: ' . mysqli_connect_error());
            exit();
        }
    ?>

  </body>
=======
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>

    <?php
        $host = "localhost";
        $user = "root";
        $pass = "";
        $banco = "empresa";
        $conexao = new mysqli($host,$user,$pass,$banco);

            if (mysqli_connect_errno()) {
                die('Não foi possível conectar-se ao banco de dados: ' . mysqli_connect_error());
            exit();
        }
    ?>

  </body>
>>>>>>> 59f7530a47230756c9e584f1369ab35b68e9ab1e
</html>  