<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>

<!-- script para checar o envio - escrito em php -->
    <?php
      if (isset($_POST['enviar'])) {
        echo "Dados enviados com sucesso!";
      } else{
          echo "Atenção! Seus dados não foram enviados. Refaça o processo.";
      };
    ?> 
  </body>
</html>       
<!-- Após o envio, os dados do formulário serão enviados
para a página "cadastro.php" no servidor. -->
<<<<<<< HEAD
        
=======
      
>>>>>>> 6e57c50bcf692376cc07ed9f1a729bfdfb955cf9
