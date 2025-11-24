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

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  return (
    <Link to={`/products/${product.id}`} style={{ textDecoration: "none" }}>
      <Card
        shadow="sm"
        radius="md"
        withBorder
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: 480,
        }}
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
          }}
        >
          <Text fw={600} mt="sm">
            {product.title}
          </Text>
          <Text size="sm" c="dimmed" mt={4} lineClamp={2}>
            {product.shortDescription}
          </Text>
          <Text fw={700} mt="sm">
            {product.price} kr
          </Text>
          <Button fullWidth mt="md" variant="light">
            Lägg till i varukorg
          </Button>
        </Group>
      </Card>
    </Link>
  );
};
