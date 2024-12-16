import MealItem from './MealItem'
import classes from './meals-grid.module.css'

export default function MealsGrid({meals}){
    console.log("Mealsgrid ===>",meals);
    
    return(
        <ul className={classes.meals}>
            {meals.map(meal => <li key={meal.id} >
                <MealItem  meals = {meal} />
            </li>)}
        </ul>
    )
}