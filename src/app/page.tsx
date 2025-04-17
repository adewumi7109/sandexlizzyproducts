import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Banner from "@/components/banner/Banner";
import Features from "@/components/features/Features";
import Products from "@/components/products/Products";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Features/>
    <Products/>
    <Footer/>
    </>
   
  );
}
