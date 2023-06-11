import React, { useState } from "react";
import "./styles.css";
import pulauKembangImage from "./Image/Tigabelas/pulau_kembang_1290.jpg";
import sotoBanjarImage from "./Image/Tigabelas/soto-banjar.jpg";
import rumahFasadeImage from "./Image/Tigabelas/Fasade_Bubungan_Tinggi_Teluk_Selong_Martapura.jpg";
import pakaianBegadahImage from "./Image/Tigabelas/Begajah-Gemuling-Baular-Lulut.jpg";
import tariBaksaImage from "./Image/Tigabelas/Tari_Baksa_Kambang.jpg";
import bayamRaja from "./Image/Tigabelas/bayam raja.png";

const Tigabelas = () => {
  const [active, setActive] = useState(0);

  const Culture = [
    {
      name: "Pulau Kembang",
      description: `Pulau Kembang adalah sebuah delta yang terletak di tengah sungai
    Barito yang termasuk di dalam wilayah administratif kecamatan
    Alalak, Kabupaten Barito Kuala, provinsi Kalimantan Selatan.`,
      backgroundUrl: pulauKembangImage
    },
    {
      name: "Soto Banjar",
      description: `Soto Banjar adalah salah satu masakan tradisional dari Kalimantan
    selatan, kususnya Banjarmasin. Soto Banjar merupakan salah satu
    kuliner yang terkenal di Indonesia. Berbeda dengan soto lainnya di
    Indonesia, soto ini memiliki keunikan dalam penyajian dan cita
    rasanya.`,
      backgroundUrl: sotoBanjarImage
    },
    {
      name: "Rumah fasade bubugnan tinggi teluk selong martapura",
      description: `Rumah adat Banjar di Desa Teluk Selong Ulu, memunggungi jalan raya
    arah Martapura – Dalam Pagar, sekitar 4 km dari kota Martapura.
    Rumah Bubungan Tinggi ini dibangun pada tahun 1867 oleh saudagar
    batu permata bernama H.M. Arif dan Hj. Patimah, dan kini ditempati
    oleh Fauziah (63 tahun).`,
      backgroundUrl: rumahFasadeImage
    },
    {
      name: "Pakaian begadah gemuling baular lulut",
      description: `Bagajah Gamuling Baular Lulut merupakan busana yang dikenakan oleh
    keturunan raja dan bangsawan. Seiring perkembangan zaman, baju ini
    pun kerap menjadi busana pengantin dalam pernikahan adat
    Kalimantan Selatan bahkan hingga sekarang.`,
      backgroundUrl: pakaianBegadahImage
    },
    {
      name: "Tari baksa kambang",
      description: `Tarian Baksa Kembang adalah Tarian untuk menyambut tamu-tamu
    kehormatan atau kerabat kerajaan. Tarian ini juga dilakukan oleh
    masyarakat umum dalam acara-acara pernikahan atau acara-acara adat
    lainnya.`,
      backgroundUrl: tariBaksaImage
    },
    {
      name: "Batik Bayam Raja",
      description: `Motif batik Kalimantan yang pertama, yakni motif Bayam Raja khas Kalimantan Selatan. Motif Bayam Raja biasanya dibuat untuk mereka yang memiliki kedudukan terhormat atau dianggap memiliki martabat lebih tinggi di kalangan masyarakat. Motif Bayam Raja sendiri mengandung makna leluhur yang bermartabat dan dihormati.`,
      backgroundUrl: bayamRaja
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

export default Tigabelas;
