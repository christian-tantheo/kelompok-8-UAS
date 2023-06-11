import React, { useState } from "react";
import "./styles.css";
import airTerjunTriSakti from "./Image/Lima/air terjun tri sakti.jpg";
import Pendap from "./Image/Lima/pendap.jpg";
import rumahAdatBubunganLima from "./Image/Lima/rumah-adat-bubungan-lima.webp";
import pakaianAdatRejangLebong from "./Image/Lima/pakaian adat rejang lebong.jpg";
import tariAndun from "./Image/Lima/tari andun.jpg";
import besurekRafflesia from "./Image/Lima/besurek rafflesia.png";

const Lima = () => {
  const [active, setActive] = useState(0);

  const Culture = [
    {
      name: "Air Terjun Tri Sakti",
      description: `Air Terjun Tri Sakti adalah sebuah air terjun yang terletak di daerah Kabupaten Simalungun, Sumatera Utara, Indonesia. Nama "Tri Sakti" berasal dari bahasa Indonesia yang berarti "tiga kekuatan" dan merujuk pada keunikan air terjun ini yang terdiri dari tiga aliran air yang bergabung menjadi satu.`,
      backgroundUrl: airTerjunTriSakti
    },
    {
      name: "Pendap",
      description: `Makanan pendap adalah makanan tradisional khas dari daerah Riau, Sumatera, Indonesia. Makanan ini terdiri dari nasi yang disajikan dengan berbagai hidangan lauk-pauk yang beragam. `,
      backgroundUrl: Pendap
    },
    {
      name: "Rumah Bubungan Lima",
      description: `Rumah Bubungan Lima adalah sebuah rumah tradisional khas dari suku Minangkabau yang berasal dari daerah Sumatera Utara, Indonesia. Nama "Bubungan Lima" merujuk pada atap rumah yang memiliki lima buah bubungan yang melengkung ke atas.`,
      backgroundUrl: rumahAdatBubunganLima
    },
    {
      name: "Pakaian Adat Rejang Lebong",
      description: `Pakaian adat Rejang Lebong adalah pakaian tradisional yang berasal dari suku Rejang di daerah Lebong, Bengkulu, Indonesia. Pakaian adat ini memiliki ciri khas berupa kain sarung panjang untuk pria yang disebut "sepatan" dan kain panjang yang dililitkan di bagian atas tubuh untuk wanita yang disebut "terindah". `,
      backgroundUrl: pakaianAdatRejangLebong
    },
    {
      name: "Tari Andun",
      description: `Tari Andun adalah tarian tradisional yang berasal dari daerah Riau, Sumatera, Indonesia. Tarian ini menggambarkan keindahan dan keanggunan gerakan yang khas, dengan nuansa yang lembut dan penuh makna. `,
      backgroundUrl: tariAndun
    },
    {
      name: "Batik Besurek Rafflesia",
      description: `Batik Besurek Rafflesia adalah motif batik yang terinspirasi oleh bunga Rafflesia, salah satu bunga terbesar dan langka di dunia. Motif ini menggambarkan keindahan dan keunikan bunga Rafflesia dengan bentuknya yang besar dan warna-warni yang mencolok.`,
      backgroundUrl: besurekRafflesia
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

export default Lima;
