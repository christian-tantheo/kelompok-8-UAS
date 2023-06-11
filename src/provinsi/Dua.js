import React, { useState } from "react";
import "./styles.css";
import istanaMaimun from "./Image/Dua/istana maimun.webp";
import bikaAmbon from "./Image/Dua/bika ambon.jpg";
import rumahBolon from "./Image/Dua/rumah bolon.jpg";
import pakaianAdatUlos from "./Image/Dua/pakaian adat ulos.jpg";
import tariTorTor from "./Image/Dua/tari tor tor.jpg";
import gorgaSimoelMoel from "./Image/Dua/gorga simoel moel.png";

const Dua = () => {
  const [active, setActive] = useState(0);

  const Culture = [
    {
      name: "Istana Maimun",
      description: `Istana Maimun adalah istana di Medan, Sumatera Utara, Indonesia. Dibangun pada 1888 oleh Sultan Deli, istana ini menggabungkan gaya Melayu, Islam, dan Eropa. Istana Maimun adalah ikon sejarah dan kebudayaan Medan yang populer dikunjungi wisatawan, menjadi warisan budaya penting Sumatera Utara.`,
      backgroundUrl: istanaMaimun
    },
    {
      name: "Bika Ambon",
      description: `Bika Ambon adalah sejenis kue tradisional yang berasal dari Indonesia, khususnya dari daerah Medan, Sumatera Utara. Kue ini terkenal karena teksturnya yang lembut dan kenyal, serta memiliki aroma pandan yang khas.`,
      backgroundUrl: bikaAmbon
    },
    {
      name: "Rumah Bolon",
      description: `Rumah Bolon adalah rumah adat tradisional Batak Toba yang berasal dari Sumatera Utara, Indonesia. Rumah ini memiliki arsitektur yang khas dan merupakan simbol penting dalam budaya Batak. `,
      backgroundUrl: rumahBolon
    },
    {
      name: "Pakaian Adat Ulos",
      description: `Pakaian adat Ulos merupakan busana tradisional yang berasal dari suku Batak, khususnya suku Batak Toba di Sumatera Utara, Indonesia. Ulos adalah sejenis kain tenun yang dihasilkan secara tradisional oleh perempuan Batak. `,
      backgroundUrl: pakaianAdatUlos
    },
    {
      name: "Tari Tor Tor",
      description: `Tari Tor Tor adalah tarian tradisional yang berasal dari suku Batak, khususnya suku Batak Toba di Sumatera Utara, Indonesia. Tarian ini dilakukan dalam rangka upacara adat, perayaan, dan acara kebudayaan penting. `,
      backgroundUrl: tariTorTor
    },
    {
      name: "Batik Gorga Simoel Moel",
      description: `Batik Gorga Simoel Moel adalah salah satu jenis batik tradisional yang berasal dari suku Batak, khususnya suku Batak Toba di Sumatera Utara, Indonesia. Batik ini ditandai dengan motif Gorga yang merupakan simbol khas suku Batak yang melambangkan kekuatan dan perlindungan.`,
      backgroundUrl: gorgaSimoelMoel
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

export default Dua;
