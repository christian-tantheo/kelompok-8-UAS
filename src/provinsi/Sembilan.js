import React, { useState } from "react";
import "./styles.css";
import pulauPahawang from "./Image/Sembilan/pulau pahawang.jpg";
import Seruit from "./Image/Sembilan/Seruit.webp";
import rumahnuwoSesat from "./Image/Sembilan/nuwo sesat.png";
import tulangBawang from "./Image/Sembilan/tulang bawang.jpg";
import tariSembah from "./Image/Sembilan/tari sembah.jpg";
import pohonHayat from "./Image/Sembilan/pohon hayat.png";

const Sembilan = () => {
  const [active, setActive] = useState(0);

  const Culture = [
    {
      name: "pulau Pahawang ",
      description: ` Pulau Pahawang menyuguhkan laut biru dan pasir putih yang luar biasa indah. Sepanjang mata memandang pantai terbentang di bagian di bagian utara, timur dan selatan. Sementara sisanya diisi oleh rimbunan hutan mangrove.`,
      backgroundUrl: pulauPahawang
    },
    {
      name: "Seruit",
      description: ` Bagi masyarakat Lampung pepadun, seruit merupakan makanan yang dikonsumsi sehari-hari. Makanan khas Lampung Barat ini terbuat dari ikan bakar dicampur dengan sambal terasi, tempoyak, dan ada pula yang menambahkan mangga.`,
      backgroundUrl: Seruit
    },
    {
      name: "rumah nuwo sesat",
      description: `Rumah Nuwo Sesat merupakan salah satu rumah adat yang ada di Provinsi Lampung. Rumah Nuwo Sesat disebut juga Balai Agung. Dalam bahasa setempat, Nuwou berarti rumah atau tempat tinggal. Sedangkan Sesat berarti bangunan musyawarah`,
      backgroundUrl: rumahnuwoSesat
    },
    {
      name: "Pakaian tulang bawang",
      description: `Tulang Bawang merupakan pakaian adat yang berasal dari Provinsi Lampung. Dimana pakaian adat ini tetap dilestarikan oleh masyarakat, sehingga pada saat ini pakaian adat tersebut masih banyak ditemui karena memang biasanya digunakan pada saat dilaksanakan upacara pernikahan.`,
      backgroundUrl: tulangBawang
    },
    {
      name: "Tari sembah",
      description: `Tari Sembah merupakan tari penyambutan pihak besan laki-laki pada upacara pernikahan yang mulai muncul di Desa Lubuk Empelas Kabupaten Muara Enim Sumatera Selatan pada tahun 1956 oleh M. Natar.Ketika tahun 1989 tari Sembah berubah fungsi sebagai tari penyambutan tamu agung.`,
      backgroundUrl: tariSembah
    },
    {
      name: "batik pohon hayat",
      description: `Motif batik di Lampung didominasi oleh akulturasi budaya Buddha dan Islam, misalnya, Motif Hayat atau juga dikenal sebagai Pohon Kehidupan. Motif pohon kehidupan memiliki makna filosofis yang mendalam bagi masyarakat Lampung. Pohon kehidupan menandakan Pohon Surga, kekuatan abadi, maskulinitas, dan simbol kehidupan. Motif ini biasanya dipakai sebagai sarung untuk wanita.`,
      backgroundUrl: pohonHayat
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

export default Sembilan;
