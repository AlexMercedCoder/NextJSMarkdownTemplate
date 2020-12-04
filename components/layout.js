import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children, pageTitle, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
      </Head>
      <Header />
      <main className="layout">{children}</main>
      <Footer />
    </>
  );
}
