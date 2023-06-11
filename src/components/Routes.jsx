import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";
import Home from "./Home";
import Mapindo from "./Mapindo";
import { Route, Routes } from "react-router-dom";
import Api from "../Api";
import Satu from "../provinsi/Satu";
import Dua from "../provinsi/Dua";
import Tiga from "../provinsi/Tiga";
import Empat from "../provinsi/Empat";
import Lima from "../provinsi/Lima";
import Enam from "../provinsi/Enam";
import Tujuh from "../provinsi/Tujuh";
import Delapan from "../provinsi/Delapan";
import Sembilan from "../provinsi/Sembilan";
import Sepuluh from "../provinsi/Sepuluh";
import Sebelas from "../provinsi/Sebelas";
import Duabelas from "../provinsi/Duabelas";
import Tigabelas from "../provinsi/Tigabelas";
import Empatbelas from "../provinsi/Empatbelas";
import Limabelas from "../provinsi/Limabelas";
import Enambelas from "../provinsi/Enambelas";
import Tujuhbelas from "../provinsi/Tujuhbelas";
import Delapanbelas from "../provinsi/Delapanbelas";
import Sembilanbelas from "../provinsi/Sembilanbelas";
import Duapuluh from "../provinsi/Duapuluh";
import Duapuluhsatu from "../provinsi/Duapuluhsatu";
import Duapuluhdua from "../provinsi/Duapuluhdua";
import Duapuluhtiga from "../provinsi/Duapuluhtiga";
import Duapuluhempat from "../provinsi/Duapuluhempat";
import Duapuluhlima from "../provinsi/Duapuluhlima";
import Duapuluhenam from "../provinsi/Duapuluhenam";
import Duapuluhtujuh from "../provinsi/Duapuluhtujuh";
import Duapuluhdelapan from "../provinsi/Duapuluhdelapan";
import Duapuluhsembilan from "../provinsi/Duapuluhsembilan";
import Tigapuluh from "../provinsi/Tigapuluh";
import Tigapuluhsatu from "../provinsi/Tigapuluhsatu";
import Tigapuluhdua from "../provinsi/Tigapuluhdua";
import Tigapuluhtiga from "../provinsi/Tigapuluhtiga";
import Tigapuluhempat from "../provinsi/Tigapuluhempat";
import Tigapuluhlima from "../provinsi/Tigapuluhlima";
import Tigapuluhenam from "../provinsi/Tigapuluhenam";
import Tigapuluhtujuh from "../provinsi/Tigapuluhtujuh";
import Tigapuluhdelapan from "../provinsi/Tigapuluhdelapan";
import Card from "./Card";

const Rute = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Navbar />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Map" element={<Mapindo />} />
          <Route path="/Weather" element={<Api />} />
          <Route path="/Aceh" element={<Satu />} />
          <Route path="/Sumatera-Utara" element={<Dua />} />
          <Route path="/Sumatera-Selatan" element={<Tiga />} />
          <Route path="/Sumatera-Barat" element={<Empat />} />
          <Route path="/Bengkulu" element={<Lima />} />
          <Route path="/Riau" element={<Enam />} />
          <Route path="/Kepulauan-Riau" element={<Tujuh />} />
          <Route path="/Jambi" element={<Delapan />} />
          <Route path="/Lampung" element={<Sembilan />} />
          <Route path="/Bangka-Belitung" element={<Sepuluh />} />
          <Route path="/Kalimantan-Barat" element={<Sebelas />} />
          <Route path="/Kalimantan-Timur" element={<Duabelas />} />
          <Route path="/Kalimantan-Selatan" element={<Tigabelas />} />
          <Route path="/Kalimantan-Tengah" element={<Empatbelas />} />
          <Route path="/Kalimantan-Utara" element={<Limabelas />} />
          <Route path="/Banten" element={<Enambelas />} />
          <Route path="/Jakarta" element={<Tujuhbelas />} />
          <Route path="/Jawa-Barat" element={<Delapanbelas />} />
          <Route path="/Jawa-Tengah" element={<Sembilanbelas />} />
          <Route path="/Yogyakarta" element={<Duapuluh />} />
          <Route path="/Jawa-Timur" element={<Duapuluhsatu />} />
          <Route path="/Bali" element={<Duapuluhdua />} />
          <Route path="/NTT" element={<Duapuluhtiga />} />
          <Route path="/NTB" element={<Duapuluhempat />} />
          <Route path="/Gorontalo" element={<Duapuluhlima />} />
          <Route path="/Sulawesi-Barat" element={<Duapuluhenam />} />
          <Route path="/Sulawesi-Tengah" element={<Duapuluhtujuh />} />
          <Route path="/Sulawesi-Utara" element={<Duapuluhdelapan />} />
          <Route path="/Sulawesi-Tenggara" element={<Duapuluhsembilan />} />
          <Route path="/Sulawesi-Selatan" element={<Tigapuluh />} />
          <Route path="/Maluku-Utara" element={<Tigapuluhsatu />} />
          <Route path="/Maluku" element={<Tigapuluhdua />} />
          <Route path="/Irian-Jaya-Barat" element={<Tigapuluhtiga />} />
          <Route path="/Papua" element={<Card />} />
          <Route path="/Papua1" element={<Tigapuluhempat />} />
          <Route path="/Papua-Tengah" element={<Tigapuluhlima />} />
          <Route path="/Papua-Pegunungan" element={<Tigapuluhenam />} />
          <Route path="/Papua-Selatan" element={<Tigapuluhtujuh />} />
          <Route path="/Papua-Barat-Daya" element={<Tigapuluhdelapan />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Rute;
