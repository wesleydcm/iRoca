import { Container, Form, Box, DeleteButton } from "./styles";
import Input from "../../../components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editProfileSchema } from "../../../schemas";
import { IProduct, IProductUpdate } from "../../../@types";
import Button from "../../../components/Button";
import { useUser } from "../../../providers/user";
import { useCallback, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import Loading from "../../../components/Loading";

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
const UpdateProductDesktop = () => {
  const param: Params = useParams();
  const history = useHistory();
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(editProfileSchema),
  });
  const { initController, user } = useUser();
  const { token, personalData } = user;
  const controller = initController();

  const [editProduct, setEditProducts] = useState<IProduct | undefined>(
    undefined
  );

  const funcCallBack = useCallback(async () => {
    controller.getProduct(Number(param.id)).then((response) => {
      setEditProducts(response);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      category: data.category,
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
  const handleDelectProduct = () => {
    controller
      .deleteProduct(Number(param.id), token)
      .then(() => history.push(`/profile/${personalData.id}`));
  };

  if (editProduct !== undefined) {
    const { name, category, price, description, images, qty } = editProduct;
    return (
      <Container>
        <h1>
          Editar Produto <FaEdit />
        </h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Box>
            <h2>Informações do Produto</h2>
            <div className="box1">
              <div className="boxName">
                <label htmlFor="name">Nome do produto:</label>
                <Input
                  type="text"
                  placeholder="Nome produto"
                  defaultValue={name ? name : ""}
                  register={register}
                  name="name"
                />
              </div>
              <div className="boxDescription">
                <label htmlFor="description">Descrição do produto:</label>
                <textarea
                  id="description"
                  placeholder="Descrição"
                  {...register("description")}
                  defaultValue={description ? description : ""}
                />
              </div>
            </div>
            <div className="box2">
              <div className="boxCategory">
                <label htmlFor="category">Categoria:</label>
                <select
                  placeholder="Categoria?"
                  {...register("category")}
                  defaultValue={category ? category : ""}
                  id="category"
                >
                  <option value="frutas">Frutas</option>
                  <option value="verduras">Verduras</option>
                  <option value="legumes">Legumes</option>
                </select>
              </div>
              <div className="boxPrice">
                <label htmlFor="name">Preço R$/kg:</label>
                <Input
                  type="number"
                  placeholder="Preço R$/kg?"
                  register={register}
                  defaultValue={price.toString() ? price.toString() : ""}
                  name="price"
                />
              </div>
              <div className="boxStock">
                <label htmlFor="name">Quantidade em estoque (kg):</label>
                <Input
                  type="number"
                  placeholder="Quantidade em estoque (kg)"
                  defaultValue={qty.toString() ? qty.toString() : "0"}
                  register={register}
                  name="qty"
                />
              </div>
            </div>

            <h2>Imagens (jpg, png)</h2>

            <div className="boxLink">
              <label htmlFor="imageOne">Imagem 1:</label>
              <Input
                type="text"
                placeholder="link url imagem 1"
                defaultValue={
                  images[0] ? (images[0].url ? images[0].url : "") : ""
                }
                register={register}
                name="imageOne"
              />
            </div>
            <div className="boxLink">
              <label htmlFor="imageTwo">Imagem 2:</label>
              <Input
                type="text"
                placeholder="link url imagem 2"
                defaultValue={
                  images[1] ? (images[1].url ? images[1].url : "") : ""
                }
                register={register}
                name="imageTwo"
              />
            </div>
            <div className="boxLink">
              <label htmlFor="imageThree">Imagem 3:</label>
              <Input
                type="text"
                placeholder="link url imagem 3"
                defaultValue={
                  images[2] ? (images[2].url ? images[2].url : "") : ""
                }
                register={register}
                name="imageThree"
              />
            </div>
            <div className="boxLink">
              <label htmlFor="imageFour">Imagem 4:</label>
              <Input
                type="text"
                placeholder="link url imagem 4"
                defaultValue={
                  images[3] ? (images[3].url ? images[3].url : "") : ""
                }
                register={register}
                name="imageFour"
              />
            </div>
          </Box>
          <Button type="submit" color="green">
            Salvar
          </Button>
        </Form>
        <div className="divDelete">
          <DeleteButton onClick={() => handleDelectProduct()}>
            Excluir
          </DeleteButton>
        </div>
      </Container>
    );
  }
  return (
    <Container>
      <Loading size={100} />
    </Container>
  );
};

export default UpdateProductDesktop;
