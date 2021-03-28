const searchButton= document.getElementById('search-button').addEventListener(click,function(){
    const search = document.getElementById('search');
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search.value}`
    fetch(url)
    .then(res => res.json())
    .then(data => showItems(data))
});





const showItems = food => {
    let allMeals = document.getElementById("allMeals")
    const meal = food.meals;
    let meals = meal[0];

    const mealInfo = `
        <div>
        <img src="${meals.strMealThumb}">
        <h4>${meals.strMeal}</h4>
        </div>
    `

    allMeals.innerHTML = mealInfo;
    // console.log(meals);
}