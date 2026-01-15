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

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });
    
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
      <div className={styles.header}>
        <div className="wrapper">
          <div className={styles.headerContent}>
            <h2 className={styles.headerTitle}>Our Products</h2>
            <p className={styles.headerSubtitle}>
              Discover our curated collection of quality items
            </p>
          </div>
        </div>
      </div>

      <section className={styles.mainSection}>
        <div className="wrapper">
          {loading ? (
            <div className={styles.loadingContainer}>
              <div className={styles.loadingSpinner}></div>
              <p className={styles.loadingText}>Loading products...</p>
            </div>
          ) : products.length === 0 ? (
            <div className={styles.emptyState}>
              <svg className={styles.emptyIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              <h3 className={styles.emptyTitle}>No products available</h3>
              <p className={styles.emptyText}>Check back soon for new items</p>
            </div>
          ) : (
            <div className={styles.productsGrid}>
              {products.map((product) => (
                <div key={product.id} className={styles.productCard}>
                  <div className={styles.imageWrapper}>
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className={styles.productImage}
                    />
                    <div className={styles.imageOverlay}></div>
                  </div>
                  
                  <div className={styles.cardContent}>
                    <h3 className={styles.productName}>{product.name}</h3>
                    <p className={styles.productDescription}>{product.description}</p>
                    
                    <div className={styles.cardFooter}>
                      <div className={styles.priceWrapper}>
                        <span className={styles.priceLabel}>Price</span>
                        <span className={styles.productPrice}>
                          {formatCurrency(product.price)}
                        </span>
                      </div>
                      
                      <button 
                        onClick={() => handlePurchase(product)}
                        className={styles.purchaseButton}
                      >
                        <svg className={styles.buttonIcon} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        Buy on WhatsApp
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Products;