import React, { useState } from "react";
import "./styles.css";
import lembahBaliem from "./Image/Tigapuluhenam/lembah baliem.jpg";
import Koteka from "./Image/Tigapuluhenam/koteka.jpg";
// import honaiImage from "./Image/Tigapuluhenam/honai.jpg";
// import holimImage from "./Image/Tigapuluhenam/holim.png";
// import soangiImage from "./Image/Tigapuluhenam/tari soangi.jpg";
// import batikpapua from "./Image/Tigapuluhenam/batikpapuabarat.png";

const Tigapuluhenam = () => {
  const [active, setActive] = useState(0);

  const Culture = [
    {
      name: "lembah baliem",
      description: ` Lembah Baliem (atau Lembah Balim) adalah lembah di pegunungan Jayawijaya dan merupakan lokasi ibukota Provinsi Papua Pegunungan. Lembah Baliem berada di ketinggian 1.600 meter dari permukaan laut yang dikelilingi pegunungan dengan pemandangannya yang indah dan masih alami. Suhu bisa mencapai 10-15 derajat celcius pada waktu malam. `,
      backgroundUrl: lembahBaliem
    },
    {
      name: "Koteka",
      description: `Koteka adalah pakaian untuk menutup kemaluan laki-laki dalam budaya sebagian penduduk asli Pulau Papua. Koteka terbuat dari Moncong burung taong-taong (Riambo) dan kulit labu. `,
      backgroundUrl: Koteka
    }
    // {
    //   name: "Rumah Honai",
    //   description: ` Rumah honai atau rumah onai merupakan rumah tradisional masyarakat
    //   Papua Pegunungan dan Papua Tengah khususnya suku Dani.Rumah honai
    //   berbentuk bulat sederhana dengan pintu kecil dan tidak dilengkapi
    //   jendela. Ada pula yang berbentuk persegi panjang, rumah jenis ini
    //   namanya Ebe'ai (Honai Perempuan).`,
    //   backgroundUrl: honaiImage
    // },
    // {
    //   name: "Baju Holim",
    //   description: `Pakaian Holim, nama lain dari Holim ini adalah Koteka, pakaian
    //   khusus pria. Tentu sudah tidak asing lagi bukan? Koteka digunakan
    //   dengan cara diikat ke pinggang menggunakan seutas tali, sehingga
    //   posisinya akan mengacung ke atas.`,
    //   backgroundUrl: holimImage
    // },
    // {
    //   name: "Tari Soangi",
    //   description: ` Tari Soanggi atau tari Suanggi adalah tarian adat yang berasal dari
    //   daerah pantai Teluk Cendrawasih, Kabupaten Waropen, Provinsi Papua
    //   Barat. Eksistensi awal tari ini tidak begitu jelas, tetapi tarian
    //   tersebut merupakan salah satu bentuk ekspresi masyarakat Papua
    //   Barat yang masih kental dengan nuansa magis.`,
    //   backgroundUrl: soangiImage
    // },
    // {
    //   name: "Batik motif burung cendrawasih",
    //   description: `Burung Cendrawasih merupakan motif yang menggambarkan burung endemik di tanah Papua. Cendrawasih adalah salah satu spesies burung langka, dilindungi oleh pemerintah Indonesia. Burung ini dipercaya sebagai burung surga yang menghubungkan kehidupan di bumi dengan surga. Motif ini juga dianggap sebagai motif sakral dan mewakili identitas masyarakat Papua, baik di provinsi Papua maupun Papua Barat.`,
    //   backgroundUrl: batikpapua
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

export default Tigapuluhenam;
