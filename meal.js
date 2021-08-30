const mealdb =()=>{
   const sid = document.getElementById('input-id');
   const searchText = sid.value;
   sid.value = '';
 
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    
    fetch(url)
    .then(res=>res.json())
    .then(data=>searchfood(data.meals))

}

  
const searchfood =(foods)=>{

    // const spinter = document.getElementById('spiner');
    // spinter.style.display='none'
    // spinter.style.display ="none"

     const divid = document.getElementById('card-images')
     divid.textContent =''



     foods.forEach(food =>{
          const div = document.createElement('div')
          div.classList.add('col-md-3')

          //console.log(food);
          div.innerHTML =  `
            <div class="card mt-3" onclick="foodDesc('${food.idMeal}')">
                <img src="${food.strMealThumb}" class="card-img-top" alt="..." heigth="100px" width ="100px">
                <div class="card-body">
                    <h5 class="card-title">${food.strMeal}</h5>
                    <p class="card-text">${food.strInstructions.slice(0,150)}</p>
                   
                </div>
            </div>
          
          `
          divid.appendChild(div);
     })
}

const foodDesc= details=>{
     const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${details}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>Datails(data.meals[0]))
}

const Datails =descriptions=>{
    const dt = document.getElementById('details');
        dt.textContent ='';
        const div = document.createElement('div')
        div.classList.add('card')
        div.innerHTML =`
                
                <img src="${descriptions.strMealThumb}" class="card-img-top mx-auto" alt="..." style="height:400px!important;width:400px">
                <div class="card-body">
                    <h5 class="card-title">${descriptions.strMeal}</h5>
                    <p class="card-text">${descriptions.strInstructions.slice(0,400)}</p>
                   <a href ="${descriptions.strYoutube}" class="btn btn-primary">See More</a>
                
                </div>
            
        `
        dt.appendChild(div)

}