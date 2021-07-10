import { UserProvider } from "./user";
import { ProductsProvider } from "./products";
import { CartProvider } from "./cart";
import { WindowProvider } from "./window";

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <WindowProvider>
      <ProductsProvider>
        <UserProvider>
          <CartProvider>{children}</CartProvider>
        </UserProvider>
      </ProductsProvider>
    </WindowProvider>
  );
};

export default Providers;
