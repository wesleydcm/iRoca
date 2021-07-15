import { Container, Form, Box } from "./styles";
import Input from "../../../components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editProfileSchema } from "../../../schemas";
import { IProduct, IProductUpdate } from "../../../@types";
import Button from "../../../components/Button";
import { useUser } from "../../../providers/user";
import { useCallback, useEffect, useState } from "react";
import { priceFormatter } from "../../../utils/";
import { useHistory, useParams } from "react-router-dom";
import Loading from "../../../components/Loading";
import { toast } from "react-toastify";
import { FaEdit } from "react-icons/fa";

interface Params {
  id: string;
}

interface Data {
  name: string;
  category: string;
  description: string;
  price: number;
  qty: number;
  imageOne: string;
  imageTwo: string;
  imageThree: string;
  imageFour: string;
}
const UpdateProductMobile = () => {
  const param: Params = useParams();
  const history = useHistory();
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(editProfileSchema),
  });
  const { initController, user } = useUser();
  const { token } = user;
  const controller = initController();

  const [editProduct, setEditProducts] = useState<IProduct | undefined>(
    undefined
  );

  const funcCallBack = useCallback(async () => {
    controller.getProduct(Number(param.id)).then((response) => {
      setEditProducts(response);
    });
  }, []);

  useEffect(() => {
    funcCallBack();
  }, [funcCallBack]);

  useEffect(() => {
    console.log(editProduct);
  }, [editProduct]);

  const onSubmit = (data: Data) => {
    const productData: IProductUpdate = {
      name: data.name,
      description: data.description,
      price: data.price,
      qty: data.qty,
      images: [
        { url: data.imageOne },
        { url: data.imageTwo },
        { url: data.imageThree },
        { url: data.imageFour },
      ],
    };
    controller
      .updateProduct(Number(param.id), productData, token)
      .then(() => history.push(`/product/${Number(param.id)}`));
  };

  if (editProduct !== undefined) {
    const { name, price, description, images, qty } = editProduct;
    return (
      <Container>
        <h1>
          Editar Produto <FaEdit />
        </h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Box>
            <h2>Informações do produto</h2>
            <label htmlFor="name">Nome do produto:</label>
            <Input
              type="text"
              placeholder="Nome produto"
              defaultValue={name ? name : ""}
              register={register}
              name="name"
            />
            <label htmlFor="description">Descrição do produto:</label>
            <textarea
              id="description"
              placeholder="Descrição"
              {...register("description")}
              name="description"
              typeof="text"
              defaultValue={description ? description : ""}
            />
            <label htmlFor="name">Preço R$/kg:</label>
            <Input
              type="number"
              placeholder="Preço R$/kg"
              register={register}
              defaultValue={price.toString() ? price.toString() : ""}
              name="price"
            />
            <label htmlFor="name">Quantidade em estoque (kg):</label>
            <Input
              type="number"
              placeholder="Quantidade em estoque (kg)"
              defaultValue={qty.toString() ? qty.toString() : "0"}
              register={register}
              name="qty"
            />
          </Box>
          <Box>
            <h2>Imagens</h2>
            <label htmlFor="imageOne">Link imagem 1:</label>
            <Input
              type="text"
              placeholder="link url imagem 1"
              defaultValue={
                images[0] ? (images[0].url ? images[0].url : "") : ""
              }
              register={register}
              name="imageOne"
            />
            <label htmlFor="imageTwo">Link imagem 2:</label>
            <Input
              type="text"
              placeholder="link url imagem 2"
              defaultValue={
                images[1] ? (images[1].url ? images[1].url : "") : ""
              }
              register={register}
              name="imageTwo"
            />
            <label htmlFor="imageThree">Link imagem 3:</label>
            <Input
              type="text"
              placeholder="link url imagem 3"
              defaultValue={
                images[2] ? (images[2].url ? images[2].url : "") : ""
              }
              register={register}
              name="imageThree"
            />
            <label htmlFor="imageFour">Link imagem 4:</label>
            <Input
              type="text"
              placeholder="link imagem 4"
              defaultValue={
                images[3] ? (images[3].url ? images[3].url : "") : ""
              }
              register={register}
              name="imageFour"
            />
          </Box>
          <Button type="submit" color="green">
            Salvar
          </Button>
        </Form>
      </Container>
    );
  }
  return (
    <Container>
      <Loading size={100} />
    </Container>
  );
};

export default UpdateProductMobile;
