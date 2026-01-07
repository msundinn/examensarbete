import { useState, useContext } from "react";
import {
  Button,
  Container,
  Stack,
  TextInput,
  Textarea,
  Title,
  Text,
  Radio,
  Group,
  Divider,
  Image,
} from "@mantine/core";
import { useNavigate } from "react-router";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router";

export const CheckoutPage = () => {
  const { cart, dispatch } = useContext(CartContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [city, setCity] = useState("");
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("swish");

  const items = cart.items;
  const totalPrice = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handleSubmit = () => {
    if (!name || !email || !street || !zipcode || !city) {
      alert("Vänligen fyll i alla obligatoriska fält.");
      return;
    }

    console.log("Betalningsmetod:", payment);

    dispatch({ type: "CLEAR_CART" });

    navigate("/order-confirmation");
  };

  return (
    <Container size="sm" py="xl">
      <Stack gap="lg">
        <Stack gap="xs">
          <Title order={3} size="h4">
            Beställda verk:
          </Title>
          <Divider my="sm" />

          {items.length === 0 ? (
            <Text size="sm">Din varukorg är tom.</Text>
          ) : (
            <>
              {items.map((item) => (
                <Group
                  key={item.product.id}
                  justify="space-between"
                  align="flex-start"
                >
                  <Group align="flex-start">
                    {item.product.imageURL && (
                      <Image
                        src={item.product.imageURL}
                        alt={item.product.title}
                        w={80}
                        h={120}
                        radius="md"
                      />
                    )}

                    <Stack gap={4}>
                      <Text fw={500}>{item.product.title}</Text>
                      <Text size="sm" c="gray.7">
                        {item.product.price} kr / st
                      </Text>
                      <Text size="sm">
                        Summa:{" "}
                        <strong>{item.product.price * item.quantity} kr</strong>
                      </Text>
                    </Stack>
                  </Group>
                </Group>
              ))}

              <Divider my="sm" />

              <Group justify="space-between">
                <Text fw={600}>Totalt</Text>
                <Text fw={700}>{totalPrice} kr</Text>
              </Group>
            </>
          )}
        </Stack>{" "}
        <Title order={1} style={{ display: "flex", justifyContent: "center" }}>
          Slutför beställning
        </Title>
        <Button
          variant="subtle"
          component={Link}
          to="/cart"
          color="darkgreen"
          leftSection="←"
          mb="md"
          style={{ display: "flex", justifyContent: "flex-start" }}
        >
          Tillbaka till varukorgen
        </Button>
        <Stack gap="md">
          <TextInput
            label="Namn"
            placeholder="Ditt namn"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            required
          />

          <TextInput
            label="E-post"
            placeholder="din@mail.se"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            required
          />

          <TextInput
            label="Gatuadress"
            placeholder="Gatuadress och nummer"
            value={street}
            onChange={(e) => setStreet(e.currentTarget.value)}
            required
          />

          <Group grow gap="md">
            <TextInput
              label="Postnummer"
              placeholder="123 45"
              value={zipcode}
              onChange={(e) => setZipcode(e.currentTarget.value)}
              required
            />

            <TextInput
              label="Ort"
              placeholder="Stad"
              value={city}
              onChange={(e) => setCity(e.currentTarget.value)}
              required
            />
          </Group>
        </Stack>
        <Divider />
        <Stack gap="sm">
          <Title order={3} size="h4">
            Betalningsmetod
          </Title>

          <Radio.Group value={payment} onChange={setPayment}>
            <Stack gap="xs">
              <Radio value="swish" label="Swish" />
              <Radio value="card" label="Kortbetalning" />
              <Radio value="invoice" label="Faktura" />
            </Stack>
          </Radio.Group>
        </Stack>
        <Divider />
        <Textarea
          label="Kommentar (frivillig)"
          placeholder="Ev. meddelande till konstnären"
          value={comment}
          onChange={(e) => setComment(e.currentTarget.value)}
        />
        <Button color="darkgreen" size="md" onClick={handleSubmit}>
          Skapa beställning
        </Button>
        <Stack gap="xs" mt="sm">
          <Title order={3} size="h5">
            Leverans & frakt
          </Title>

          <Text size="sm">
            Alla verk packas varsamt för att klara resan hem till dig. Mindre
            prints skickas i vadderat kuvert eller kartong, och större tavlor
            packas med extra skydd.
          </Text>

          <Text size="sm">
            Leverans inom Sverige tar vanligtvis 3–7 arbetsdagar. Du får en
            spårningslänk via e-post när verket har skickats.
          </Text>

          <Text size="sm">
            Om något skulle skadas under transporten, kontakta mig så löser vi
            det direkt.
          </Text>
        </Stack>
      </Stack>
    </Container>
  );
};
