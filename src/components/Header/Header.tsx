import { Burger, Container, Group } from "@mantine/core";
import classes from "./header.module.css";
import { ActionIcon } from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons-react";
import { Indicator } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-router";

const links = [
  { link: "/", label: "Konst" },
  { link: "/contact", label: "Kontakt" },
];

export const Header = () => {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <Link key={link.label} to={link.link} className={classes.link}>
      {link.label}
    </Link>
  ));
  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          <img src="/logoo.png" alt="logo" style={{ height: "50px" }} />
        </Group>

        <Group>
          <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
            {items}
          </Group>
          <Indicator color="darkgreen" label={3} size={16}>
            <ActionIcon
              color="darkgreen"
              variant="subtle"
              aria-label="Varukorg"
            >
              <IconShoppingCart />
            </ActionIcon>
          </Indicator>
        </Group>
      </Container>
    </header>
  );
};
