import React, { useState } from "react";
import "./styles.css";
import bukitSiguntang from "./Image/Tiga/bukit siguntang.jpg";
import Pempek from "./Image/Tiga/pempek.jpg";
import rumahAdatLimas from "./Image/Tiga/rumah adat limas.jpg";
import aesanGede from "./Image/Tiga/aesan gede.jpg";
import tariTanggai from "./Image/Tiga/tari tanggai.jpg";
import bintikTujuh from "./Image/Tiga/bintik tujuh.png";

const Tiga = () => {
  const [active, setActive] = useState(0);

  const Culture = [
    {
      name: "Bukit Siguntang",
      description: `Bukit Siguntang adalah sebuah bukit yang terletak di kota Palembang, Sumatera Selatan, Indonesia. Bukit ini memiliki makam yang diyakini sebagai tempat pemakaman raja-raja dari Kerajaan Sriwijaya, salah satu kerajaan maritim terbesar di Asia Tenggara pada masa lampau. `,
      backgroundUrl: bukitSiguntang
    },
    {
      name: "Pempek",
      description: `Pempek adalah makanan khas yang berasal dari Palembang, Sumatera Selatan, Indonesia. Makanan ini terbuat dari adonan ikan yang dicampur dengan tepung kanji, serta bahan tambahan seperti telur, bawang putih, garam, dan air. `,
      backgroundUrl: Pempek
    },
    {
      name: "Rumah Limas",
      description: `Rumah adat limas adalah rumah tradisional yang berasal dari suku Lampung, khususnya suku Lampung Pesisir di Sumatera Selatan, Indonesia. Rumah ini memiliki bentuk atap limas yang khas, dengan puncak atap yang runcing dan mengarah ke langit. `,
      backgroundUrl: rumahAdatLimas
    },
    {
      name: "Pakaian Adat Aesan Gede",
      description: `Pakaian Adat Aesan Gede adalah pakaian tradisional yang berasal dari Provinsi Riau, Indonesia. Aesan Gede adalah pakaian adat yang biasanya dikenakan dalam acara adat, pernikahan, dan upacara keagamaan di masyarakat Melayu Riau. `,
      backgroundUrl: aesanGede
    },
    {
      name: "Tari Tanggai",
      description: `Tari Tanggai adalah tarian tradisional yang berasal dari Provinsi Jambi, Indonesia. Tarian ini merupakan tarian kelompok yang dilakukan oleh perempuan dengan gerakan yang lincah dan indah. `,
      backgroundUrl: tariTanggai
    },
    {
      name: "Batik Bintik Tujuh",
      description: `Batik Bintik Tujuh adalah salah satu varian motif batik tradisional yang berasal dari Indonesia. Motif ini terkenal karena menggambarkan pola bintik-bintik yang teratur dan terletak dalam formasi tujuh bintik. `,
      backgroundUrl: bintikTujuh
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

export default Tiga;
