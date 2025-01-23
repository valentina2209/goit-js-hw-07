// Отримуємо всі елементи категорій
const categories = document.querySelectorAll("#categories .item"); 

// Виводимо кількість категорій
console.log(`Number of categories: ${categories.length}`); 

// Обробляємо кожну категорію
categories.forEach((category) => {
    
    // Знаходимо заголовок категорії
    const title = category.querySelector("h2").textContent;

    // Знаходимо кількість елементів у категорії
    const itemsCount = category.querySelectorAll("ul li").length;

     // Виводимо результат у консоль
    console.log(`Category: ${title}`);
    console.log(`Elements: ${itemsCount}`);
});
