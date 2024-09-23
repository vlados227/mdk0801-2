<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Массивы на PHP</title>
    <style>
        .product-card {
            border: 1px solid #ccc;
            padding: 10px;
            margin: 10px;
            display: inline-block;
            width: 200px;
            text-align: center;
        }
        .product-card img {
            width: 100px;
            height: 100px;
        }
    </style>
</head>
<body>

<h2>Задание с простыми массивами</h2>

<?php
// 5.1 Создайте массив фрукты из пяти элементов, выведите массив целиком на экран
$fruits = ['Яблоко', 'Банан', 'Апельсин', 'Груша', 'Вишня'];
echo "<h3>Массив фруктов:</h3>";
echo "<pre>";
print_r($fruits);
echo "</pre>";

// 5.2 Вызовите случайный элемент массива на экран с новой строки
$randomFruit = $fruits[array_rand($fruits)];
echo "<p>Мой любимый фрукт – $randomFruit!</p>";

// 5.3 Создайте второй массив – овощи, состоящий также из пяти элементов
$vegetables = ['Помидор', 'Огурец', 'Морковь', 'Капуста', 'Баклажан'];
echo "<h3>Массив овощей:</h3>";
echo "<pre>";
print_r($vegetables);
echo "</pre>";

// 5.4 Добавьте к массиву фрукты новый элемент, выведите результирующий массив на экран
$fruits[] = 'Манго';
echo "<h3>Массив фруктов после добавления Манго:</h3>";
echo "<pre>";
print_r($fruits);
echo "</pre>";

// 5.5 Удалите третий элемент из массива овощи
unset($vegetables[2]); // Удаляем элемент по индексу 2 (Морковь)
echo "<h3>Массив овощей после удаления третьего элемента (Морковь):</h3>";
echo "<pre>";
print_r($vegetables);
echo "</pre>";

// 5.6 Отсортируйте массив фрукты в алфавитном порядке, а массив овощи в обратном порядке
sort($fruits); // Алфавитная сортировка для фруктов
rsort($vegetables); // Обратная сортировка для овощей
echo "<h3>Фрукты в алфавитном порядке:</h3>";
echo "<pre>";
print_r($fruits);
echo "</pre>";

echo "<h3>Овощи в обратном порядке:</h3>";
echo "<pre>";
print_r($vegetables);
echo "</pre>";

// 5.7 Объедините два массива, выведите результат на экран
$mergedArray = array_merge($fruits, $vegetables);
echo "<h3>Объединенный массив фруктов и овощей:</h3>";
echo "<pre>";
print_r($mergedArray);
echo "</pre>";

// 5.8 Подсчитайте количество элементов в получившемся массиве
$count = count($mergedArray);
echo "<p>Количество элементов в объединенном массиве: $count</p>";
?>

<h2>Многомерные массивы</h2>

<?php
// 5.9 Создайте многомерный массив для вывода карточек с товаром
$products = [
    [
        'name' => 'Яблоко',
        'price' => 100,
        'image' => 'https://via.placeholder.com/100?text=Яблоко',
    ],
    [
        'name' => 'Банан',
        'price' => 120,
        'image' => 'https://via.placeholder.com/100?text=Банан',
    ],
    [
        'name' => 'Апельсин',
        'price' => 80,
        'image' => 'https://via.placeholder.com/100?text=Апельсин',
    ],
    [
        'name' => 'Груша',
        'price' => 90,
        'image' => 'https://via.placeholder.com/100?text=Груша',
    ],
    [
        'name' => 'Манго',
        'price' => 150,
        'image' => 'https://via.placeholder.com/100?text=Манго',
    ],
];

// Отображение карточек товаров
foreach ($products as $product) {
    echo "<div class='product-card'>";
    echo "<img src='{$product['image']}' alt='{$product['name']}'>";
    echo "<h3>{$product['name']}</h3>";
    echo "<p>Цена: {$product['price']} руб.</p>";
    echo "</div>";
}
?>

</body>
</html>
