import React, { useState } from "react";
import "./styles.css";
import pulauTemajuk from "./Image/Sebelas/Pantai-Temajuk.jpg";
import Choipan from "./Image/Sebelas/choipan.jpg";
import panjaeKalbar from "./Image/Sebelas/panjae kalbar.png";
import pakaianadatkalimantanbaratkingBaba from "./Image/Sebelas/Pakaian-adat-Kalimantan-Barat-King-Baba.jpg";
import tariMonong from "./Image/Sebelas/monong.jpg";
import dayakKamang from "./Image/Sebelas/dayakkamang.png";

const Sebelas = () => {
  const [active, setActive] = useState(0);

  const Culture = [
    {
      name: "Pantai Temajuk",
      description: `    Pantai Temajuk dinamakan Pantai Temajuk karena letak pantai ini
      ada di Desa Temajuk, perpaduan antara pasir pantai yang putih
      kecoklatan, air laut yang jernih, dan kondisi pantai yang
      cenderung sepi menjadi pilihan yang pas untuk membuatmu
      berlama-lama berada di pantai ini.`,
      backgroundUrl: pulauTemajuk
    },
    {
      name: "Choipan",
      description: `Choipan merupakan kue isi sayuran yang cukup populer di Pontianak.
      Camilan ini bisa kamu buat dengan menggunakan isian dari
      bengkoang, rebung, ebi, dan udang.`,
      backgroundUrl: Choipan
    },
    {
      name: "rumah panjang",
      description: `Rumah Panjang (rumah Radank) adalah salah satu rumah adat dari
      daerah Kalimantan Barat. Rumah Panjang adalah ciri khas dari
      masyarakat Dayak yang tinggal di daerah Kalimantan Barat. Hal
      ini dikarenakan rumah panjang adalah gambaran sosial kehidupan
      masyarakat Dayak di Kalimantan Barat. Rumah panjang juga
      merupakan pusat kehidupan dari masyarakat Dayak.`,
      backgroundUrl: panjaeKalbar
    },
    {
      name: " pakaian adat king baba",
      description: `King Baba adalah nama pakaian adat yang digunakan oleh laki laki
      yang berasal dari suku Dayak. Pakaian ini bila dari segi bentuknya
      akan serupa dengan pakaian milik perempuan, hanya saja dari segi
      bentuknya lebih sederhana.`,
      backgroundUrl: pakaianadatkalimantanbaratkingBaba
    },
    {
      name: "Tari monong",
      description: `Tari Monong adalah tari penolak penyakit supaya penderita dapat
      sembuh kembali. Tarian tersebut dihadirkan saat tetua atau dukun
      tengah dalam keadaan trance (di bawah alam sadar)`,
      backgroundUrl: tariMonong
    },
    {
      name: "batik Dayak Kamang",
      description: `Motif Kamang pada umumnya ditemukan pada perisai suku Dayak, karena diyakini akan meningkat­kan daya magis dan semangat orang yang menggunakannya. Kamang adalah ruh leluhur pria, seringkali digambarkan hanya mengenakan cawat dan duduk bersila.`,
      backgroundUrl: dayakKamang
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

export default Sebelas;
