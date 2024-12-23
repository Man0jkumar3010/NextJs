import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // throw new Error("Oops Something Wrong !"876
  db.prepare("DELETE FROM meals WHERE id = ?").run(15);
  return db.prepare("SELECT * FROM meals").all();
}

export async function getMeal(slug) {
  return await db.prepare("SELECT * FROM meals WHERE slug =?").get(slug);
}

export async function storeMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.xss = xss(meal.instructions);
  const extension = meal.image.name.split(".").pop();
  console.log("Extension ===> ", extension);

  const fileName = `${meal.slug}.${extension}`;
  console.log("FileName ====> ", fileName);

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new error("Saving image failed");
    }
  });
 meal.image = `/images/${fileName}`;

  db.prepare(`
  INSERT INTO meals
  (title,summary,instructions,creator,creator_email,image,slug)
  Values (
    @title,
    @summary,
    @instructions,
    @creator,
    @creator_email,
    @image, 
    @slug
  )
  `).run(meal);
}
