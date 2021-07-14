import { useEffect } from "react";
import { createContext, ReactNode, useContext, useState } from "react";
import { IProduct, ICartContext } from "../../@types";
import { CART_LOCALSTORAGE_FLAG } from "../../utils";

interface Props {
  children: ReactNode;
}

const cartCTX = createContext({} as ICartContext);

export const CartProvider = ({ children }: Props) => {
  const haveCart = localStorage.getItem(CART_LOCALSTORAGE_FLAG);

  const defaultValue: IProduct[] =
    haveCart === null ? ([] as IProduct[]) : JSON.parse(haveCart);

  const [cart, setCart] = useState<IProduct[]>([{
    "name": "Morango Almofadinha",
    "category": "frutas",
    "description": "Aenean aliquam molestie leo, vitae iaculis nisl. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.",
    "userId": 2,
    "price": 19.99,
    "isOrganic": false,
    "qty": 2,
    "images": [
      {
        "url": "https://artesanato.culturamix.com/blog/wp-content/gallery/almofada-em-forma-de-morango2/thumbs/thumbs_almofada-em-forma-de-morango-6.jpg"
      },
      {
        "url": "https://www.imagem2.com.br.jpg"
      },
      {
        "url": "https://www.imagem3.com.br.jpg"
      },
      {
        "url": "https://www.imagem4.com.br.jpg"
      },
      {
        "url": "https://www.imagem5.com.br.jpg"
      }
    ],
    "evaluations": [
      {
        "userId": 1243456356,
        "evaluatorId": 1,
        "date": "asdfasd",
        "grade": 4,
        "feedback": "asdasd"
      },
      {
        "userId": 1243456356,
        "evaluatorId": 1,
        "date": "asdfasd",
        "grade": 4,
        "feedback": "asdasd"
      }
    ],
    "id": 1
  },
  {
    "name": "Morango Azul",
    "category": "frutas",
    "description": "Mussum Ipsum, cacilds vidis litro abertis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!",
    "userId": 2,
    "price": 29.99,
    "isOrganic": false,
    "qty": 10,
    "images": [
      {
        "url": "http://mlb-s2-p.mlstatic.com/10-sementes-de-morango-azul-frete-gratis-6730-MLB5107576058_092013-F.jpg"
      }
    ],
    "evaluations": [
      {
        "userId": 1243456356,
        "evaluatorId": 1,
        "date": "asdfasd",
        "grade": 4,
        "feedback": "asdasd"
      },
      {
        "userId": 1243456356,
        "evaluatorId": 1,
        "date": "asdfasd",
        "grade": 4,
        "feedback": "asdasd"
      },
      {
        "userId": 1243456356,
        "evaluatorId": 1,
        "date": "asdfasd",
        "grade": 4,
        "feedback": "asdasd"
      },
      {
        "userId": 1243456356,
        "evaluatorId": 1,
        "date": "asdfasd",
        "grade": 4,
        "feedback": "asdasd"
      },
      {
        "userId": 1243456356,
        "evaluatorId": 1,
        "date": "asdfasd",
        "grade": 4,
        "feedback": "asdasd"
      }
    ],
    "id": 2
  },]);

  useEffect(() => {
    if (cart.length !== 0) {
      localStorage.setItem(CART_LOCALSTORAGE_FLAG, JSON.stringify(cart));
    }
  }, [cart]);

  return (
    <cartCTX.Provider value={{ cart, setCart }}>{children}</cartCTX.Provider>
  );
};

export const useCart = () => useContext(cartCTX);
