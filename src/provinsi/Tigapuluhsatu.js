import React, { useState } from "react";
import "./styles.css";
import ulasImage from "./Image/Tigapuluhsatu/ulas angus ternate.jpg";
import papedaImage from "./Image/Tigapuluhsatu/papeda.jpg";
import sasaduImage from "./Image/Tigapuluhsatu/sasadu.jpg";
import lamoImage from "./Image/Tigapuluhsatu/manteren lamo.png";
import lalayonImage from "./Image/Tigapuluhsatu/tari-lalayon.jpg";
import batikmalukuutaraImage from "./Image/Tigapuluhsatu/batikmalukuutara.jpg";

const Tigapuluhsatu = () => {
  const [active, setActive] = useState(0);

  const Culture = [
    {
      name: "Pulau ulas angus ternate",
      description: ` Batu Angus salah satu objek wisata favorit di Kota Ternate, Maluku
      Utara. Tempat ini menyimpan tumpukan bebatuan dari lahar beku yang
      mengarah ke laut. Destinasi yang indah berlatarkan Gunung Gamalama
      tampak megah.`,
      backgroundUrl: ulasImage
    },
    {
      name: "Papeda",
      description: `Papeda adalah makanan berupa bubur sagu khas Maluku dan Papua yang
      biasanya disajikan dengan ikan tongkol atau mubara yang dibumbui
      dengan kunyit. Papeda berwarna putih dan bertekstur lengket
      menyerupai lem dengan rasa yang tawar. Papeda merupakan makanan
      yang kaya serat, rendah kolesterol, dan cukup bernutrisi.`,
      backgroundUrl: papedaImage
    },
    {
      name: "Rumah Sasadu",
      description: ` Sasadu merupakan rumah adat suku bangsa Sahu di Halmahera Barat
      yang juga merupakan suku bangsa asli dan tertua yang ada di daerah
      tersebut. Di rumah ini, masyarakat adat Sahu biasa berkumpul dalam
      pertemuan-pertemuan.`,
      backgroundUrl: sasaduImage
    },
    {
      name: "Baju Manteren Lamo",
      description: `Manteren Lamo merupakan baju adat yang dulunya digunakan oleh
      sultan kerajaan Maluku. Pakaian ini sering dipadukan dengan celana
      panjang kain berwarna hitam dan penutup kepala atau destar (ikat
      kepala) khusus.`,
      backgroundUrl: lamoImage
    },
    {
      name: "Tari Lalayon",
      description: `Pakaian adat Sulawesi Utara khas Minahasa di masa lalu terdiri dari pakaian karai untuk laki-laki, dan wuyang untuk perempuan. Bentuk baju karai tanpa lengan, lurus, berwarna hitam dan terbuat dari ijuk.Selain baju karai, ada juga bentuk baju yang berlengan panjang, memakai kerah dan saku disebut baju baniang`,
      backgroundUrl: lalayonImage
    },
    {
      name: "Batik Tubo",
      description: `Maluku Utara punya batik, yaitu Tubo – Ternate. Pengambilan nama batik Tubo sendiri adalah berasal dari sebuah kampung di Ternate dimana batik Ternate tersebut pertama kali di buat. Warga Tubo Ternate awalnya membuat batik tersebut sejak tahun 2010 dan setelah berjalannya waktu ternyata banyak yang suka dengan batik Tubo ini.`,
      backgroundUrl: batikmalukuutaraImage
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

export default Tigapuluhsatu;
