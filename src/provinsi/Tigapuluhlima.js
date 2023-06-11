import React, { useState } from "react";
import "./styles.css";
import kuesaguBagea from "./Image/Tigapuluhlima/kue sagu bagea.jpg";
import perairanKwatisore from "./Image/Tigapuluhlima/perairan kwatisore.jpg";
// import panjaeKalbar from "./Image/Tigapuluhlima/panjae kalbar.png";
// import pakaianadatkalimantanbaratkingBaba from "./Image/Tigapuluhlima/Pakaian-adat-Kalimantan-Barat-King-Baba.jpg";
// import tariMonong from "./Image/Tigapuluhlima/monong.jpg";
// import dayakKamang from "./Image/Tigapuluhlima/dayakkamang.png";

const Tigabelas = () => {
  const [active, setActive] = useState(0);

  const Culture = [
    {
      name: "perarian kwatisore",
      description: `Perairan Kwatisore merupakan salah satu kawasan dalam Taman Nasional Teluk Cenderawasih (TNTC) yang menjadi tempat beragregasinya hiu paus, dimana kehadirannya ditemukan sepanjang tahun,namun demikian kehadiran hiu paus di perairan ini sering berubah ubah terkait dengan jumlahwaktu kehadiran.`,
      backgroundUrl: perairanKwatisore
    },
    {
      name: "kue sagu bagea",
      description: `     Bagea adalah gula halus, biji kenari yang telah dicincang, tepung sagu, minyak sayur, tepung terigu yang telah diayak, kacang tanah yang dicincang halus, kayu manis bubuk, dan cengkih bubuk.`,
      backgroundUrl: kuesaguBagea
    }
    // {
    //   name: "rumah panjang",
    //   description: `Rumah Panjang (rumah Radank) adalah salah satu rumah adat dari
    //   daerah Kalimantan Barat. Rumah Panjang adalah ciri khas dari
    //   masyarakat Dayak yang tinggal di daerah Kalimantan Barat. Hal
    //   ini dikarenakan rumah panjang adalah gambaran sosial kehidupan
    //   masyarakat Dayak di Kalimantan Barat. Rumah panjang juga
    //   merupakan pusat kehidupan dari masyarakat Dayak.`,
    //   backgroundUrl: panjaeKalbar
    // },
    // {
    //   name: " pakaian adat king baba",
    //   description: `King Baba adalah nama pakaian adat yang digunakan oleh laki laki
    //   yang berasal dari suku Dayak. Pakaian ini bila dari segi bentuknya
    //   akan serupa dengan pakaian milik perempuan, hanya saja dari segi
    //   bentuknya lebih sederhana.`,
    //   backgroundUrl: pakaianadatkalimantanbaratkingBaba
    // },
    // {
    //   name: "Tari monong",
    //   description: `Tari Monong adalah tari penolak penyakit supaya penderita dapat
    //   sembuh kembali. Tarian tersebut dihadirkan saat tetua atau dukun
    //   tengah dalam keadaan trance (di bawah alam sadar)`,
    //   backgroundUrl: tariMonong
    // },
    // {
    //   name: "Dayak Kambang",
    //   description: `Tarian Baksa Kembang adalah Tarian untuk menyambut tamu-tamu
    //   kehormatan atau kerabat kerajaan. Tarian ini juga dilakukan oleh
    //   masyarakat umum dalam acara-acara pernikahan atau acara-acara adat
    //   lainnya.`,
    //   backgroundUrl: dayakKamang
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

export default Tigabelas;
