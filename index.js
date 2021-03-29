

const clickForSearch = () => {
    const search = document.getElementById('search').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res => res.json())
    .then(data => showMeals(data.meals))
    
}

const showMeals = meal => {
    const allMeals = document.getElementById('allMeals');
    meal.forEach(x =>{
        console.log(x);
        const div = document.createElement('div');
        div.innerHTML=`
            <img src="${x.strMealThumb}">
            <h2>${x.strMeal}</h2>
        `
        allMeals.appendChild(div);
    })
}














