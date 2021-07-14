import { Container, Form, Box } from "./styles";
import Input from "../../../components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editProfileSchema } from "../../../schemas";
import { IProduct, IProductUpdate } from "../../../@types";
import Button from "../../../components/Button";
import { useUser } from "../../../providers/user";
import { EDIT_PRODUCT_LOCALSTORAGE_FLAG } from "../../../utils";
import { useEffect, useState } from "react";
import { priceFormatter } from "../../../utils/";
import { useParams } from "react-router-dom";
interface Params {
  id: string;
}
const UpdateProductMobile = () => {
  const param: Params = useParams();
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(editProfileSchema),
  });
  const { initController, user } = useUser();
  const { token } = user;
  const controller = initController();
  const haveProductEdit = localStorage.getItem(EDIT_PRODUCT_LOCALSTORAGE_FLAG);
  const defaultProduct: IProduct =
    haveProductEdit === null ? null : JSON.parse(haveProductEdit);

  const [editProduct, setEditProducts] = useState<IProduct>({} as IProduct);

  useEffect(() => {
    const controller = initController();

    controller
      .getProduct(Number(param.id) | Number(defaultProduct))
      .then((response) => setEditProducts(response));

    // eslint-disable-next-line
  }, []);

  const onSubmit = (data: IProductUpdate) => {
    console.log(data);

    /* const productData = {
      name: data.name,
      description: data.description,
      price: data.price,
      qty: data.qty,
      images: data.images,
      evaluations: data.evaluations,
    };

    controller.updateProduct(Number(defaultProduct), productData, token); */
  };

  const { name, price, description, images, qty } = editProduct;
  return (
    <Container>
      <h1>Editar Produto</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <h2>Informações Pessoais</h2>
          <Input
            type="text"
            placeholder="Nome produto"
            defaultValue={name ? name : ""}
            register={register}
            name="name"
          />
          <Input
            type="text"
            placeholder="Descrição"
            register={register}
            defaultValue={description ? description : ""}
            name="description"
          />
          <Input
            type="number"
            placeholder="Preço R$/kg?"
            register={register}
            defaultValue={priceFormatter(price) ? priceFormatter(price) : ""}
            name="price"
          />
          <Input
            type="number"
            placeholder="Quantidade em estoque (kg)"
            defaultValue={priceFormatter(qty)}
            register={register}
            name="qty"
          />
          {console.log(images)}
        </Box>
        <Box>
          <h2>Imagens</h2>

          <Input
            type="text"
            placeholder="link url imagem 1"
            /* defaultValue={} */
            register={register}
            name="url"
          />
          <Input
            type="text"
            placeholder="link url imagem 2"
            /* defaultValue={images[0].url && images[0].url} */
            register={register}
            name="url"
          />
          <Input
            type="text"
            placeholder="link url imagem 3"
            /* defaultValue={images[0].url && images[0].url} */
            register={register}
            name="url"
          />
          <Input
            type="text"
            placeholder="link url imagem 4"
            /* defaultValue={images[0].url ? images[0].url : ""} */
            register={register}
            name="url"
          />
        </Box>
        <Button type="submit" color="green">
          Salvar
        </Button>
      </Form>
    </Container>
  );
};

export default UpdateProductMobile;
