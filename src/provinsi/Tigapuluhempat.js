import React, { useState } from "react";
import "./styles.css";
import tamanImage from "./Image/Tigapuluhempat/taman nasional lorentz.jpg";
import papedaImage from "./Image/Tigapuluhempat/papeda kedua.jpg";
import keduaImage from "./Image/Tigapuluhempat/hanoi kedua.jpg";
import bajuImage from "./Image/Tigapuluhempat/baju kain rumput.webp";
import sajojoImage from "./Image/Tigapuluhempat/tari sajojo.png";
import batikpapua from "./Image/Tigapuluhempat/batikpapua.jpg";

const Tigapuluhempat = () => {
  const [active, setActive] = useState(0);

  const Culture = [
    {
      name: "Taman Nasional Lorentz",
      description: `Taman Nasional Lorentz adalah sebuah taman nasional yang terletak
      diantara 3 provinsi di Pulau Papua, Indonesia yakni Papua
      Pegunungan, Papua Tengah dan Papua Selatan. Lahan yang
      ditempatinya seluas wilayah sebesar 2.505.600 hektare. Dalam
      pembagian administraif, Taman Nasional Lorent berada dalam wilayah
      Kabupaten Jayawijaya, Kabupaten Mimika, Kabupaten Asmat, Kabupaten
      Yahukimo, dan Kabupaten Puncak Jaya.`,
      backgroundUrl: tamanImage
    },
    {
      name: "Papeda",
      description: `Papeda adalah makanan berupa bubur sagu khas Maluku dan Papua yang biasanya disajikan dengan ikan tongkol atau mubara yang dibumbui dengan kunyit.Papeda berwarna putih dan bertekstur lengket menyerupai lem dengan rasa yang tawar.[1] Papeda merupakan makanan yang kaya serat, rendah kolesterol, dan cukup bernutrisi.`,
      backgroundUrl: papedaImage
    },
    {
      name: "Rumah Hanoi",
      description: `Rumah honai atau rumah onai merupakan rumah tradisional masyarakat
      Papua Pegunungan dan Papua Tengah khususnya suku Dani. Rumah honai
      berbentuk bulat sederhana dengan pintu kecil dan tidak dilengkapi
      jendela. Ada pula yang berbentuk persegi panjang, rumah jenis ini
      namanya Ebe'ai (Honai Perempuan). `,
      backgroundUrl: keduaImage
    },
    {
      name: "Baju kain rumput",
      description: ` Kain Rumput merupakan pakaian adat dari Papua yang juga dibuat
      dengan bahan yang alami. Bahan kain rumput tersebut yaitu daun
      sagu yang sudah kering. Sementara, daun yang dipilih agar bisa
      digunakan untuk pembuatan kain rumput yaitu daun di bagian pucuk
      dan diambil pada saat air pasang. Kalau beberapa pakaian lainnya
      sering dikenakan masyarakat pedalaman, busana kain rumput lebih
      umum dipakai masyarakat di Papua yang cenderung lebih modern.`,
      backgroundUrl: bajuImage
    },
    {
      name: "Tari Sajojo",
      description: `   Tari Sajojo adalah tarian tradisional yang liriknya berbahasa Moi
      yang berasal dari daerah Sorong, Papua Barat. Tarian ini sering
      dijadikan penampilan di berbagai acara, baik acara adat, budaya,
      maupun sekadar hiburan saja. Tarian ini sangat terkenal di Papua.
      Tarian ini bisa ditarikan oleh berbagai jenis kalangan, baik pria
      maupun wanita, tua maupun muda, karena tarian ini termasuk tarian
      pergaulan.`,
      backgroundUrl: sajojoImage
    },
    {
      name: "Batik bermotif Asmat",
      description: `Motif asmat termasuk salah satu motif batik Papua terpopuler. Penamaannya diambil dari suku asli yang menghuni pulau Papua yaitu Asmat. Batik ini didominasi dengan corak ukiran yang khas seperti patung duduk kayu. Sedangkan warna batiknya juga memiliki ciri khas yaitu menggunakan warna tanah yang merah kecokelatan.`,
      backgroundUrl: batikpapua
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

export default Tigapuluhempat;
