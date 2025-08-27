import "./styles/main.scss";

import Header from "./components/header/Header";
import Top from "./components/top/Top";

import Footer from "./components/footer/Footer";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
      </main>
      <Footer />
    </>
  );
}
