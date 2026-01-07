import { Button, Container, Stack, Title, Text } from "@mantine/core";
import { Link } from "react-router";

export const ConfirmationPage = () => {
  return (
    <Container size="sm" py="xl">
      <Stack gap="md">
        <Title order={1}>Tack för ditt köp!</Title>

        <Text>
          Din beställning har mottagits och behandlas just nu. Du får en
          bekräftelse via e-post inom kort.
        </Text>

        <Text size="sm" c="gray.7">
          Har du frågor kring din beställning är du välkommen att kontakta mig.
        </Text>

        <Button component={Link} to="/" color="darkgreen" mt="lg">
          Fortsätt handla
        </Button>
      </Stack>
    </Container>
  );
};
