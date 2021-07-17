import ProductPageMobile from "./mobile";
import ProductPageDesktop from "./desktop";

const ProductPageComponent = () => {

  return window.innerWidth < 900 ? (
    <ProductPageMobile />
  ) : (
    <ProductPageDesktop />
  );
};

export default ProductPageComponent;
