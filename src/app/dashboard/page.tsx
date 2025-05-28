"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { supabase } from "@/lib/supabaseClient";
import styles from "./page.module.css";

interface FormData {
  name: string;
  description: string;
  price: number;
  image: FileList;
}

export default function Page() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const [uploading, setUploading] = useState(false);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setUploading(true);

    try {
      let imageUrl: string | null = null;

      if (data.image.length > 0) {
        const file = data.image[0];
        const filePath = `products/${Date.now()}-${file.name}`;
        const { data: imageData, error: imageError } = await supabase.storage
          .from("product-images")
          .upload(filePath, file);

        if (imageError) throw imageError;

        imageUrl = supabase.storage.from("product-images").getPublicUrl(filePath).data.publicUrl;
      }

      const { error } = await supabase.from("products").insert([
        {
          name: data.name,
          description: data.description,
          price: data.price,
          image_url: imageUrl,
        },
      ]);

      if (error) throw error;

      alert("Product uploaded successfully!");
      reset();
    } catch (error) {
      alert((error as Error).message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
        <h1 className={styles.title}>Upload Product</h1>
      <input
        type="text"
        placeholder="Product Name"
        {...register("name", { required: "Product name is required", minLength: { value: 3, message: "Minimum 3 characters" } })}
        className={styles.input}
      />
      {errors.name && <p className={styles.error}>{errors.name.message}</p>}

      <textarea
        placeholder="Description"
        {...register("description", { required: "Description is required", minLength: { value: 10, message: "Minimum 10 characters" } })}
        className={styles.textarea}
      />
      {errors.description && <p className={styles.error}>{errors.description.message}</p>}

      <input
        type="number"
        placeholder="Price"
        {...register("price", {
          required: "Price is required",
          valueAsNumber: true,
          min: { value: 1, message: "Price must be at least 1" },
        })}
        className={styles.input}
      />
      {errors.price && <p className={styles.error}>{errors.price.message}</p>}

      <input type="file" accept="image/*" {...register("image", { required: "Product image is required" })} className={styles.fileInput} />
      {errors.image && <p className={styles.error}>{errors.image.message}</p>}

      <button type="submit" disabled={uploading} className={styles.button}>
        {uploading ? "Uploading..." : "Upload Product"}
      </button>
    </form>
  );
}
