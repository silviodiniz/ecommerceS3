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
</html>  