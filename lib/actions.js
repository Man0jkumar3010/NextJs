"use server";

import { redirect } from "next/navigation";
import { storeMeal } from "./meals";
import { revalidatePath } from "next/cache";

export async function shareMeal(prevData, formData) {
  function isInvalidText(text) {
    return !text || text.trim() === "";
  }

  console.log("formData ===>", formData);

  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image
  ) {
    console.log("Invalid input");
    return {
      message: "Invalid Input",
    };
  }
  

  await storeMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
}
