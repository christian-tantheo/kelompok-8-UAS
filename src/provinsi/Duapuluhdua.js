import React, { useState } from "react";
import "./styles.css";
import bajraImage from "./Image/Duapuluhdua/Bali/destinasi wisata bajra.jpg";
import ayamImage from "./Image/Duapuluhdua/Bali/ayambetutu.jpg";
import rumahlumbungImage from "./Image/Duapuluhdua/Bali/rumah lumbung.jpg";
import bajuadatImage from "./Image/Duapuluhdua/Bali/bajuadatpayasagung.jpg";
import taritengklongImage from "./Image/Duapuluhdua/Bali/taritengklong.jpg";
import batikBali from "./Image/Duapuluhdua/Bali/batikbali.jpg";

const Duapuluhdua = () => {
  const [active, setActive] = useState(0);

  const Culture = [
    {
      name: "Destinasi wisata Bajra",
      description: `Objek wisata Monumen Bajra Sandhi, adalah sebuah monumen yang berada di jantung kota Denpasar, tempatnya berada di daerah Renon. Kemudian, monumen ini dibangun dan di dedikasikan untuk perjuangan rakyat pulau Bali. `,
      backgroundUrl: bajraImage
    },
    {
      name: "Ayam Betutu",
      description: ` Ayam Betutu adalah makanan tradisional khas Bali yang terbuat dari
      ayam atau bebek utuh yang berisi bumbu, kemudian dipanggang dalam
      api sekam. Ayam betutu merupakan jenis lauk pauk yang dibuat dari
      daging ayam yang telah dibersihkan, kemudian dibalurkan bumbu khas
      Bali yang dikenal dengan "base genep"di seluruh permukaan daging
      ayam dan sebagian lagi dimasukkan ke dalam rongga abdomennya.`,
      backgroundUrl: ayamImage
    },
    {
      name: "Rumah Lumbung",
      description: `Rumah adat Banjar di Desa Teluk Selong Ulu, memunggungi jalan raya
    arah Martapura – Dalam Pagar, sekitar 4 km dari kota Martapura.
    Rumah Bubungan Tinggi ini dibangun pada tahun 1867 oleh saudagar
    batu permata bernama H.M. Arif dan Hj. Patimah, dan kini ditempati
    oleh Fauziah (63 tahun).`,
      backgroundUrl: rumahlumbungImage
    },
    {
      name: "Pakaian adat payas Agung",
      description: `Bagajah Gamuling Baular Lulut merupakan busana yang dikenakan oleh
    keturunan raja dan bangsawan. Seiring perkembangan zaman, baju ini
    pun kerap menjadi busana pengantin dalam pernikahan adat
    Kalimantan Selatan bahkan hingga sekarang.`,
      backgroundUrl: bajuadatImage
    },
    {
      name: "Tari Tengklong",
      description: `Tarian Baksa Kembang adalah Tarian untuk menyambut tamu-tamu
    kehormatan atau kerabat kerajaan. Tarian ini juga dilakukan oleh
    masyarakat umum dalam acara-acara pernikahan atau acara-acara adat
    lainnya.`,
      backgroundUrl: taritengklongImage
    },
    {
      name: "Batik Singo Barong",
      description: `Tarian Baksa Kembang adalah Tarian untuk menyambut tamu-tamu
      kehormatan atau kerabat kerajaan. Tarian ini juga dilakukan oleh
      masyarakat umum dalam acara-acara pernikahan atau acara-acara adat
      lainnya.`,
      backgroundUrl: batikBali
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

export default Duapuluhdua;
