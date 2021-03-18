<?php
session_start();
include('verifica_login.php');
?>




<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To Do list</title>
    <link rel="stylesheet" type="text/css" href="./style.css">
    <!-- Font Google -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" />

</head>
<body>
    <header>
        

        <div class="logo__container">
            <img src="./img/logo_branco 1.png" alt="">
        </div>

        <nav>
            <ul class="nav__links">
                <h2>Olá, <?php echo $_SESSION['nome'];?></h2>
                <h2  ><a class="nav__sair" href="logout.php">Sair</a></h2>
            </ul>
        </nav>

    </header>
    <div class="text-tarefa">
        <h1>Lista de Tarefas</h1>
    </div>


    <form>
        <input type="text" class="todo-input" placeholder="Nome da Tarefa" />
    
        <input type="date" class="todo-date" />

        <button class="todo-button" type="submit">
            <i class="fas fa-plus-square"></i>
        </button>
        <div class="select">
            <select name="todos" class="filter-todo">
                <option value="all">Todas as Tarefas</option>
                <option value="completed">Tarefas Completas</option>
                <option value="uncompleted">Tarefas Incompletas</option>
            </select>
        </div>
    </form>
    <div class="todo-container">
        <ul class="todo-list"></ul>
    </div>

    <script src="./tarefa.js"></script>
</body>
</html>