import React, { useState } from "react";
import "./styles.css";
import candiBorobudur from "./Image/Sembilanbelas/candi borobudur.jpg";
import sotoKudus from "./Image/Sembilanbelas/soto kudus.jpeg";
import rumahTajug from "./Image/Sembilanbelas/rumah tajug.jpeg";
import bajuBasahan from "./Image/Sembilanbelas/baju basahan.jpg";
import tariSerimpi from "./Image/Sembilanbelas/tari serimpi.jpg";
import batikKusuma from "./Image/Sembilanbelas/batikkusuma.jpg";

const Sembilanbelas = () => {
  const [active, setActive] = useState(0);

  const Culture = [
    {
      name: "candi borobudur",
      description: ` Candi Borobudur merupakan candi Buddha yang terletak di Borobudur, Magelang, Jawa Tengah. Candi ini terletak kurang lebih 100 km di sebelah barat daya Semarang, 86 km di sebelah barat daya Surakarta, dan 40 km di sebelah barat laut Yogyakarta.`,
      backgroundUrl: candiBorobudur
    },
    {
      name: "soto kudus",
      description: `Sate Bandeng merupakan salah satu kuliner khas Banten. Makanan yang merupakan perpaduan daging ikan bandeng, santan, dan rempah-rempah ini, diketahui sudah ada sejak era sultan pertama Banten, Sultan Maulana Hasanuddin, pada 1552-1570.`,
      backgroundUrl: sotoKudus
    },
    {
      name: "rumah Tajug",
      description: `Rumah Tajug adalah atap berbentuk piramidal atau limas bujur sangkar, yaitu dasar persegi empat sama-sisi dan satu puncak. Atap tajug biasanya digunakan untuk bangunan suci di Asia Tenggara termasuk Indonesia, seperti masjid atau cungkup makam.`,
      backgroundUrl: rumahTajug
    },
    {
      name: "Baju Basahaan",
      description: `Busana Basahan merupakan pakaian adat Jawa Tengah. Pakaian ini menjadi warisan budaya dari Kerajaan Mataram. Ciri khas busana Basahan adalah tidak adanya atasan yang menutup seluruh badan. Bagi mempelai pria, biasanya bertelanjang dada`,
      backgroundUrl: bajuBasahan
    },
    {
      name: "Tari Serimpi",
      description: `Tarian serimpi merupakan tarian klasik yang berasal dari kerajaan Mataram. Sejak perpecahan Mataram menjadi 2 yakni Surakarta dan Yogyakarta tarian ini juga memiliki sedikit perbedaan antara keduanya.`,
      backgroundUrl: tariSerimpi
    },
    {
      name: "Batik Kusuma",
      description: `Motif batik Parang Kusumo berasal dari daerah Yogyakarta ini memiliki motif seperti huruf ‘S’ yang memiliki bulatan dan memiliki pola permata pada ujungnya. Motif Parang Kusumo Jogja memiliki kemiripan pola dengan Parang Kusumo Solo. Namun, apabila diperhatikan secara jelas maka motif ‘S’ yang ada pada Parang Kusumo Jogja lebih lebar dibandingkan motif Parang Kusumo Solo.`,
      backgroundUrl: batikKusuma
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

export default Sembilanbelas;
