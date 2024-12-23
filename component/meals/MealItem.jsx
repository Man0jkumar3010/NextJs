import Link from 'next/link';
import Image from 'next/image';

import classes from './meal-item.module.css';

export default function MealItem({meals}) {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>̀̀
          <Image src={meals.image} alt={meals.title} fill />
        </div>
        <div className={classes.headerText}>
          <h2>{meals.title}</h2>
          <p>by {meals.creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{meals.summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${meals.slug}`}>View Details</Link>
        </div>
      </div>
    </article>


  );
}