import { Card, CardSection, Button, Image, Text } from "@mantine/core";
import { Product } from "../models/Product";
import { Link } from "react-router";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  return (
    <>
      <Link to={`/products/${product.id}`} style={{ textDecoration: "none" }}>
        <Card
          key={product.id}
          shadow="sm"
          radius="md"
          withBorder
          style={{ height: "100%" }}
        >
          <CardSection>
            <Image
              src={product.imageURL}
              alt={product.title}
              height={350}
              style={{ padding: "10px" }}
            ></Image>
          </CardSection>

          <Text fw={600} mt="sm">
            {product.title}
          </Text>

          <Text size="sm" c="dimmed" mt={4} lineClamp={2}>
            {product.shortDescription}
          </Text>

          <Text fw={700} mt="sm">
            {product.price} kr
          </Text>

          <Button
            fullWidth
            mt="md"
            variant="light"
            style={{ marginTop: "auto" }}
          >
            Lägg till i varukorg
          </Button>
        </Card>
      </Link>
    </>
  );
};
