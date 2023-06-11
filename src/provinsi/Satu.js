import React, { useState } from "react";
import "./styles.css";
import museumTsunami from "./Image/Satu/museum tsunami.webp";
import mieAceh from "./Image/Satu/mie aceh.jpg";
import rumahAdatAceh from "./Image/Satu/rumah adat aceh.jpg";
import bajuAdatAceh from "./Image/Satu/baju adat aceh.jpg";
import tariSaman from "./Image/Satu/tari saman.jpg";
import batikRencong from "./Image/Satu/batik rencong.jpg";

const Satu = () => {
  const [active, setActive] = useState(0);

  const Culture = [
    {
      name: "Museum Tsunami",
      description: `Museum Tsunami Aceh, yang terletak di Banda Aceh, Aceh, Indonesia,
      adalah museum yang dirancang sebagai pengingat simbolis bencana gempa dan tsunami
      amudra Hindia 2004, serta pusat pendidikan dan tempat penampungan bencana darurat
      jika daerah tersebut pernah terkena oleh tsunami lagi.`,
      backgroundUrl: museumTsunami
    },
    {
      name: "Mie Aceh",
      description: `Mie Aceh adalah satu dari kuliner khas yang berasal dari Nanggroe Aceh Darussalam.
      Ciri khas dari kuliner yang satu ini ialah mie yang disiram kuah kari kental yang bercita rasa rempah-rempah,
      ditambah aneka lauk didalamnya.`,
      backgroundUrl: mieAceh
    },
    {
      name: "Krong Bade",
      description: `Rumah Krong Bade adalah rumah adat yang terletak di Nanggroe Aceh Darussalam. 
      Rumah ini sering disebut rumoh Aceh. Sepertihalnya rumah-rumah tradisional pada umumnya, 
      Rumah Krong Bade banyak menggunakan bahan baku alam. `,
      backgroundUrl: rumahAdatAceh
    },
    {
      name: "Ulee Balang",
      description: `Ulee Balang merupakan pakaian adat yang berasal dari provinsi Aceh. 
      Baju adat Nanggroe Aceh Darussalam untuk laki laki sering dikenal dengan sebutan baju Linto Baro. Sementara pakaian 
      Aceh yang dikenakan oleh perempuan disebut baju Daro Baro.`,
      backgroundUrl: bajuAdatAceh
    },
    {
      name: "Tari Saman",
      description: `Tari Saman merupakan tarian yang berasal dari suku Gayo dan biasanya 
      ditampilkan dalam suatu perayaan penting di suatu peristiwa adat. Syair pada tariannya 
      juga mempergunakan Bahasa-bahasa Gayo. Selain itu tarian ini juga kerap ditampilkan saat 
      merayakan hari raya kelahiran Nabi Muhammad SAW.`,
      backgroundUrl: tariSaman
    },
    {
      name: "Batik Rencong",
      description: `Rencong adalah salah satu senjata tradisional khas Aceh. Senjata ini 
      rupanya juga dijadikan salah satu motif pada batik Aceh. Motif rencong pada batik ini 
      diyakini merepresentasikan bacaan basmalah. Di Aceh, masyarakat sering menggunakan batik motif 
      ini untuk ritual adat tertentu.`,
      backgroundUrl: batikRencong
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

export default Satu;
