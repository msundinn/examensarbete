import { Container, Group, ActionIcon, Indicator } from "@mantine/core";
import classes from "./header.module.css";
import { IconShoppingCart } from "@tabler/icons-react";
import { Link, useLocation } from "react-router";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const links = [
  { link: "/", label: "Konst" },
  { link: "/contact", label: "Kontakt" },
];

export const Header = () => {
  const { cart } = useContext(CartContext);
  const location = useLocation();

  const totalQuantity = cart.items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={
        location.pathname === link.link
          ? `${classes.link} ${classes.active}`
          : classes.link
      }
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Group justify="space-between" align="center">
          <Link to="/">
            <img
              src="/logoo.png"
              alt="logo"
              style={{ height: "50px", cursor: "pointer" }}
            />
          </Link>

          <Group gap={5} visibleFrom="sm">
            {items}
            <Indicator
              color="darkgreen"
              label={totalQuantity}
              size={16}
              disabled={totalQuantity === 0}
            >
              <ActionIcon
                component={Link}
                to="/cart"
                color="darkgreen"
                variant="subtle"
                aria-label="Varukorg"
              >
                <IconShoppingCart />
              </ActionIcon>
            </Indicator>
          </Group>

          <Group hiddenFrom="sm">
            <Indicator
              color="darkgreen"
              label={totalQuantity}
              size={16}
              disabled={totalQuantity === 0}
            >
              <ActionIcon
                component={Link}
                to="/cart"
                color="darkgreen"
                variant="subtle"
                aria-label="Varukorg"
              >
                <IconShoppingCart />
              </ActionIcon>
            </Indicator>
          </Group>
        </Group>

        <Group
          justify="center"
          gap={0}
          className={classes.navMobile}
          hiddenFrom="sm"
        >
          {items}
        </Group>
      </Container>
    </header>
  );
};
