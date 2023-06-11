import React, { useState } from "react";
import "./styles.css";
import ampatImage from "./Image/Tigapuluhtiga/raja ampat.jpg";
import ikanImage from "./Image/Tigapuluhtiga/ikan cakalang asar.jpg";
import honaiImage from "./Image/Tigapuluhtiga/honai.jpg";
import holimImage from "./Image/Tigapuluhtiga/holim.png";
import soangiImage from "./Image/Tigapuluhtiga/tari soangi.jpg";
import batikpapua from "./Image/Tigapuluhtiga/batikpapuabarat.png";

const Tigapuluhtiga = () => {
  const [active, setActive] = useState(0);

  const Culture = [
    {
      name: "Raja Ampat",
      description: ` Kepulauan Raja Ampat adalah gugusan kepulauan yang berlokasi di
      barat bagian Semenanjung Kepala Burung (Vogelkoop) Pulau Papua.
      Secara administrasi, gugusan ini berada di bawah Kabupaten Raja
      Ampat dan Kota Sorong, Provinsi Papua Barat Daya. Kepulauan ini
      sekarang menjadi tujuan para penyelam yang tertarik akan keindahan
      pemandangan bawah lautnya. `,
      backgroundUrl: ampatImage
    },
    {
      name: "Ikan Cakalang asar",
      description: `Ikan Asar pada dasarnya adalah sama seperti ikan asap. Namun, yang
      membedakan adalah cara mengasapinya. Jika ikan asap ditaruh di
      atas asap secara horizontal, maka ikan asar ditaruh diagonal di
      sisi bara yang menghasilkan asap. `,
      backgroundUrl: ikanImage
    },
    {
      name: "Rumah Honai",
      description: ` Rumah honai atau rumah onai merupakan rumah tradisional masyarakat
      Papua Pegunungan dan Papua Tengah khususnya suku Dani.Rumah honai
      berbentuk bulat sederhana dengan pintu kecil dan tidak dilengkapi
      jendela. Ada pula yang berbentuk persegi panjang, rumah jenis ini
      namanya Ebe'ai (Honai Perempuan).`,
      backgroundUrl: honaiImage
    },
    {
      name: "Baju Holim",
      description: `Pakaian Holim, nama lain dari Holim ini adalah Koteka, pakaian
      khusus pria. Tentu sudah tidak asing lagi bukan? Koteka digunakan
      dengan cara diikat ke pinggang menggunakan seutas tali, sehingga
      posisinya akan mengacung ke atas.`,
      backgroundUrl: holimImage
    },
    {
      name: "Tari Soangi",
      description: ` Tari Soanggi atau tari Suanggi adalah tarian adat yang berasal dari
      daerah pantai Teluk Cendrawasih, Kabupaten Waropen, Provinsi Papua
      Barat. Eksistensi awal tari ini tidak begitu jelas, tetapi tarian
      tersebut merupakan salah satu bentuk ekspresi masyarakat Papua
      Barat yang masih kental dengan nuansa magis.`,
      backgroundUrl: soangiImage
    },
    {
      name: "Batik motif burung cendrawasih",
      description: `Burung Cendrawasih merupakan motif yang menggambarkan burung endemik di tanah Papua. Cendrawasih adalah salah satu spesies burung langka, dilindungi oleh pemerintah Indonesia. Burung ini dipercaya sebagai burung surga yang menghubungkan kehidupan di bumi dengan surga. Motif ini juga dianggap sebagai motif sakral dan mewakili identitas masyarakat Papua, baik di provinsi Papua maupun Papua Barat.`,
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

export default Tigapuluhtiga;
