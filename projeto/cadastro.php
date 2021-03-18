<?php 
session_start();
?>

<!DOCTYPE html>
<html>
    
<head> 
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Sistema de Cadastro - PHP + MySQL - Canal TI</title>
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;900&display=swap" rel="stylesheet">   
    <!-- CSS -->
    <link rel="stylesheet" type="text/css" href="./cadastro.css">

    
    <!-- SCRIPT -->
    <script src="http://www.geradorcpf.com/scripts.js"></script>
    <script src="http://www.geradorcpf.com/jquery-1.2.6.pack.js"></script>
    <script src="http://www.geradorcpf.com/jquery.maskedinput-1.1.4.pack.js"></script>
</head>

<body>
    <header>
        <div class="logo__container">
            <img src="./img/logo_azul 1 (1).png" alt="">
        </div>

        <nav>
            <ul class="nav__links">
                <li><a class="nav__link" href="home.php">Home</a></li>
                <li><a class="nav__link" href="index.php">Login</a></li>
                <li><a class="nav__link" id="btn__sign" href="cadastro.php">Cadastra-se</a></li>
            </ul>
        </nav>
    </header>

    <section class="container">
            <div class="intro-text">
                <h1>Crie sua conta aqui</h3>
            </div>
                    <!-- 
                    <div style="display: none;" class="notification is-success">
                      <p>Cadastro efetuado!</p>
                      <p>Faça login informando o seu usuário e senha <a href="login.php">aqui</a></p>
                    
                    </div>
   
                    <div style="display: none;" class="notification is-info">
                        <p>O usuário escolhido já existe. Informe outro e tente novamente.</p>
                    </div>
                    -->
            <form action="cadastrar.php" method="POST">
                <div class="introduction">
                    
                    <div class="sign_intro">
                                <h1>Nome:</h1>
                                <input name="nome" type="text" autofocus required>
                                <h1>E-mail:</h1>
                                <input name="usuario" type="text" required>
                                <h1>Data de Nascimento:</h1>
                                <input name="datanasc" id="nascimento" type="date"  required>
                                <h1>CPF:</h1>
                                <input type="text" maxlength="14" id="RegraValida" name="cpf"  onkeydown="javascript: fMasc( this, mCPF ); ">    
                    </div>

                    <div class="sign_intro-1">                    
                                <h1>CEP:</h1>
                                <input name="cep" type="number" maxlength="8">
                                <h1>Endereço:</h1>
                                <input name="endereco" type="text">
                                <h1>Nº da Residencias</h1>
                                <input name="ndr" type="number" maxlength="6">
                                <h1>Senha</h1>
                                <input name="senha" type="password" required>

                    </div>

                </div>

                <div class="btn__sign">
                     <button type="submit" class="btn_cta" id="btvalidar" name="btvalidar" onclick='return validadata()' ; ValidaCPF();> Cadastrar</button>
                </div>
            </form>
    </section>


   <script src="./app.js"></script>
</body>

</html>