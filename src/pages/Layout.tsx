import { useReducer, useEffect } from "react";
import {
  cartReducer,
  initialCartState,
  type CartState,
} from "../reducers/cartReducer";
import { CartContext } from "../contexts/CartContext";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/footer/Footer";
import { Outlet } from "react-router";
import { Container } from "@mantine/core";

function initCart(initial: CartState): CartState {
  try {
    const stored = localStorage.getItem("cart");
    if (!stored) {
      return initial;
    }

    const parsed = JSON.parse(stored);

    if (!parsed || !Array.isArray(parsed.items)) {
      return initial;
    }

    return parsed as CartState;
  } catch {
    return initial;
  }
}

export function Layout() {
  const [cart, dispatch] = useReducer(cartReducer, initialCartState, initCart);

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch {}
  }, [cart]);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
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
    </CartContext.Provider>
  );

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      <Header />
      <Outlet />
      <Footer />
    </CartContext.Provider>
  );
}
