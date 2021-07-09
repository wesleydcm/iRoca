import { UserProvider } from "./user";
import { ProductsProvider } from "./products";

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <ProductsProvider>
      <UserProvider>{children}</UserProvider>
    </ProductsProvider>
  );
};

export default Providers;
