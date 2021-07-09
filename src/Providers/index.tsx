import { UserProvider } from "./user";
import { ProductsProvider } from "./products";
import { CartProvider } from "./cart";

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <ProductsProvider>
      <UserProvider>
        <CartProvider>{children}</CartProvider>
      </UserProvider>
    </ProductsProvider>
  );
};

export default Providers;
