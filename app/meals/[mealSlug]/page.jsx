
import classes from "@/app/meals/[mealSlug]/page.module.css";
import { getMeal } from "@/lib/meals";
import Image from "next/image";
import { notFound } from "next/navigation";


export async function generateMetadata({params}){
    const meal = await getMeal(params.mealSlug);
    console.log("MetaData ==>",meal);
    
    if(!meal){
      notFound()
    }
    return{
      title: meal.title,
      description: meal.summary
    }
}

export default async function MealsDetailsPage({params}) {
  const meal = await getMeal(params.mealSlug);
  console.log("Details Meal ===>",meal);
  
  meal.instructions = meal.instructions.replace(/\n/g,'<br/>')

  if(!meal){
      notFound()
  }
  
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} priority fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto: ${meal.creator_email}`}>{meal.creator_email}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p className={classes.instructions} dangerouslySetInnerHTML={{__html:meal.instructions}}></p>
      </main>
    </>
  );
}
