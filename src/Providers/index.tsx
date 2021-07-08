import { UserProvider } from "./user";

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  return <UserProvider>{children}</UserProvider>;
};

export default Providers;
