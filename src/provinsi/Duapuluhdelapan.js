import React, { useState } from "react";
import "./styles.css";
import monumenImage from "./Image/Duapuluhdelapan/monumenyesusmemberkati.jpg";
import wakuImage from "./Image/Duapuluhdelapan/ayamwaku.jpg";
import walawengkoImage from "./Image/Duapuluhdelapan/rumahwalawengko.jpg";
import karaiImage from "./Image/Duapuluhdelapan/bajukaraidanwuyang.jpg";
import maengketImage from "./Image/Duapuluhdelapan/tarimaengket.jpg";
import batikMinahasa from "./Image/Duapuluhdelapan/batiksulawesiutara.jpg";

const Duapuluhdelapan = () => {
  const [active, setActive] = useState(0);

  const Culture = [
    {
      name: "Monumen Yesus Memberkati",
      description: ` Monumen Yesus Memberkati atau lebih dikenal sebagai Yesus Memberkati (Bahasa Manado: Yesus Kase Berkat) adalah patung Yesus Kristus yang terletak di Manado, Indonesia. Patung itu berdiri setinggi 50 meter (158 kaki) dan terdiri dari penopang 20 meter dan patung itu sendiri yang memiliki ketinggian 30 meter.`,
      backgroundUrl: monumenImage
    },
    {
      name: "Ayam Woku",
      description: `Ayam woku biasanya dimasak hingga kuahnya mengental dan sedikit menyusut. Sajian ini adalah lauk yang sangat cocok bersanding dengan nasi putih panas. `,
      backgroundUrl: wakuImage
    },
    {
      name: "Rumah Walawengko",
      description: `Rumah adat Walewangko merupakan rumah adat suku Minahasa yang tinggal di Sulawesi Utara.

      Dikenal juga dengan sebutan rumah pewaris, rumah adat ini berbentuk rumah panggung yang tiang penopangnya terbuat dari kayu yang kuat.`,
      backgroundUrl: walawengkoImage
    },
    {
      name: "Baju Karai dan Wuyang",
      description: `Pakaian adat Sulawesi Utara khas Minahasa di masa lalu terdiri dari pakaian karai untuk laki-laki, dan wuyang untuk perempuan.

      Bentuk baju karai tanpa lengan, lurus, berwarna hitam dan terbuat dari ijuk.
      
      Selain baju karai, ada juga bentuk baju yang berlengan panjang, memakai kerah dan saku disebut baju baniang.`,
      backgroundUrl: karaiImage
    },
    {
      name: "Tari Maengket",
      description: `Pakaian adat Sulawesi Utara khas Minahasa di masa lalu terdiri dari pakaian karai untuk laki-laki, dan wuyang untuk perempuan. Bentuk baju karai tanpa lengan, lurus, berwarna hitam dan terbuat dari ijuk.Selain baju karai, ada juga bentuk baju yang berlengan panjang, memakai kerah dan saku disebut baju baniang`,
      backgroundUrl: maengketImage
    },
    {
      name: "Batik Minahasa",
      description: `Motif Bomba Mawar berarti cinta sakral bagi keluarga, kerajaan dan Tuhan. Motif inilah yang juga menggambarkan keterbukaan dan kebersamaan dalam kehidupan sosial masyarakat Palu.`,
      backgroundUrl: batikMinahasa
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

export default Duapuluhdelapan;
