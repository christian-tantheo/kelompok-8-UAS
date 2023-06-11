import React, { useState } from "react";
import "./styles.css";
import pantaiImage from "./Image/Duapuluhtiga/Nusa Tenggara Timur/pantai lasiana.jpg";
import bambuImage from "./Image/Duapuluhtiga/Nusa Tenggara Timur/nasibambubakar.jpg";
import rumahmusalakiImage from "./Image/Duapuluhtiga/Nusa Tenggara Timur/rumahmusalaki.jpg";
import sukuroteImage from "./Image/Duapuluhtiga/Nusa Tenggara Timur/baju adat suku rote.jpg";
import tariceranaImage from "./Image/Duapuluhtiga/Nusa Tenggara Timur/taricerana.jpg";
import batikNTT from "./Image/Duapuluhtiga/Nusa Tenggara Timur/batikhasntt.jpg";

const Duapuluhtiga = () => {
  const [active, setActive] = useState(0);

  const Culture = [
    {
      name: "Pantai Lasiana",
      description: ` Pantai Lasiana yang berlokasi di Kelurahan Lasiana, Kecamatan
      Kupang Tengah, Kupang, NTT ini berjarak sekitar 12 km ke arah
      timur dari pusat Kota Kupang. Di pantai yang menjadi alternatif
      wisata andalan masyarakat Kupang ini, pengunjung dapat melakukan
      beragam aktivitas, seperti berenang, memancing, bermain sepak
      bola, karaoke atau sekedar bermain air di pantainya. Makin ke
      sini, semakin banyak wisatawan baik dari dalam maupun luar kota
      Kupang yang mengunjungi pantai ini.`,
      backgroundUrl: pantaiImage
    },
    {
      name: "Nasi bambu bakar",
      description: `Nasi Bakar Bambu khas Manggarai Nusa Tenggara Timur (NTT)
      menawarkan perpaduan rasa eksotis yang mengugah selera. Masyarakat
      NTT menyebutnya dengan nama Kolo, nasi bakar yang dimasak
      menggunakan bambu.`,
      backgroundUrl: bambuImage
    },
    {
      name: "Rumah Musalaki",
      description: `Rumah musalaki di Ende atau Uma Manaran yakni Umanetan Rimean di
      Belu adalah contoh rumah adat atau rumah tradisional yang banyak
      dijumpai di provinsi Nusa Tenggara Timur, Indonesia. Rumah ini
      sendiri menjadi lambang dari provinsi Nusa Tenggara Timur. Rumah
      adat ini sendiri merupakan tempat tinggal khusus bagi kepala suku
      dari beberapa suku di provinsi Nusa Tenggara Timur.`,
      backgroundUrl: rumahmusalakiImage
    },
    {
      name: "Baju adat suku rote",
      description: `Busana tradisional suku Rote dinamakan sebagai Tenun Ikat yang
      terbuat dari kain tenun. Pakaian ini sering dipadukan dengan
      kemeja putih panjang dengan bawahan sarung tenun ikat berwarna
      gelap.`,
      backgroundUrl: sukuroteImage
    },
    {
      name: "Tari Cerana",
      description: `Tari cerana merupakan tari selamat datang atau tarian penyambutan
      yang khas dari Kupang, Provinsi Nusa Tenggara Timur (NTT). Tarian
      ini biasanya diakhiri dengan menyajikan sirih dan pinang di dalam
      cerana sebagai simbol dari penerimaan masyarakt terhadap tamunya
      dengan hati yang tulus, bersih dan penuh kasih.`,
      backgroundUrl: tariceranaImage
    },
    {
      name: "Batik Kuda Sepasang",
      description: `Tarian Baksa Kembang adalah Tarian untuk menyambut tamu-tamu
      kehormatan atau kerabat kerajaan. Tarian ini juga dilakukan oleh
      masyarakat umum dalam acara-acara pernikahan atau acara-acara adat
      lainnya.`,
      backgroundUrl: batikNTT
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

export default Duapuluhtiga;
