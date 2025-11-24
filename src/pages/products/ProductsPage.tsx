import { useEffect, useState } from "react";
import { Product } from "../../models/Product";
import { getProducts } from "../../service/productsApi";
import classes from "./products.module.css";
import {
  Center,
  Container,
  Loader,
  SimpleGrid,
  Title,
  Text,
  Overlay,
} from "@mantine/core";
import { ProductCard } from "../../components/ProductCard";

export const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  if (loading) {
    return (
      <Center mih={"50vh"}>
        <Loader />
      </Center>
    );
  }

  return (
    <Container>
      <div className={classes.wrapper}>
        <Overlay color="#000" opacity={0.65} zIndex={1} />

        <div className={classes.inner}>
          <Title className={classes.title}>bla bla bla</Title>

          <Container size={640}>
            <Text size="lg" className={classes.description}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
              sint reiciendis iure excepturi cum eveniet, ut temporibus numquam
              nesciunt, dolorem odio quaerat possimus?
            </Text>
          </Container>
        </div>
      </div>

      <SimpleGrid cols={{ base: 1, xs: 2, sm: 2, md: 3 }} spacing="lg">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </Container>
  );
};
