"use client";

import React, { useEffect, useState } from "react";
import styles from "./products.module.css";
import { supabase } from "@/lib/supabaseClient";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  image_url: string;
}

function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const adminNumber = "+2348036026669";
  console.log("Products: ", products);

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });
    console.log("Data", data);
    if (error) {
      console.error("Error fetching products:", error);
      return [];
    }

    return data;
  };

  useEffect(() => {
    const loadProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
      setLoading(false);
    };

    loadProducts();
  }, []);

  const handlePurchase = (product: Product) => {
    const message = `Hello Sandexlizzy, I want to buy the following product:\n\n🛒 *Product:* ${product.name}\n💰 *Price:* ₦${product.price}\n🖼 *Image:* ${product.image_url}\n\nPlease provide me with payment details.`;
    const whatsappUrl = `https://wa.me/${adminNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(amount);
  };
  return (
    <>
      <div className={styles.title}>
        <div className="wrapper">
          <p>Available products</p>
        </div>
      </div>

      <section className={styles.mainCont}>
        <div className="wrapper">
          <div className={styles.prodCont}>
            {loading ? (
              <p>Loading products...</p>
            ) : (
              products.map((product) => (
                <div key={product.id} className={styles.card}>
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className={styles.img}
                  />
                  <h3>{product.name}</h3>
                  <p className={styles.desc}>{product.description}</p>
                  <p className={styles.price}>
                    {formatCurrency(product.price)}
                  </p>
                  <button onClick={() => handlePurchase(product)}>
                    Buy on WhatsApp
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
