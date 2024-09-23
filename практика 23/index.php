<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Форма для фильма и актера</title>
</head>
<body>

<form method="post">
    <label for="movie">Название фильма:</label>
    <input type="text" name="movie" id="movie" required><br><br>

    <label for="actor">Имя актера:</label>
    <input type="text" name="actor" id="actor" required><br><br>

    <input type="submit" value="Отправить">
</form>


<form method="post">
  <input type="text" name="num1" id="num1">
  <input type="text" name="num2" id="num2">
</form>

<?php

function hello(){
  echo "hello world";
}

hello();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $movie = $_POST['movie'];
    $actor = $_POST['actor'];

    function favoriteMovie($movie, $actor) {
        echo "Мой любимый фильм – $movie<br>";
        echo "Главную роль в фильме играет – $actor<br>";
    }

    favoriteMovie($movie, $actor);
}
?>

</body>
</html>
