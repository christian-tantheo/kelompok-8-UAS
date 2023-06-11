import React, { useState } from "react";
import "./styles.css";
import Derawan from "./Image/Duabelas/derawan.jpg";
import ayamCinane from "./Image/Duabelas/Ayam-cincane.jpg";
import rumahadatLamine from "./Image/Duabelas/Rumah-Adat-Kalimantan-Timur-758x483.jpg";
import bajuKustin from "./Image/Duabelas/baju kustin.png";
import tariHudoq from "./Image/Duabelas/61ffa24303883.jpg";
import tengkawanGampiek from "./Image/Duabelas/tengkawangampiek.png";

const Duabelas = () => {
  const [active, setActive] = useState(0);

  const Culture = [
    {
      name: "Pantai Derawan ",
      description: `Di kepulauan ini terdapat sejumlah objek wisata bahari menawan,
      salah satunya Taman Bawah Laut yang diminati wisatawan mancanegara
      terutama para penyelam kelas dunia.`,
      backgroundUrl: Derawan
    },
    {
      name: "ayam Cinane",
      description: ` Ayam cincane adalah ayam kampung yang diolah dengan cara dilumuri
      bumbu rempah-rempah lalu dibakar hingga matang. Tampilannya
      menarik karena berkat bumbu rempah, daging ayam jadi warna merah.
      Rasanya menggoyang lidah. Gurih meresap sampai daging ayam.`,
      backgroundUrl: ayamCinane
    },
    {
      name: "Rumah Adat Lamin",
      description: `Rumah adat Lamin merupakan rumah adat yang menjadi tempat kediaman
      suku Dayak. Bangunan rumah adat Lamin berukuran kurang lebih 300
      meter dengan lebar 15 meter. Ketinggian rumah panggung khas
      Kalimantan Timur ini mencapai 3 meter.`,
      backgroundUrl: rumahadatLamine
    },
    {
      name: "baju Kustin",
      description: `Baju Kustim adalah salah satu pakaian khas yang ada di Kalimantan
      Timur. Biasanya, Baju Kustim digunakan oleh masyarakat suku Kutai
      pada saat upacara penting pada masa kerajaan Kutai Kartanegara dan
      umumnya hanya digunakan untuk kalangan menengah ke atas.`,
      backgroundUrl: bajuKustin
    },
    {
      name: "Tari Hudoq",
      description: `Tari Hudoq merupakan salah satu tari tradisional suku Dayak Modang
      yang memiliki nilai estetis dan kental dengan nuansa mistis.`,
      backgroundUrl: tariHudoq
    },
    {
      name: "batik tengkawan gampiek",
      description: `Motif ini menggambarkan ukiran kayu, yang disebut “ampiek” dalam bahasa Kutai. “Tengkawang” adalah pohon sejenis meranti merah (Dipterocarpaceae). Tanaman ini memiliki banyak manfaat bagi kesehatan, dan biasanya dipakai sebagai bahan makanan, kosmetika, maupun obat-obatan. Dengan banyaknya manfaat yang dihasilkannya, kaum Dayak juga banyak menggunakan daun pohon ini dalam upacara dan ritual mereka. Tanaman ini merupakan lambang kesuburan dan kebaikan alam semesta, yang merupakan aspek terpenting bagi suku Dayak.`,
      backgroundUrl: tengkawanGampiek
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

export default Duabelas;
