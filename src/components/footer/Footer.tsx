import { Container, Group, ActionIcon } from "@mantine/core";
import { IconBrandInstagram, IconBrandGithub } from "@tabler/icons-react";
import classes from "./footer.module.css";

export const Footer = () => {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <img src="/logoo.png" alt="logo" style={{ height: "50px" }} />
        <Group
          gap={0}
          className={classes.links}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon
            component="a"
            href="https://github.com/DITT-NAMN"
            target="_blank"
            rel="noreferrer"
            size="lg"
            color="gray"
            variant="subtle"
            aria-label="Besök Atelier Mashas GitHub"
          >
            <IconBrandGithub size={18} stroke={1.5} />
          </ActionIcon>

          <ActionIcon
            component="a"
            href="https://www.instagram.com/atelier.masha"
            target="_blank"
            rel="noreferrer"
            size="lg"
            color="gray"
            variant="subtle"
            aria-label="Besök Atelier Masha på Instagram"
          >
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
};
