import React, { useState } from "react";
import "./styles.css";
import kawahPutih from "./Image/Delapanbelas/Kawah Putih.jpg";
import Batagor from "./Image/Delapanbelas/batagor.webp";
import badakHeuay from "./Image/Delapanbelas/badak heuay.jpg";
import bajuBedahan from "./Image/Delapanbelas/baju bedahan.jpg";
import tariJaipong from "./Image/Delapanbelas/tari jaipong.jpeg";
import megaMendung from "./Image/Delapanbelas/megamendung.jpeg";

const Delapanbelas = () => {
  const [active, setActive] = useState(0);

  const Culture = [
    {
      name: "kawah putih",
      description: ` Kawah Putih adalah tempat wisata di Bandung yang paling terkenal. Berlokasi di Ciwidey, Jawa Barat, kurang lebih sekitar 50 KM arah selatan kota Bandung, Kawah Putih adalah sebuah danau yang terbentuk akibat dari letusan Gunung Patuha.`,
      backgroundUrl: kawahPutih
    },
    {
      name: "Batagor",
      description: `Sate Bandeng merupakan salah satu kuliner khas Banten. Makanan yang merupakan perpaduan daging ikan bandeng, santan, dan rempah-rempah ini, diketahui sudah ada sejak era sultan pertama Banten, Sultan Maulana Hasanuddin, pada 1552-1570.`,
      backgroundUrl: Batagor
    },
    {
      name: "badak heuay",
      description: `Sulah nyanda adalah rumah adat orang Badui yang berada di Provinsi Banten. Disebut sulah nyanda, karena atapnya terbuat dari daun nipah yang dikeringkan.`,
      backgroundUrl: badakHeuay
    },
    {
      name: "Baju Bedahan",
      description: `Baju Bedahan merupakan salah satu pakaian adat Jawa Barat. Baju ini digunakan oleh Suku Sunda yang memiliki status sosial menengah. Baju Bedahan berbentuk baju atasan untuk kaum pria. Di masa penjajahan Belanda, baju ini biasanya dipakai pegawai negeri dan pamongpraja.`,
      backgroundUrl: bajuBedahan
    },
    {
      name: "Tari Jaipong",
      description: `Tarian Jaipong adalah tarian gabungan dari sejumlah kesenian tradisional, misalnya pencak silat, ketuk tilu, dan wayang golek. Dari situlah tarian ini populer sebagai tarian yang memiliki gerakan-gerakan yang unik, energik, dan sederhana.`,
      backgroundUrl: tariJaipong
    },
    {
      name: "batik Mega Mendung",
      description: `Motif Mega Mendung adalah salah satu jenis batik yang berasal dari daerah Cirebon, Jawa Barat. Berbeda dengan jenis batik lainnya, salah satu yang menjadi ciri khas dari batik motif Mega Mendung adalah ukiran awan dan langit yang digambarkan dalam batik`,
      backgroundUrl: megaMendung
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

export default Delapanbelas;
