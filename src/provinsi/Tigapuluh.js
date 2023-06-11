import React, { useState } from "react";
import "./styles.css";
import tamannasionalBantimurung from "./Image/Tigapuluh/taman nasional bantimurung.jpeg";
import cotoMakassar from "./Image/Tigapuluh/coto makassar.jpeg";
import Tongokonan from "./Image/Tigapuluh/tongkonan.jpg";
import seppaTalung from "./Image/Tigapuluh/Seppa talung.jpeg";
import tariKipas from "./Image/Tigapuluh/Tari-Kipas-Pakarena.webp";
import batiksulawesiSelatan from "./Image/Tigapuluh/batiksulawesiselatan.jpeg";

const Tigapuluh = () => {
  const [active, setActive] = useState(0);

  const Culture = [
    {
      name: "taman nasional Bantimurung",
      description: ` Taman Nasional Bantimurung merupakan salah satu pilihan destinasi wisata alam di Sulawesi Selatan (Sulsel) yang menarik untuk dikunjungi. Bagi yang ingin menikmati liburan dengan suasana alam yang sejuk dan asri, Taman Nasional Bantimurung bisa menjadi tujuan yang pas.`,
      backgroundUrl: tamannasionalBantimurung
    },
    {
      name: "coto Makassar",
      description: `Coto makassar atau coto mangkasara adalah hidangan tradisional Suku Makassar, Sulawesi Selatan. Makanan ini terbuat dari jeroan sapi yang direbus dalam waktu yang lama. Rebusan jeroan bercampur daging sapi ini kemudian diiris-iris, lalu dibumbui dengan bumbu yang diracik secara khusus.`,
      backgroundUrl: cotoMakassar
    },
    {
      name: "Rumah Tongokonan",
      description: `Rumah Adat Tongkonan sebagai Rumah Adat yang berasal dari Toraja, Sulawesi Selatan dengan filosofi Aluk Todolo. Rumah Tongkonan juga menjadi simbol martabat keluarga dari masyarakat Toraja sehingga pembangunannya tidak sembarangan. Dengan bentuk desain, hingga posisi rumah dan tiang-tiangnya rumah adat ini memiliki nilai serta arti yang berbeda-beda.`,
      backgroundUrl: Tongokonan
    },
    {
      name: "Baju seppa Talung",
      description: `Baju Seppa Tallung adalah pakaian adat Sulawesi Selatan dari suku Toraja yang dikenakan oleh para pria. Baju adat Seppa Tallung biasanya dikenakan berpasangan dengan Baju Pokko. Pemakaian Seppa Tallung akan dipadukan bersama dengan sejumlah aksesoris seperti Kandure, Ganyang, dan Lipa'.`,
      backgroundUrl: seppaTalung
    },
    {
      name: "Tari Kipas Pakarena",
      description: ` Tari Kipas Pakarena merupakan salah satu tarian tradisional suku Makassar, Sulawesi Selatan (Sulsel). Tarian ini seringkali dipertunjukkan pada acara-acara besar pemerintahan atau pun perayaan adat. Sesuai namanya, Tari Kipas Pakarena menggunakan properti utama kipas.`,
      backgroundUrl: tariKipas
    },
    {
      name: "paqbarre allo ",
      description: `Kata “Barre” berarti bulat dan “Allo” berarti sinar matahari. Ukiran ini diartikan sebagai sains dan kebijaksanaan yang menerangi seperti sinar matahari. Di tengah motif adalah Kepala Kerbau, yang merupakan simbol kemuliaan etnis Toraja.`,
      backgroundUrl: batiksulawesiSelatan
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

export default Tigapuluh;
