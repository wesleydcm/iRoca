import ProductPageMobile from "./mobile";
import ProductPageDesktop from "./desktop";

const ProductPage = () => {

  return window.innerWidth < 900 ? (
    <ProductPageMobile />
  ) : (
    <ProductPageDesktop />
  );
};

export default ProductPage;
