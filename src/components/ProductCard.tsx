import {
  Card,
  CardSection,
  Button,
  Image,
  Text,
  Group,
  AspectRatio,
} from "@mantine/core";
import { Product } from "../models/Product";
import { Link } from "react-router";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  const { dispatch } = useContext(CartContext);

  return (
    <Card
      shadow="sm"
      radius="md"
      withBorder
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Link
        to={`/products/${product.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <CardSection>
          <AspectRatio ratio={2 / 3}>
            <Image
              src={product.imageURL}
              alt={product.title}
              fit="cover"
              style={{ padding: "10px" }}
            />
          </AspectRatio>
        </CardSection>

        <Group
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginTop: "auto",
            width: "100%",
            marginBottom: "20px",
          }}
        >
          <Text fw={600} mt="sm">
            {product.title}
          </Text>
          <Text size="sm" c="dimmed" lineClamp={2}>
            {product.shortDescription}
          </Text>
          <Text fw={700} mt="sm">
            {product.price} kr
          </Text>
        </Group>
      </Link>

      <Button
        fullWidth
        mt="auto"
        variant="light"
        onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}
      >
        Köp print{" "}
      </Button>
    </Card>
  );
};
