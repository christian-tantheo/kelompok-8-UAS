import React, { useState } from "react";
import "./styles.css";
import museumFatahillah from "./Image/Tujuhbelas/Museum Fatahillah.jpg";
import kerakTelor from "./Image/Tujuhbelas/kerak telor.jpeg";
import rumahKebaya from "./Image/Tujuhbelas/rumah kebaya.jpg";
import pakaianadatBetawi from "./Image/Tujuhbelas/pakaian adat betawi.webp";
import tariTopeng from "./Image/Tujuhbelas/tari topeng.jpeg";
import batikJakarta from "./Image/Tujuhbelas/batikjakarta.jpg";

const Tujuhbelas = () => {
  const [active, setActive] = useState(0);

  const Culture = [
    {
      name: "museum Fatahillah ",
      description: ` Museum Fatahillah memiliki nama resmi Museum Sejarah Jakarta adalah sebuah museum yang terletak di Jalan Taman Fatahillah Nomor 1, Jakarta Barat, dengan luas lebih dari 1.300 meter persegi.`,
      backgroundUrl: museumFatahillah
    },
    {
      name: "Kerak Telor",
      description: `Kerak telur adalah makanan asli daerah Jakarta (Betawi), dengan bahan-bahan beras ketan putih, telur ayam atau bebek, ebi (udang kering yang diasinkan) yang disangrai kering ditambah bawang merah goreng, lalu diberi bumbu yang dihaluskan berupa kelapa sangrai, cabai merah, kencur, jahe, merica butiran, garam dan gula.`,
      backgroundUrl: kerakTelor
    },
    {
      name: "Rumah kebaya",
      description: `Rumah Kebaya merupakan salah satu rumah tradisional masyarakat Betawi yang berada di DKI Jakarta. Disebut sebagai rumah Kebaya, karena bentuk atapnya menyerupai pelana yang berlipat dan jika dilihat dari samping maka lipatan-lipatan terlihat seperti kebaya.`,
      backgroundUrl: rumahKebaya
    },
    {
      name: "pakaian adat sadariah",
      description: `  Baju Sadariah dan Baju Kurung merupakan salah satu pakaian adat masyarakat Betawi DKI Jakarta. Baju Sadariah adalah baju yang dipakai oleh kaum laki-laki Betawi. Sementara untuk baju Kurung dipakai oleh perempuan.`,
      backgroundUrl: pakaianadatBetawi
    },
    {
      name: "Tari topeng",
      description: `Tari Cukin merupakan tarian khas asal Kabupaten Tangerang. Tarian ini menggabungkan seni budaya tradisional Jawa, Sunda, Cina dan Betawi. Adapun keempat unsur budaya ini menggambarkan keanekaragaman etnis di wilayah Kabupaten Tangerang.`,
      backgroundUrl: tariTopeng
    },
    {
      name: "Batik Nusa kelapa",
      description: `Motif ini juga mengandung nilai sejarah karena menggambarkan Jakarta pada masa lalu sebagai daerah yang asri, dengan adanya pepohonan dan persawahan. Namun, akhirnya berubah menjadi kota besar dengan penduduk dan bangunan yang padat.`,
      backgroundUrl: batikJakarta
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

export default Tujuhbelas;
