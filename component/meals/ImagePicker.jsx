"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const imageUpload = useRef();
  const handleImageUpload = () => {
    imageUpload.current.click();
  };

  const handlePreview = (e) => {
    const file = e.target.files[0];
    console.log(file);

    if (!file) {
      selectedImage(null);
      return;
    }

    const fileReader = new FileReader();
    console.log(fileReader);

    fileReader.readAsDataURL(file);
    console.log("FileReader ===>", fileReader);

    fileReader.onload = () => {
      setSelectedImage(fileReader.result);
    };
  //  setSelectedImage(null)
  };

  return (
    <div className={classes.picker}>
      <label htmlFor="image">{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!selectedImage && <p>Select image</p>}
          {selectedImage && (
            <Image
              src={selectedImage}
              alt="Image is selected by user"
              fill
              priority
            />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id="image"
          accept="image/png ,image.jpeg"
          name={name}
          ref={imageUpload}
          onChange={handlePreview}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handleImageUpload}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
