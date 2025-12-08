// src/pages/CartPage.tsx
import { useContext } from "react";
import {
  Button,
  Card,
  Container,
  Group,
  Stack,
  Text,
  Title,
  Image,
  Divider,
} from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { Link } from "react-router";
import { CartContext } from "../contexts/CartContext";

export const CartPage = () => {
  const { cart, dispatch } = useContext(CartContext);

  const items = cart.items;

  const totalPrice = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <Container size="md" py="xl">
        <Stack gap="md">
          <Title order={1}>Varukorg</Title>

          <Text>Din varukorg är tom just nu.</Text>

          <Button component={Link} to="/" color="darkgreen" variant="outline">
            Gå tillbaka och fortsätt handla
          </Button>
        </Stack>
      </Container>
    );
  }

  return (
    <Container size="md" py="xl">
      <Stack gap="lg">
        <Title order={1}>Varukorg</Title>

        <Stack gap="md">
          {items.map((item) => (
            <Card key={item.product.id} withBorder radius="md" padding="md">
              <Group justify="space-between" align="flex-start">
                {/* klickbar del -> detaljsida */}
                <Link
                  to={`/products/${item.product.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Group align="flex-start">
                    {item.product.imageURL && (
                      <Image
                        src={item.product.imageURL}
                        alt={item.product.title}
                        w={80}
                        radius="md"
                      />
                    )}

                    <Stack gap={4}>
                      <Text fw={500}>{item.product.title}</Text>
                      <Text size="sm" c="dimmed">
                        {item.product.price} kr / st
                      </Text>
                      <Text size="sm">
                        Summa:{" "}
                        <strong>{item.product.price * item.quantity} kr</strong>
                      </Text>
                    </Stack>
                  </Group>
                </Link>

                {/* knappar för antal + ta bort */}
                <Stack gap="xs" align="flex-end">
                  <Group gap="xs">
                    <Button
                      variant="outline"
                      size="xs"
                      onClick={() =>
                        dispatch({
                          type: "DECREASE_QUANTITY",
                          payload: { productId: item.product.id },
                        })
                      }
                    >
                      –
                    </Button>
                    <Text>{item.quantity}</Text>
                    <Button
                      variant="outline"
                      size="xs"
                      onClick={() =>
                        dispatch({
                          type: "INCREASE_QUANTITY",
                          payload: { productId: item.product.id },
                        })
                      }
                    >
                      +
                    </Button>
                  </Group>

                  <Button
                    variant="subtle"
                    size="xs"
                    leftSection={<IconTrash size={14} />}
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_ITEM",
                        payload: { productId: item.product.id },
                      })
                    }
                  >
                    Ta bort
                  </Button>
                </Stack>
              </Group>
            </Card>
          ))}
        </Stack>

        <Divider />

        <Group justify="space-between">
          <Text size="lg" fw={600}>
            Totalt: {totalPrice} kr
          </Text>

          <Button color="darkgreen" size="md">
            Gå till betalning
          </Button>
        </Group>
      </Stack>
    </Container>
  );
};
