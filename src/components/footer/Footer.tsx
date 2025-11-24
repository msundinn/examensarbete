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
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandGithub size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
};
