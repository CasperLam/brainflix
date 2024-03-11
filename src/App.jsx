import "./App.scss";
import Header from "./components/Header/Header.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Homepage />
      </main>
    </>
  );
}
