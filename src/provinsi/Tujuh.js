import React, { useState } from "react";
import "./styles.css";
import pulauPenyengat from "./Image/Tujuh/pulau penyengat.jpg";
import otakOtak from "./Image/Tujuh/otak otak.webp";
import belahBubung from "./Image/Tujuh/belah bubung.jpg";
import telukbelangandanKebayalabuh from "./Image/Tujuh/teluk belangan dan kebaya labuh.jpg";
import tarianMalemang from "./Image/Tujuh/tarian malemang.jpg";
import ikanTambal from "./Image/Tujuh/ikan tambal.png";

const Tujuh = () => {
  const [active, setActive] = useState(0);

  const Culture = [
    {
      name: "pulau Penyengat ",
      description: ` Pulau Penyengat (atau Pulau Penyengat Inderasakti dalam sebutan sumber-sumber sejarah) adalah sebuah pulau kecil di Kota Tanjungpinang, Kepulauan Riau, yang berjarak kurang lebih 1,8 km dari pusat kota. Pulau ini berukuran panjang 2.000 meter dan lebar 850 meter, dengan jumlah penduduk 2.500 jiwa. Pulau ini dapat ditempuh dari pusat Kota Tanjungpinang dengan menggunakan perahu bermotor atau lebih dikenal pompong yang memerlukan waktu tempuh kurang lebih 15 menit.`,
      backgroundUrl: pulauPenyengat
    },
    {
      name: "otak - otak",
      description: ` Otak-otak merupakan produk pengolahan dari daging ikan yang dicampur dengan tapioka dan bumbu yaitu: santan, garam, gula, lada, bawang putih, dan bawang merah. Produk otak-otak ikan berasal dari daerah Sumatera, kemudian berkembang ke daerah lain di Indonesia.`,
      backgroundUrl: otakOtak
    },
    {
      name: "rumah belah bubung",
      description: `Rumah Belah Bubung adalah rumah adat dari kepulauan Riau yang berada di Indonesia. Rumah Belah Bubung juga dikenal dengan nama rumah rabung atau rumah bubung melayu. Konon, nama rumah ini diberikan oleh orang-orang asing yang datang ke Indonesia seperti Cina dan Belanda.`,
      backgroundUrl: belahBubung
    },
    {
      name: "Pakaian teluk belangan dan Kebaya labuh",
      description: `Kebaya Labuh dan Teluk Balangga adalah baju adat dari Riau dan Kepri. Berasal dari Sumatera, pakaian adat ini merupakan sebuah kekayaan lokal yang ditetapkan oleh pemerintah Kepulauan Riau sebagai ikon pakaian adat dari daerah ini.`,
      backgroundUrl: telukbelangandanKebayalabuh
    },
    {
      name: "Tari malemang",
      description: `tari Melemang merupakan tarian tradisional yang berasal dari Tanjungpisau Negeri Bentan Penaga, kecamatan Bintan. Tari Melemang dimainkan kali pertama sekitar abad ke-12. Ketika itu, tari Melemang hanya dimainkan di istana Kerajaan Melayu Bentan yang pusatnya berada di Bukit Batu, Bintan.`,
      backgroundUrl: tarianMalemang
    },
    {
      name: "batik ikan tambal",
      description: `Kata “Ikan” mengacu pada ikan yang sesungguhnya. Makna filosofis dari Ikan Tambal adalah kebersamaan, kesederhanaan dalam kehidupan sosial, dan memperlakukan orang lain secara adil, terlepas dari kelas sosialnya. Pola gelombang menggambarkan naik turunnya kehidupan masyarakat dan berisi nasihat untuk menghadapi masalah sosial dengan kesabaran.`,
      backgroundUrl: ikanTambal
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

export default Tujuh;
