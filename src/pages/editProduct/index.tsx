import UpdateProductMobile from "./mobile";
import UpdateProductDesktop from "./desktop";

const UpdateProduct = () => {
  return (
    <>
      {window.innerWidth < 899 ? (
        <UpdateProductMobile />
      ) : (
        <UpdateProductDesktop />
      )}
    </>
  );
};

export default UpdateProduct;
