import { useState, FormEvent } from "react";
import {
  Container,
  Grid,
  Stack,
  Title,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  Anchor,
  Alert,
  Divider,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

export const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(false);

    const newErrors: typeof errors = {};

    if (!name.trim()) newErrors.name = "Skriv gärna ditt namn.";
    if (!email.trim()) newErrors.email = "Skriv din e-postadress.";
    else if (!email.includes("@"))
      newErrors.email = "Ange en giltig e-postadress.";
    if (!message.trim()) newErrors.message = "Skriv ett meddelande.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Container size="md" py="xl">
      {" "}
      <Stack gap={4} mb={"lg"}>
        <Title mb={"md"}>Originalverk & beställningar</Title>
        <Text c="dimmed">
          Originalmålningar säljs på förfrågan och hanteras personligen. För att
          säkerställa rätt information kring tillgänglighet, pris och leverans
          ber jag dig att kontakta mig direkt. Ange gärna vilket verk du är
          intresserad av, eller om det gäller en specifik storlek eller
          beställning, så återkommer jag med mer information.
        </Text>
      </Stack>
      <Divider my="lg" />
      <Grid gutter="xl" align="flex-start">
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Stack gap="md">
            <Title order={2}>Kontakta mig</Title>

            <Text c="dimmed">
              Fyll i formuläret eller mejla mig direkt – jag svarar så snart jag
              kan.
            </Text>

            <Stack gap={4}>
              <Text fw={500}>E-post</Text>
              <Anchor href="mailto:kontakt@ateliermasha.se" c="darkgreen">
                kontakt@ateliermasha.se
              </Anchor>
            </Stack>

            <Stack gap={4}>
              <Text fw={500}>Instagram</Text>
              <Anchor
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                c="darkgreen"
              >
                @atelier.masha
              </Anchor>
            </Stack>

            <Stack gap={4}>
              <Text fw={500}>Svarstid</Text>
              <Text c="dimmed">Jag försöker svara inom 24–48 timmar.</Text>
            </Stack>

            {submitted && (
              <Alert
                icon={<IconCheck size={18} />}
                title="Tack för ditt meddelande!"
                color="green"
              >
                Ditt meddelande är mottaget. Jag återkommer inom kort.
              </Alert>
            )}
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 7 }}>
          <form onSubmit={handleSubmit}>
            <Stack gap="md">
              <TextInput
                label="Namn"
                placeholder="Ditt namn"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
                error={errors.name}
              />

              <TextInput
                label="E-post"
                placeholder="din@mail.se"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                error={errors.email}
              />

              <Textarea
                label="Meddelande"
                placeholder="Skriv gärna lite om vad du undrar över."
                minRows={5}
                value={message}
                onChange={(e) => setMessage(e.currentTarget.value)}
                error={errors.message}
              />

              <Group justify="flex-start" mt="sm">
                <Button type="submit" color="darkgreen" radius="md">
                  Skicka meddelande
                </Button>
              </Group>
            </Stack>
          </form>
        </Grid.Col>
      </Grid>
    </Container>
  );
};
