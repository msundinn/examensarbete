import { Button, Container, Stack, Title, Text } from "@mantine/core";
import { Link } from "react-router";

export const CartPage = () => {
  return (
    <>
      <Container size="md" py="xl">
        <Stack gap="md">
          <Title order={1}>Varukorg</Title>

          <Text>Din varukorg är tom just nu.</Text>

          <Button component={Link} to="/" color="darkgreen" variant="outline">
            Gå tillbaka och fortsätt handla
          </Button>
        </Stack>
      </Container>
    </>
  );
};
