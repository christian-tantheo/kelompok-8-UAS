import React, { useState } from "react";
import "./styles.css";
import ullenSentalu from "./Image/Duapuluh/ullen sentalu.jpg";
import Gudeg from "./Image/Duapuluh/gudeg.jpg";
import rumahJoglo from "./Image/Duapuluh/rumah joglo.jpeg";
import Surjan from "./Image/Duapuluh/surjan.jpg";
import tariAngguk from "./Image/Duapuluh/Tari angguk.jpg";
import ceplokKasatriyan from "./Image/Duapuluh/ceplokKasatriyan.jpg";

const Duapuluh = () => {
  const [active, setActive] = useState(0);

  const Culture = [
    {
      name: "ullen sentalu",
      description: `  Museum Ullen Sentalu merupakan salah satu museum milik swasta yang mengenalkan kebudayaan para bangsawan Mataram.  Lokasi museum ini berada di Jalan Boyong, Kaliurang, Kecamatan Pakem, Kabupaten Sleman, Yogyakarta.`,
      backgroundUrl: ullenSentalu
    },
    {
      name: "gudeg",
      description: ` gudeg itu sendiri merupakan masakan yang berbahan utama nangka muda atau oleh warga lokal disebut gori. Dalam prosesnya, potongan daging nangka ini direbus dengan gula merah dan santan dengan api kecil selama beberapa jam.`,
      backgroundUrl: Gudeg
    },
    {
      name: "rumah Joglo",
      description: `Pengertian Joglo sendiri berasal dari kata Tajug Loro (Juglo) yang artinya dua gunung. Dalam filosofi Jawa, gunung adalah tempat yang tinggi dan sakral. Jika melihat bangunan rumah Joglo, maka akan ditemukan dua gunung yang dapat dilihat dari bentuk atap rumah Joglo.`,
      backgroundUrl: rumahJoglo
    },
    {
      name: "Baju Surjan",
      description: `Surjan merupakan salah satu busana adat Jawa, khususnya Jawa Tengah dan Yogyakarta, yang dominan dikenakan pria. Surjan biasanya dipadukan dengan bawahan berupa kain jarik dan blangkon.`,
      backgroundUrl: Surjan
    },
    {
      name: "Tari Angguk",
      description: `Tari Angguk merupakan tarian tradisional khas Kabupaten Kulon Progo, yang memiliki hubungan erat dengan ritual atau upacara-upacara tradisi yang telah dilakukan secara turun temurun oleh masyarakat khususnya di Desa Hargomulyo, Kecamatan Kokap, Kabupaten Kulon Progo.`,
      backgroundUrl: tariAngguk
    },
    {
      name: "batik ceplok Kasatriyan",
      description: `Batik Ceplok Kasatriyan ini menggunakan campuran tiga motif, yaitu stilasi medali, parang, dan tiga ikan berkepala tunggal. Batik ini memiliki makna keberanian dan kegagahan.`,
      backgroundUrl: ceplokKasatriyan
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

export default Duapuluh;
