<?php
session_start();
?>

<!DOCTYPE html>
<html>
    
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Sistema de Login - PHP + MySQL - Canal TI</title>
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;900&display=swap" rel="stylesheet">   
    <!-- CSS -->
    <link rel="stylesheet" type="text/css" href="./login.css">

</head>

<body>
    <header>
        <div class="logo__container">
            <img src="./img/logo_azul 1 (1).png" alt="">
        </div>

        <nav>
            <ul class="nav__links">
                <li><a class="nav__link" href="home.php">Home</a></li>
                <li><a class="nav__link" id="active" href="#">Login</a></li>
                <li><a class="nav__link" id="btn__sign" href="cadastro.php">Cadastra-se</a></li>
            </ul>
        </nav>
    </header>

    <section class="container">
                <div class="intro-text">
                    <h1>Login</h3>
                </div>
                                <?php
                                if(isset($_SESSION['nao_autenticado'])):
                                ?>
                                <div class="notification is-danger">
                                <p>ERRO: Usuário ou senha inválidos.</p>
                                </div>
                                <?php
                                endif;
                                unset($_SESSION['nao_autenticado']);
                                ?>
                <form action="login.php" method="POST">
                    <div class="sign__intro">
                        <div class="form__sign">
                                        <h1>E-mail:</h1>
                                        <input name="usuario" name="text" autofocus="">
                                        <h1>Senha:</h1>
                                        <input name="senha" type="password">
                        </div>
                    </div>
                    <div class="btn__sign">
                        <button type="submit" class="btn_cta">Entrar</button>
                    </div>
                </form>
    </section>
</body>

</html>