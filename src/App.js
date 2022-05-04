import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import Row from "./components/Row/Row";
import request from "./config/Requests";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Video from "./components/Video/Video";

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<App />} /> */}
      <Navbar />
      <Banner />
      <Row
        title="Programmes Originaux Netflix"
        fetchUrl={request.fetchNetflixOriginals}
        isPoster={true}
      />
      <Row title="Tendances Actuelles" fetchUrl={request.fetchTrending} />
      <Row title="Les mieux notés" fetchUrl={request.fetchTopRated} />
      <Row title="Films d'action" fetchUrl={request.fetchActionMovies} />
      <Row title="Comédies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Films d'horreur" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Films Romances" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaires" fetchUrl={request.fetchDocumentaries} />
      <Footer />
      {/* <Route path="/video/:id" element={Video} />
      </Routes> */}
    </div>
  );
}

export default App;
