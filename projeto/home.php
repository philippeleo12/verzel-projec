<?php 
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="app.css">
    <title>Document</title>
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;400;500;600;700;800;900&display=swap" rel="stylesheet">
</head>
<body>
    <header>
        <div class="logo__container">
            <img src="./img/logo_branco 1.png" alt="">
        </div>

        <nav>
            <ul class="nav__links">
                <li><a class="nav__link" href="home.php">Home</a></li>
                <li><a class="nav__link" href="login.php">Login</a></li>
                <li><a class="nav__link" id="btn__sign" href="cadastro.php">Cadastra-se</a></li>
            </ul>
        </nav>
    </header>

    <div class="apresentation">
        <div class="introduction">
            <div class="intro__text">
                <h1>Sistema de cadastro de tarefas</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quo impedit nam quia aspernatur dignissimos corrupti ullam error velit necessitatibus.</p>
            </div>
            <div class="cover__img">
                <img src="./img/ilustração 1.png" alt="" />
            </div>
        </div>
    </div>
</body>
</html>