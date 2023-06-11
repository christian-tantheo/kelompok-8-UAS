import React, { useState } from "react";
import "./styles.css";
import airterjunSemolon from "./Image/Limabelas/air terjun semolon.jpeg";
import kepitingSoka from "./Image/Limabelas/kepiting soka.jpg";
import rumahBaloy from "./Image/Limabelas/rumah baloy.jpeg";
import pakaianadatTaa from "./Image/Limabelas/Pakaian-Adat-Taa.webp";
import tariMagunatip from "./Image/Limabelas/tari magunatip.jpg";
import dayakTaghol from "./Image/Limabelas/dayaktaghol.png";

const Limabelas = () => {
  const [active, setActive] = useState(0);

  const Culture = [
    {
      name: "air terjun Semolon",
      description: `Air Terjun Semolon merupakan sumber air panas terbesar dan terunik karena aliran sungainya berbatu berbentuk layaknya sebuah tangga yang bertingkat-tingkat. Di kawasan ini juga kerap dijadikan sebagai tempat berwisata dan rekreasi. Selain itu, tempat ini juga diyakini dapat menyembuhkan beragam penyakit kulit dan penyakit lainnya.`,
      backgroundUrl: airterjunSemolon
    },
    {
      name: "Kepiting Soka",
      description: `Kepiting soka atau kepiting cangkang lunak adalah sebuah istilah kuliner untuk kepiting-kepiting yang baru melepas kulit lamanya dan masih lunak. Cangkang lunak diangkat dari air agar cangkang mereka tak mengeras.`,
      backgroundUrl: kepitingSoka
    },
    {
      name: "Rumah Baloy ",
      description: `Rumah Baloy merupakan rumah adat yang terkenal dari masyarakat Kalimantan Utara. Bentuk bangunan rumah adat ini terlihat lebih modern dan modis karena hasil pengembangan arsitektur Dayak dari Rumah Panjang (Rumah Lamin) yang dihasilkan oleh Masyarakat suku Tidung yang tidak lain merupakan suku di Kalimantan Utara.`,
      backgroundUrl: rumahBaloy
    },
    {
      name: "Pakaian adat taa",
      description: `Pakaian adat Ta'a berupa atasan menyerupai rompi tanpa lengan. Dan dipadukan dengan rok panjang yang juga bermotif. Sebagai aksesoris dilengkapi dengan aneka manik-manik, taring macan, dan bulu burung enggang. `,
      backgroundUrl: pakaianadatTaa
    },
    {
      name: "Tari magunatip",
      description: `Tari gangereng atau yang lebih dikenal dengan tari Giring-Giring
      merupakan tari pergaulan muda mudi dengan penuh suka cita
      menyambut pahlawan yang telah menang perang melawan penjajah.`,
      backgroundUrl: tariMagunatip
    },
    {
      name: "batik Dayak Taghol",
      description: `Motif Dayak Taghol merupakan pola khas berupa empat garis lengkung dan titik-titik. Motif ini melambangkan perisai, yang merupakan simbol daya tahan dan keutuhan di masyarakat.`,
      backgroundUrl: dayakTaghol
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

export default Limabelas;
