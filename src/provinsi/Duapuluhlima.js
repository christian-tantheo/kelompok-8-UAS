import React, { useState } from "react";
import "./styles.css";
import otonahaImage from "./Image/Duapuluhlima/Gorontalo/wisata otonaha.jpg";
import binteImage from "./Image/Duapuluhlima/Gorontalo/makanan binte.jpg";
import dulohupaImage from "./Image/Duapuluhlima/Gorontalo/rumah dulohupa.jpg";
import biliuImage from "./Image/Duapuluhlima/Gorontalo/pakaianbiliu.jpg";
import danaImage from "./Image/Duapuluhlima/Gorontalo/taridana.jpg";
import batikgorontalo from "./Image/Duapuluhlima/Gorontalo/batikgorontalo.png";

const Duapuluhlima = () => {
  const [active, setActive] = useState(0);

  const Culture = [
    {
      name: "Wisata Otonaha",
      description: ` Benteng Otanaha terletak di atas perbukitan Kelurahan Dembe I,
      Kecamatan Kota Barat, Kota Gorontalo. Lokasi benteng merupakan
      salah satu cagar budaya di Provinsi Gorontalo. Benteng memiliki 4
      buah tempat persinggahan dan 348 buah anak tangga ke puncak sampai
      ke lokasi benteng. Masing-masing jumlah anak tangga tidak sama
      untuk setiap persinggahan.`,
      backgroundUrl: otonahaImage
    },
    {
      name: "Binte",
      description: `Binte biluhuta atau dikenal pula dengan nama milu siram merpakan
      makanan khas masyarakat Gorontalo, Sulawesi, Indonesia. Binde
      biluhuta berasal dari Bahasa Gorontalo yaitu binte yang berarti
      "jagung", dan biluhuta artinya "disiram".`,
      backgroundUrl: binteImage
    },
    {
      name: "Rumah Dulohupa",
      description: `Ada bagian dalam rumah adat Dulohupa bergaya terbuka tanpa sekat.
      Selain itu, ada anjungan yang digunakan sebagai tempat untuk
      peristirahatan raja dan keluarga. Rumah adat Gorontalo terdapat
      banyak pilar kayu yang berfungsi sebagai penyokong rumah panggung.`,
      backgroundUrl: dulohupaImage
    },
    {
      name: "Pakaian Biliu ",
      description: ` Biliu adalah salah satu pakaian adat Gorontalo yang wajib
      digunakan mempelai wanita dalam upacara adat pernikahan. Biliu
      dalam perkembangannya dikenal sebagai salah satu pakaian adat yang
      unik dan penuh nilai-nilai filosofis.`,
      backgroundUrl: biliuImage
    },
    {
      name: "Tari Dana",
      description: `Tari Lenggang adalah tarian selamat datang yang khas dari Surabaya,
      Provinsi Jawa Timur. Tarian ini dimainkan oleh penari wanita yang
      menari dengan gerakan yang indah dan juga anggun.`,
      backgroundUrl: danaImage
    },
    {
      name: "Batik Jagung",
      description: `Filosofi motif jagung menggambarkan mimpi dan semangat hidup yang tidak pernah mati. Motif ini juga berarti bahwa orang yang berpikir positif akan lebih bahagia dan memiliki kualitas hidup yang lebih baik. Hidupnya digerakkan oleh semangat yang baik dan kepercayaan diri untuk mencapai kesuksesan.`,
      backgroundUrl: batikgorontalo
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

export default Duapuluhlima;
