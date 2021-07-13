import React from "react";
import {
  Container,
  NameAndCategory,
  Description,
  DescriptionPriceAndStock,
  Organic,
  PriceAndOrganic,
  Stock,
  Images,
  Send,
} from "./styles";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { NewProduct } from "../../@types";
import { createProductSchema } from "../../schemas/index";
import { useUser } from "../../Providers/user";
import { useHistory } from "react-router-dom";
import { WINDOW_SIZE_DESKTOP } from "../../utils/index";
import { useWindow } from "../../Providers/window";
import ProductSwitch from "../../Components/Switch";

interface Data {
  name: string;
  //category: string;
  description: string;
  price: number;
  qty: number;
  imageOne: string;
  imageTwo: string;
  imageThree: string;
  imageFour: string;
}

const CreateProductPage = () => {
  const { register, handleSubmit, reset, } = useForm({
    resolver: yupResolver(createProductSchema),
  });

  const history = useHistory();

  const { user, initController } = useUser();

  const [state, setState] = React.useState({
    checkedA: true,
  });

  const createProduct = (data: Data) => {
    const controller = initController();
    const newProduct: NewProduct = {
      userId: user.personalData.id,
      name: data.name,
      category: data.name,
      description: data.description,
      price: data.price,
      isOrganic: state.checkedA,
      qty: data.qty,
      images: [
        { url: data.imageOne },
        { url: data.imageTwo },
        { url: data.imageThree },
        { url: data.imageFour },
      ],
    };
    console.log(data)
    console.log(newProduct)
    controller.createProduct(user.token, newProduct);
    reset();
    history.push("/myaccount");
  };

  const { pageWidth } = useWindow();
  
 
  return (
    <Container>
      <h1>Cadastrar produto</h1>

      <form onSubmit={handleSubmit(createProduct)}>
        <NameAndCategory>
          <Input
            type="text"
            name="name"
            register={register}
            placeholder="Produto"
            data-testid="createProduct"
            color="green"
          />
          {/* <select
            {...register("category")}
            data-testid="createProduct"
            color="green"
          >
            <option>Categoria</option>
            <option value="fruits">Frutas</option>
            <option value="vegetables">Verduras</option>
            <option value="legumes">Legumes</option>
          </select> */}
        </NameAndCategory>

        <Description>
          <Input
            type="text"
            name="description"
            register={register}
            placeholder="Descrição"
            data-testid="createProduct"
            color="green"
          />
        </Description>

        <PriceAndOrganic>
          <Input
            type="number"
            name="price"
            register={register}
            placeholder="Preço por Kg"
            data-testid="createProduct"
            color="green"
          />
           {/* <div className="switch">
             <ProductSwitch state={state} setState={setState}/>
           </div> */}
        </PriceAndOrganic>

        <Stock>
          <Input
            type="number"
            name="qty"
            register={register}
            placeholder="Quantidade em estoque (Kg)"
            data-testid="createProduct"
            color="green"
          />
        </Stock>

        <Images>
          <h2>Imagens</h2>
          <Input
            type="name"
            name="imageOne"
            register={register}
            placeholder="Link da imagem"
            data-testid="createProduct"
            color="green"
          />
          <Input
            type="name"
            name="imageTwo"
            register={register}
            placeholder="Link da imagem"
            data-testid="createProduct"
            color="green"
          />
          <Input
            type="name"
            name="imageThree"
            register={register}
            placeholder="Link da imagem"
            data-testid="createProduct"
            color="green"
          />
          <Input
            type="name"
            name="imageFour"
            register={register}
            placeholder="Link da imagem"
            data-testid="createProduct"
            color="green"
          />
        </Images>

        <Send>
          <Button color="green" type="submit">
            Cadastrar
          </Button>
        </Send>
      </form>
    </Container>
  );
};

export default CreateProductPage;

/*
<Container>
      <h1>Cadastrar produto</h1>

      <form onSubmit={handleSubmit(createProduct)}>
        <NameAndCategory>
          <Input
            type="text"
            name="name"
            register={register}
            placeholder="Nome"
            data-testid="createProduct"
            color="green"
          />
          <select
            name="category"
            //register={register}
            data-testid="createProduct"
            color="green"
          >
            <option>Categoria</option>
            <option value="fruits">Frutas</option>
            <option value="vegetables">Verduras</option>
            <option value="legumes">Legumes</option>
          </select>
        </NameAndCategory>

        <DescriptionPriceAndStock>
          <Input
            type="text"
            name="description"
            register={register}
            placeholder="Descrição"
            data-testid="createProduct"
            color="green"
          />
          <div>
            <Input
                type="number"
                name="price"
                register={register}
                placeholder="Preço por Kg"
                data-testid="createProduct"
                color="green"
            />
            <Input
                type="number"
                name="qty"
                register={register}
                placeholder="Quantidade em estoque (Kg)"
                data-testid="createProduct"
                color="green"
            />
          </div>
        </DescriptionPriceAndStock>

        <Images>
          <h2>Imagens</h2>
          <Input
            type="name"
            name="url"
            register={register}
            placeholder="Link da imagem"
            data-testid="createProduct"
            color="green"
          />
          <Input
            type="name"
            name="url"
            register={register}
            placeholder="Link da imagem"
            data-testid="createProduct"
            color="green"
          />
          <Input
            type="name"
            name="url"
            register={register}
            placeholder="Link da imagem"
            data-testid="createProduct"
            color="green"
          />
          <Input
            type="name"
            name="url"
            register={register}
            placeholder="Link da imagem"
            data-testid="createProduct"
            color="green"
          />
        </Images>

        <Organic>
            <Input
            type="text"
            name="isOrganic"
            register={register}
            placeholder="Orgânico?"
            data-testid="createProduct"
            color="green"
            />
        </Organic>

        <Send>
          <Button color="green" type="submit">
            Cadastrar
          </Button>
        </Send>
      </form>
    </Container>;


*/
