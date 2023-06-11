import React, { useState } from "react";
import "./styles.css";
import nosararaImage from "./Image/Duapuluhtujuh/Sulawesi Tengah/wisata nosarara.jpg";
import kaledoImage from "./Image/Duapuluhtujuh/Sulawesi Tengah/kaledo.jpg";
import sourajaImage from "./Image/Duapuluhtujuh/Sulawesi Tengah/rumahsouraja.png";
import kojeImage from "./Image/Duapuluhtujuh/Sulawesi Tengah/baju koje dan nggembe.jpg";
import pamonteImage from "./Image/Duapuluhtujuh/Sulawesi Tengah/taripamonte.jpg";
import batiksulteng from "./Image/Duapuluhtujuh/Sulawesi Tengah/batiksulteng.jpeg";

const Duapuluhtujuh = () => {
  const [active, setActive] = useState(0);

  const Culture = [
    {
      name: "Wisata Nosarara",
      description: ` Tugu Perdamaian "Nosarara Nosabatutu" adalah tugu yang terletak di kawasan perbukitan Kelurahan Tondo, Kecamatan Mantikulore, Palu. Dibangun pada rentang tahun 1998-2000 sebagai simbol persatuan dan perdamaian masyarakat Sulawesi Tengah pasca konflik komunal yang terjadi di Poso.`,
      backgroundUrl: nosararaImage
    },
    {
      name: "Kaledo",
      description: `Kaki Lembu Donggala atau yang lebih dikenal dengan nama Kaledo ini adalah makanan khas masyarakat Donggala yang terletak di provinsi Sulawesi Tengah, tepatnya di kota Palu. Makanan ini mirip dengan sup buntut, bedanya tulangnya dari kaki lembu dan disajikan bukan dengan nasi melainkan dengan ubi.`,
      backgroundUrl: kaledoImage
    },
    {
      name: "Rumah Souraja",
      description: `Souraja atau disebut juga Banua Oge adalah rumah adat atau rumah tradisional Indonesia yang berasal dari Kelurahan Lere, Kecamatan Palu Barat, Kota Palu, Provinsi Sulawesi Tengah. Rumah adat ini dibangun pada abad ke-19 masehi atas prakarsa Raja Yodjokodi dan berfungsi sebagai tempat tinggal keluarga raja dan juga sebagai pusat pemerintahan kerajaan.[1]`,
      backgroundUrl: sourajaImage
    },
    {
      name: "Baju koje dan Nggembe",
      description: `Busana tradisional suku Rote dinamakan sebagai Tenun Ikat yang
      terbuat dari kain tenun. Pakaian ini sering dipadukan dengan
      kemeja putih panjang dengan bawahan sarung tenun ikat berwarna
      gelap.`,
      backgroundUrl: kojeImage
    },
    {
      name: "Tari Pamonte",
      description: `Tari Pamonte sudah ada dan dikenal oleh masyarakat Sulawesi Tengah sejak tahun 1957. Tarian ini diciptakan oleh salah satu seniman besar dan merupakan putra asli daerah Sulawesi Tengah, bernama Hasan. M. Bahasyua. Tari Pamonte ini terinspirasi dari aktivitas dan kebiasaan para gadis-gadis Suku Kaili saat menyambut masa panen padi tiba`,
      backgroundUrl: pamonteImage
    },
    {
      name: "Batik Bomba Mawar",
      description: `Motif Bomba Mawar berarti cinta sakral bagi keluarga, kerajaan dan Tuhan. Motif inilah yang juga menggambarkan keterbukaan dan kebersamaan dalam kehidupan sosial masyarakat Palu.`,
      backgroundUrl: batiksulteng
    }
  ];

  return (
    <div className="kultur">
      <ul>
        {Culture.map((Culture, i) => (
          <li
            key={i}
            style={{ backgroundImage: `url(${Culture.backgroundUrl})` }}
            role="button"
            className={active === i ? "active" : ""}
            onMouseEnter={() => setActive(i)}
          >
            <h3>{Culture.name}</h3>
            <div className="section-content">
              <div className="inner">
                <div className="bio">
                  <h2>{Culture.name}</h2>
                  <p>{Culture.description}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Duapuluhtujuh;
