import { createBrowserRouter } from "react-router";
import { Layout } from "./pages/Layout";
import { ProductsPage } from "./pages/products/ProductsPage";
import { ProductDetailPage } from "./pages/products/ProductDetailPage";
import { AboutPage } from "./pages/About";
import { ContactPage } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      { index: true, element: <ProductsPage /> },
      { path: "products/:id", element: <ProductDetailPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);
