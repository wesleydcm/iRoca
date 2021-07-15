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
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { NewProduct } from "../../@types";
import { createProductSchema } from "../../schemas/index";
import { useUser } from "../../providers/user";
import { Link, useHistory } from "react-router-dom";
import { WINDOW_SIZE_DESKTOP } from "../../utils/index";
import { useWindow } from "../../providers/window";
import ProductSwitch from "../../components/Switch";
import { ReactComponent as ArrowToBack } from "../../assets/images-mobile/arrow-to-back.svg";

interface Data {
  name: string;
  category: string;
  description: string;
  price: string;
  qty: string;
  imageOne: string;
  imageTwo: string;
  imageThree: string;
  imageFour: string;
}

const CreateProductPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
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
      category: data.category,
      description: data.description,
      price: Number(data.price),
      isOrganic: state.checkedA,
      qty: Number(data.qty),
      images: [
        { url: data.imageOne },
        { url: data.imageTwo },
        { url: data.imageThree },
        { url: data.imageFour },
      ],
      evaluations: [],
    };

    const hasImage = newProduct.images.find((image) => image.url !== "");

    if (hasImage === undefined) {
      if (newProduct.category === "frutas") {
        newProduct.images = [{
          url: "https://i.imgur.com/mpSdjxN.png",
        }];
      }
      if (newProduct.category === "vegetais") {
        newProduct.images = [{
          url: "https://i.imgur.com/ePV8RUi.png",
        }];
      }
      if (newProduct.category === "legumes") {
        newProduct.images = [{
          url: "https://i.imgur.com/dajV9Qi.png",
        }];
      }
    }
    controller.createProduct(user.token, newProduct);
    reset();
    history.push("/myaccount");
  };

  const { pageWidth } = useWindow();

  if (pageWidth < WINDOW_SIZE_DESKTOP) {
    return (
      <Container>
        <h1>Cadastrar produto</h1>

        <form onSubmit={handleSubmit(createProduct)}>
          <NameAndCategory>
            <div className="error">
              <span>{errors.name?.message}</span>
              <Input
                type="text"
                name="name"
                register={register}
                placeholder="Produto"
                data-testid="createProduct"
                color="green"
              />
            </div>
            <select
              {...register("category")}
              data-testid="createProduct"
              color="green"
            >
              <option value="frutas">Frutas</option>
              <option value="verduras">Verduras</option>
              <option value="legumes">Legumes</option>
            </select>
          </NameAndCategory>

          <Description>
            <div className="error">
              <span>{errors.description?.message}</span>
              <Input
                type="text"
                name="description"
                register={register}
                placeholder="Descrição"
                data-testid="createProduct"
                color="green"
              />
            </div>
          </Description>

          <PriceAndOrganic>
            <div className="error">
              <span>{errors.price?.message}</span>
              <Input
                type="number"
                name="price"
                register={register}
                placeholder="Preço por Kg"
                data-testid="createProduct"
                color="green"
              />
            </div>
            <div className="switch">
              <ProductSwitch state={state} setState={setState} />
            </div>
          </PriceAndOrganic>

          <Stock>
            <div className="error">
              <span>{errors.qty?.message}</span>
              <Input
                type="number"
                name="qty"
                register={register}
                placeholder="Quantidade em estoque (Kg)"
                data-testid="createProduct"
                color="green"
              />
            </div>
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
  } else {
    return (
      <Container>
        <div className="arrowToBack">
          <h1>Cadastrar produto</h1>
          <Link className="link" to="/myaccount">
              <ArrowToBack />
          </Link>
        </div>
        <form onSubmit={handleSubmit(createProduct)}>
          <NameAndCategory>
            <div className="error">
              <p>Produto</p>
              <span>{errors.name?.message}</span>
              <Input
                type="text"
                name="name"
                register={register}
                placeholder=""
                data-testid="createProduct"
                color="green"
              />
            </div>
            <div className="error">
              <p>Categoria</p>
              <span>{errors.category?.message}</span>
              <select
                {...register("category")}
                data-testid="createProduct"
                color="green"
              >
                <option value="frutas">Frutas</option>
                <option value="verduras">Verduras</option>
                <option value="legumes">Legumes</option>
              </select>
            </div>
          </NameAndCategory>

          <DescriptionPriceAndStock>
            <div className="description">
              <div className="error">
                <p>Descrição</p>
                <span>{errors.description?.message}</span>
                <Input
                  type="text"
                  name="description"
                  register={register}
                  placeholder=""
                  data-testid="createProduct"
                  color="green"
                />
              </div>
            </div>
            <div className="price-and-qty">
              <div className="error">
                <p>Preço por Kg</p>
                <span>{errors.price?.message}</span>
                <Input
                  type="number"
                  name="price"
                  register={register}
                  placeholder=""
                  data-testid="createProduct"
                  color="green"
                />
              </div>
              <div className="error">
                <p>Quantidade em estoque (Kg)</p>
                <span>{errors.qty?.message}</span>
                <Input
                  type="number"
                  name="qty"
                  register={register}
                  placeholder=""
                  data-testid="createProduct"
                  color="green"
                />
              </div>
            </div>
          </DescriptionPriceAndStock>

          <h2>Imagens</h2>
          <Images>
            <div className="img">
              <div className="error">
                <p>Link</p>
                <Input
                  type="name"
                  name="imageOne"
                  register={register}
                  placeholder=""
                  data-testid="createProduct"
                  color="green"
                />
              </div>
              <div className="error">
                <p>Link</p>
                <Input
                  type="name"
                  name="imageTwo"
                  register={register}
                  placeholder=""
                  data-testid="createProduct"
                  color="green"
                />
              </div>
            </div>
            <div className="img">
              <div className="error">
                <p>Link</p>
                <Input
                  type="name"
                  name="imageThree"
                  register={register}
                  placeholder=""
                  data-testid="createProduct"
                  color="green"
                />
              </div>
              <div className="error">
                <p>Link</p>
                <Input
                  type="name"
                  name="imageFour"
                  register={register}
                  placeholder=""
                  data-testid="createProduct"
                  color="green"
                />
              </div>
            </div>
          </Images>

          <Organic>
            <div className="switch">
              <ProductSwitch state={state} setState={setState} />
            </div>
          </Organic>

          <Send>
            <Button color="green" type="submit">
              Cadastrar
            </Button>
          </Send>
        </form>
      </Container>
    );
  }
};

export default CreateProductPage;
