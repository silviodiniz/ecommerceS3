<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
	<title>Cadastro de Usuários</title>
    <link rel="stylesheet" text="text/css" href="estilo.css">
  </head>
    <body>
        <?php
            require ("config.php");
        ?>
	  <div id="cadastro">
    	<form name="signup" method="post" action="cadastro.php">
    		<table id="tab_cadastro">
            	<tr>
                	<td>Nome:</td>
                    <td><input type="text" name="fullname" required placeholder="Nome completo" id="fullname" class="txt" /></td>
                </tr>
                <tr>    
                    <td>Endereço:</td>
                    <td><input type="text" name="address" required placeholder="address" id="address" class="txt" /></td>
                </tr>
                <tr>    
                    <td>E-mail:</td>
                    <td><input type="text" name="email" required placeholder="email" id="email" class="txt" /></td>
                </tr>
                <tr>    
                    <td>Celular:</td>
                    <td><input type="text" name="phone" required placeholder="phone" id="phone" class="txt" /></td>
                </tr>
                <tr>    
                    <td>Área de interesse:</td>
                    <td><input type="text" name="area" required placeholder="area de interesse" id="area" class="txt" /></td>
                </tr>
                <tr>    
                    <td>Arquivo com cv:</td>
                    <td><input type="file" name="file" required placeholder="arquivo com cv" id="file" class="file" /></td>
                </tr>
                <tr>    
                    <td colspan="2"><input type="submit" value="Cadastrar" name="go" id="botao_cad"></td>
                </tr>
            </table>
        </form>
    </div>
</body>
</html>


