import {GoalsElements} from './_createGoals.js';


document.addEventListener('click', function(event) {
  event.preventDefault();
  
  if(!event.target.matches('.listCategoryButton a.categoryButton')) return;
  
  let activeCategory = document.querySelector('.listCategoryButton a.categoryButton.active');
  activeCategory.classList.remove('active');
  event.target.classList.add('active');
  
  let goalsList = JSON.parse(localStorage.getItem("myGoals"));
  
  let card = new GoalsElements();
  let responseArray = card.filter(event.target.getAttribute('data-value'), goalsList.myGoals);
  let response = card.list(responseArray);
  let listGoals = document.querySelector('.listGoals');
  listGoals.innerHTML = ''; 
  listGoals.innerHTML = response;
});
