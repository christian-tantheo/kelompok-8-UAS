import React, { useState } from "react";
import "./styles.css";
import bengkiImage from "./Image/Duapuluhsembilan/wisatalabengki.jpg";
import lapaImage from "./Image/Duapuluhsembilan/makananlapa.jpg";
import laikaImage from "./Image/Duapuluhsembilan/rumahlaika.jpg";
import nggawiImage from "./Image/Duapuluhsembilan/bajunggawi.jpg";
import maluloImage from "./Image/Duapuluhsembilan/tarimalulo.png";
import batiksulteng from "./Image/Duapuluhsembilan/batiksultenggara.png";

const Duapuluhsembilan = () => {
  const [active, setActive] = useState(0);

  const Culture = [
    {
      name: "Wisata Labengki",
      description: ` Pulau Labengki, juga dikenal sebagai Pulau Labengki Kecil, adalah sebuah pulau kecil yang terletak di Kecamatan Lasolo, Kabupaten Konawe Utara, Provinsi Sulawesi Tenggara, Indonesia. Pulau ini terletak di sebelah timur Pulau Sulawesi dan dikelilingi oleh perairan yang jernih dan indah.`,
      backgroundUrl: bengkiImage
    },
    {
      name: "Lapa Lapa",
      description: `Lapa-lapa adalah makanan yang terbuat dari beras, ketan, jagung dan juga ubi dan berasal dari pulau Sulawesi. Lapa berasal dari bahasa Wolio yang berarti berlipat-lipat yang merujuk pada proses pembuatan Lapa-lapa yang dibuat dengan cara dilipat-lipat.`,
      backgroundUrl: lapaImage
    },
    {
      name: "Rumah Walawengko",
      description: `Rumah adat Walewangko merupakan rumah adat suku Minahasa yang tinggal di Sulawesi Utara.

      Dikenal juga dengan sebutan rumah pewaris, rumah adat ini berbentuk rumah panggung yang tiang penopangnya terbuat dari kayu yang kuat.`,
      backgroundUrl: laikaImage
    },
    {
      name: "Baju Karai dan Wuyang",
      description: `Pakaian adat Sulawesi Utara khas Minahasa di masa lalu terdiri dari pakaian karai untuk laki-laki, dan wuyang untuk perempuan.

      Bentuk baju karai tanpa lengan, lurus, berwarna hitam dan terbuat dari ijuk.
      
      Selain baju karai, ada juga bentuk baju yang berlengan panjang, memakai kerah dan saku disebut baju baniang.`,
      backgroundUrl: nggawiImage
    },
    {
      name: "Tari Malulo",
      description: `Tarian Molulo atau Lulo (dari Bahasa Tolaki: Molulo), merupakan salah satu jenis kesenian tari tradisional dari daerah Sulawesi Tenggara, Indonesia. Di Kendari (Sulawesi Tenggara – Indonesia) terdapat beberapa suku. Suku Tolaki sebagai salah satu suku yang berada di daerah ini memiliki beberapa tarian tradisional, salah satu tarian tradisional yang masih sering dilaksanakan hingga saat ini adalah tarian persahabatan yang disebut tarian Lulo.`,
      backgroundUrl: maluloImage
    },
    {
      name: "Batik Minahasa",
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

export default Duapuluhsembilan;
