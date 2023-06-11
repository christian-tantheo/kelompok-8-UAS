import React, { useState } from "react";
import "./styles.css";
import museumkebudayaanAsmat from "./Image/Tigapuluhtujuh/museum kebudayaan asmat.jpg";
// import wokuImage from "./Image/Tigapuluhtiga/woku komo-komo.jpg";
// import balileoImage from "./Image/Tigapuluhdua/balileo.webp";
// import celeImage from "./Image/Tigapuluhdua/baju cele.jpg";
// import cakaleleImage from "./Image/Tigapuluhdua/tari cakalele.jpg";
// import batikmalukuutaraImage from "./Image/Tigapuluhdua/batikmalukuutara.jpg";

const Tigapuluhtujuh = () => {
  const [active, setActive] = useState(0);

  const Culture = [
    {
      name: "Museum kebudayaan asmat",
      description: ` Museum Kebudayaan dan Kemajuan Asmat adalah sebuah museum yang terletak di kota Agats, Provinsi Papua, Indonesia. Museum ini disusun oleh misionaris OSC Frank Trenkenschuh pada tahun 1969 sebagai jalan untuk mempertahankan kebudayaan-kebudayaan Asmat serta memberikan kontribusi ekonomi bagi orang-orang Asmat. `,
      backgroundUrl: museumkebudayaanAsmat
    }
    // {
    //   name: "Woku Komo-komo",
    //   description: ` Woku Komo- Komo adalah makanan yang cukup menjadi primadona bila
    //   kamu berkunjung ke Maluku, Indonesia Timur. Berbahan dasar sagu
    //   atau batang rumbia ini termasuk salah satu makan pokok masyarakat
    //   setempat yang biasa dikonsumsi sebagai lauk dari hidangan utama.
    //   Hal tersebut karena cara pembuatannya yang cukup mudah dan bahan
    //   bakunya yang mudah untuk ditemui.`,
    //   backgroundUrl: wokuImage
    // },
    // {
    //   name: "Rumah Balileo",
    //   description: ` Baileo adalah rumah adat Maluku dan Maluku Utara, Indonesia.[1]
    //   Baileo merupakan representasi kebudayaan Maluku dan memiliki
    //   fungsi yang sangat penting bagi kehidupan masyarakat.Baileo adalah
    //   identitas setiap negeri di Maluku selain Masjid atau Gereja.`,
    //   backgroundUrl: balileoImage
    // },
    // {
    //   name: "Baju Cele",
    //   description: ` Baju Cele adalah pakaian tradisional yang berasal dari Maluku.
    //   Pakaian ini memiliki motif garis-garis geometris atau
    //   berkotak-kotak kecil. Pakaian ini biasa dipadupadankan dengan kain
    //   salele yang diletakkan pada bahu dan biasa dikenakan pada upacara
    //   adat. Warna baju ini adalah warna-warna cerah, tetapi lebih sering
    //   didominasi dengan warna merah.`,
    //   backgroundUrl: celeImage
    // },
    // {
    //   name: "Tari Cakalele",
    //   description: ` Cakalele adalah tarian perang tradisional Maluku yang digunakan
    //   untuk menyambut tamu ataupun dalam perayaan adat.Biasanya, tarian
    //   ini dibawakan oleh 30 pria dan wanita.Tarian ini dilakukan secara
    //   berpasangan dengan iringan musik drum, flute, bia (sejenis musik
    //   tiup).`,
    //   backgroundUrl: cakaleleImage
    // },
    // {
    //   name: "Batik Tubo",
    //   description: `Maluku Utara punya batik, yaitu Tubo – Ternate. Pengambilan nama batik Tubo sendiri adalah berasal dari sebuah kampung di Ternate dimana batik Ternate tersebut pertama kali di buat. Warga Tubo Ternate awalnya membuat batik tersebut sejak tahun 2010 dan setelah berjalannya waktu ternyata banyak yang suka dengan batik Tubo ini.`,
    //   backgroundUrl: batikmalukuutaraImage
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

export default Tigapuluhtujuh;
