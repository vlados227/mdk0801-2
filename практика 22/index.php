<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Работа с датой и временем</title>
</head>
<body>

<h2>Задание 5: Работа с датами и временем на PHP</h2>

<?php
// 5.1 Текущая информация о дате и времени
$currentDate = date('d F Y, l');
$currentTime = date('H:i:s');
echo "<h3>Текущая дата и время:</h3>";
echo "<p>$currentDate</p>";
echo "<p>Время: $currentTime</p>";

// 5.2 Сколько дней осталось до Нового года
$now = new DateTime(); // Текущая дата
$newYear = new DateTime('December 31 ' . $now->format('Y')); // Дата 31 декабря текущего года
$daysUntilNewYear = $newYear->diff($now)->days;

echo "<h3>Сколько дней осталось до Нового года:</h3>";
echo "<p>До Нового года осталось: $daysUntilNewYear дней.</p>";

// 5.3 Какой день недели был 100 дней назад
$pastDate = new DateTime(); // Текущая дата
$pastDate->modify('-100 days'); // Отнимаем 100 дней
$dayOfWeek100DaysAgo = $pastDate->format('l'); // Получаем день недели

echo "<h3>Какой день недели был 100 дней назад:</h3>";
echo "<p>100 дней назад был: $dayOfWeek100DaysAgo.</p>";
?>

</body>
</html>
