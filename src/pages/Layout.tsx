import { Outlet } from "react-router";
import { Header } from "../components/Header/Header";
import { Container } from "@mantine/core";
import { Footer } from "../components/footer/Footer";

export const Layout = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />

      <main style={{ flex: 1 }}>
        <Container>
          <Outlet />
        </Container>
      </main>

      <Footer />
    </div>
  );
};
