import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import type { Product } from "../../models/Product";
import { getProduct, getProducts } from "../../service/productsApi";
import {
  Button,
  Center,
  Container,
  Grid,
  Text,
  Loader,
  Stack,
  Title,
  AspectRatio,
  Image,
} from "@mantine/core";
import { ProductCard } from "../../components/ProductCard";
import { Carousel } from "@mantine/carousel";
import { CartContext } from "../../contexts/CartContext";

export const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const { dispatch } = useContext(CartContext);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    setLoading(true);

    Promise.all([getProduct(id), getProducts()]).then(
      ([productData, productsData]) => {
        setProduct(productData ?? null);
        setProducts(productsData ?? []);
        setLoading(false);
      }
    );
  }, [id]);

  if (loading) {
    return (
      <Center mih="50vh">
        <Loader />
      </Center>
    );
  }

  if (!product) {
    return <p>Produkten hittades inte.</p>;
  }

  const otherProducts = products.filter((p) => p.id !== product.id);

  const shuffled = [...otherProducts].sort(() => Math.random() - 0.5);
  const recommended = shuffled.slice(0, 6);

  return (
    <Container size="md" py="xl">
      <Grid gutter="xl" align="flex-start">
        <Grid.Col span={{ base: 12, xs: 5 }}>
          <AspectRatio ratio={2 / 3}>
            <Image
              radius="md"
              src={product.imageURL}
              alt={product.title}
              fit="cover"
              style={{
                border: "1px solid lightgrey",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            />
          </AspectRatio>
        </Grid.Col>

        <Grid.Col span={{ base: 12, xs: 7 }}>
          <Stack gap="md">
            <Title order={2}>{product.title}</Title>

            <Text
              size="lg"
              fw={600}
              c="darkgreen"
              style={{ borderBottom: "1px solid grey", paddingBottom: "8px" }}
            >
              {product.price} kr
            </Text>

            <Text size="md" c="dimmed">
              {product.longDescription}
            </Text>

            <Button
              color="darkgreen"
              size="md"
              radius="md"
              style={{ width: "fit-content" }}
              onClick={() => {
                if (!product) return;
                dispatch({ type: "ADD_ITEM", payload: product });
              }}
            >
              Lägg i varukorgen
            </Button>
          </Stack>
        </Grid.Col>
      </Grid>

      {recommended.length > 0 && (
        <>
          <Title order={3} mt="xl" mb="sm">
            Fler verk du kanske gillar?
          </Title>

          <Carousel
            height="100%"
            type="container"
            slideSize={{ base: "100%", "300px": "50%", "500px": "33.333333%" }}
            slideGap={{ base: 0, "300px": "md", "500px": "lg" }}
            emblaOptions={{ loop: true, align: "start" }}
          >
            {recommended.map((p) => (
              <Carousel.Slide key={p.id}>
                <ProductCard product={p} />
              </Carousel.Slide>
            ))}
          </Carousel>
        </>
      )}
    </Container>
  );
};
