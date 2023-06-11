import React, { useState } from "react";
import "./styles.css";
import tamannasionalujungKulon from "./Image/Enambelas/taman nasional ujung kulon.webp";
import sateBandeng from "./Image/Enambelas/sate bandeng.jpg";
import sulahNyanda from "./Image/Enambelas/sulah nyanda.png";
import bajuKampret from "./Image/Enambelas/baju kampret.jpg";
import tariCukin from "./Image/Enambelas/tari cukin.jpg";
import batikBanten from "./Image/Enambelas/batik-banten.jpg";

const Enambelas = () => {
  const [active, setActive] = useState(0);

  const Culture = [
    {
      name: "taman nasional ujung Kulon",
      description: ` Taman Nasional Ujung Kulon adalah sebuah Kawasan Taman Nasional yang terletak di ujung paling barat pulau Jawa. Tepatnya di kecamatan Sumur dan Cimanggu kabupaten Pandeglang provinsi Banten. Luas Kawasan Taman Nasional Ujung Kulon adalah 122.956 Ha, dan 44.337 Ha dari keseluruhan luas Kawasan Taman Nasional Ujung Kulon merupakan perairan. `,
      backgroundUrl: tamannasionalujungKulon
    },
    {
      name: "sate Bandeng",
      description: `Sate Bandeng merupakan salah satu kuliner khas Banten. Makanan yang merupakan perpaduan daging ikan bandeng, santan, dan rempah-rempah ini, diketahui sudah ada sejak era sultan pertama Banten, Sultan Maulana Hasanuddin, pada 1552-1570.`,
      backgroundUrl: sateBandeng
    },
    {
      name: "Sulah Nyanda",
      description: `Sulah nyanda adalah rumah adat orang Badui yang berada di Provinsi Banten. Disebut sulah nyanda, karena atapnya terbuat dari daun nipah yang dikeringkan.`,
      backgroundUrl: sulahNyanda
    },
    {
      name: "Baju Kampret",
      description: ` Kampret adalah sebutan untuk pakaian adat Kasepuhan, yang berfungsi sebagai pakaian adat laki laki kasepuhan. Kampret ini merupakan model yang sederhana namun bersahaja, dimana disematkan kancing yang terbuat dari batok kelapa di bagian depannya.`,
      backgroundUrl: bajuKampret
    },
    {
      name: "Tari Cukin",
      description: `Tari Cukin merupakan tarian khas asal Kabupaten Tangerang. Tarian ini menggabungkan seni budaya tradisional Jawa, Sunda, Cina dan Betawi. Adapun keempat unsur budaya ini menggambarkan keanekaragaman etnis di wilayah Kabupaten Tangerang.`,
      backgroundUrl: tariCukin
    },
    {
      name: "Batik Mandar",
      description: `Filosofi motif jagung menggambarkan mimpi dan semangat hidup yang tidak pernah mati. Motif ini juga berarti bahwa orang yang berpikir positif akan lebih bahagia dan memiliki kualitas hidup yang lebih baik. Hidupnya digerakkan oleh semangat yang baik dan kepercayaan diri untuk mencapai kesuksesan.`,
      backgroundUrl: batikBanten
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

export default Enambelas;
