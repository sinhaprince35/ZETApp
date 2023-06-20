import NavbarLayout from "../layout/NavbarLayout";

export default function App({ Component, pageProps }) {
  return (
    <NavbarLayout>
      <Component {...pageProps} />
    </NavbarLayout>
  );
}
