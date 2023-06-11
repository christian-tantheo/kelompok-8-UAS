import React, { useState } from "react";
import "./styles.css";
import danauFramu from "./Image/Tigapuluhdelapan/danau framu.jpg";
import ikanbakarpedasMonokwari from "./Image/Tigapuluhdelapan/ikan bakar pedas monokwari.jpg";
// import sasaduImage from "./Image/Tigapuluhdelapan/sasadu.jpg";
// import lamoImage from "./Image/Tigapuluhdelapan/manteren lamo.png";
import tariAluyen from "./Image/Tigapuluhdelapan/Tari Aluyen.jpg";
// import batikmalukuutaraImage from "./Image/Tigapuluhdelapan/batikmalukuutara.jpg";

const Tigapuluhdelapan = () => {
  const [active, setActive] = useState(0);

  const Culture = [
    {
      name: "danau framu",
      description: ` Danau Framu yang merupakan bagian kecil dari Danau Ayamaru ini memiliki keindahan yang sangat memanjakan mata dengan airnya yang sangat jernih. Air danau ini sangat jernih, sampai kita bisa melihat dasar danau dengan sangat jelas.`,
      backgroundUrl: danauFramu
    },
    {
      name: "ikan bakar pedas Monokwari",
      description: `Papeda adalah makanan berupa bubur sagu khas Maluku dan Papua yang
      biasanya disajikan dengan ikan tongkol atau mubara yang dibumbui
      dengan kunyit. Papeda berwarna putih dan bertekstur lengket
      menyerupai lem dengan rasa yang tawar. Papeda merupakan makanan
      yang kaya serat, rendah kolesterol, dan cukup bernutrisi.`,
      backgroundUrl: ikanbakarpedasMonokwari
    },
    // {
    //   name: "Rumah Sasadu",
    //   description: ` Sasadu merupakan rumah adat suku bangsa Sahu di Halmahera Barat
    //   yang juga merupakan suku bangsa asli dan tertua yang ada di daerah
    //   tersebut. Di rumah ini, masyarakat adat Sahu biasa berkumpul dalam
    //   pertemuan-pertemuan.`,
    //   backgroundUrl: sasaduImage
    // },
    // {
    //   name: "Baju Manteren Lamo",
    //   description: `Manteren Lamo merupakan baju adat yang dulunya digunakan oleh
    //   sultan kerajaan Maluku. Pakaian ini sering dipadukan dengan celana
    //   panjang kain berwarna hitam dan penutup kepala atau destar (ikat
    //   kepala) khusus.`,
    //   backgroundUrl: lamoImage
    // },
    {
      name: "Tari Aluyen",
      description: `Tari Aluyen merupakan tarian tradisional yang biasanya dilakukan sebagai bagian dari upacara adat, yaitu pembangunan rumah baru dan pembukaan kebun baru. Tarian tersebut dapat dilakukan pada siang atau malam hari.`,
      backgroundUrl: tariAluyen
    }
    // {
    //   name: "Batik Tubo",
    //   description: `Maluku Utara punya batik, yaitu Tubo – Ternate. Pengambilan nama batik Tubo sendiri adalah berasal dari sebuah kampung di Ternate dimana batik Ternate tersebut pertama kali di buat. Warga Tubo Ternate awalnya membuat batik tersebut sejak tahun 2010 dan setelah berjalannya waktu ternyata banyak yang suka dengan batik Tubo ini.`,
    //   backgroundUrl: batikmalukuutaraImage
    // }
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

export default Tigapuluhdelapan;
