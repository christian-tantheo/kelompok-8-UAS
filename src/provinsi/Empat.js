import React, { useState } from "react";
import "./styles.css";
import pantaiAirManis from "./Image/Empat/Pantai Air Manis.jpg";
import Rendang from "./Image/Empat/rendang.jpg";
import rumahGadang from "./Image/Empat/rumah gadang.jpg";
import bundoKanduang from "./Image/Empat/bundo kanduang.jpeg";
import tariPiring from "./Image/Empat/tari piring.jpeg";
import batikRangkiang from "./Image/Empat/batik rangkiang.png";

const Empat = () => {
  const [active, setActive] = useState(0);

  const Culture = [
    {
      name: "Pantai Air Manis",
      description: `Pantai Air Manis adalah sebuah pantai yang terletak di Kota Padang, Sumatera Barat, Indonesia. Pantai Air Manis memiliki nilai sejarah dan legenda yang terkait dengan cerita Malin Kundang, sebuah kisah lokal yang populer di daerah tersebut.`,
      backgroundUrl: pantaiAirManis
    },
    {
      name: "Rendang",
      description: `Rendang adalah hidangan khas Indonesia yang terkenal di seluruh dunia. Hidangan ini berasal dari Minangkabau, Sumatera Barat, dan merupakan masakan daging yang dimasak dalam rempah-rempah yang kaya dan kompleks. Hidangan ini sering disajikan dalam acara-acara istimewa dan perayaan, dan diakui sebagai salah satu hidangan terenak di dunia.`,
      backgroundUrl: Rendang
    },
    {
      name: "Rumah Gadang",
      description: `Rumah Gadang adalah rumah tradisional yang berasal dari Minangkabau, Sumatera Barat, Indonesia. Rumah ini terkenal dengan bentuk atapnya yang khas, yaitu berbentuk limas atau seperti tanduk kerbau yang besar. `,
      backgroundUrl: rumahGadang
    },
    {
      name: "Pakaian Adat Bundo Kanduang",
      description: `Pakaian Adat Bundo Kanduang adalah pakaian tradisional yang berasal dari Minangkabau, Sumatera Barat, Indonesia. Pakaian ini khusus dikenakan oleh perempuan dalam acara adat dan upacara penting.  `,
      backgroundUrl: bundoKanduang
    },
    {
      name: "Tari Piring",
      description: `Tari Piring adalah tarian tradisional yang berasal dari Minangkabau, Sumatera Barat, Indonesia. Tarian ini dilakukan oleh sekelompok penari yang membawa piring-piring keramik di tangan mereka.`,
      backgroundUrl: tariPiring
    },
    {
      name: "Batik Rangkiang",
      description: `Batik Rangkiang adalah sebuah motif batik tradisional yang berasal dari daerah Sumatera Barat, Indonesia. Motif ini menggambarkan bentuk-bentuk geometris yang saling berhubungan dan membentuk pola yang rumit. `,
      backgroundUrl: batikRangkiang
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

export default Empat;
