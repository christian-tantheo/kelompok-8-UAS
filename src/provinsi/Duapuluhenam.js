import React, { useState } from "react";
import "./styles.css";
import karampuangImage from "./Image/Duapuluhenam/Sulawesi Barat/wisata karampuang.jpg";
import tetuImage from "./Image/Duapuluhenam/Sulawesi Barat/kuetetu.jpg";
import sibatangImage from "./Image/Duapuluhenam/Sulawesi Barat/rumah-banoa-sibatang.jpg";
import pattuqduImage from "./Image/Duapuluhenam/Sulawesi Barat/pakaianpattuqdu.jpg";
import manurungImage from "./Image/Duapuluhenam/Sulawesi Barat/tarianmanurung.jpg";
import batiksulbarImage from "./Image/Duapuluhenam/Sulawesi Barat/batiksulbar.png";

const Duapuluhenam = () => {
  const [active, setActive] = useState(0);

  const Culture = [
    {
      name: "Wisata Karampuang",
      description: ` Pulau Karampuang adalah salah satu pulau yang terletak di Desa Karampuang, Kecamatan Mamuju, Kabupaten Mamuju, Provinsi Sulawesi Barat. Pulau seluas lebih kurang 6 kilometer per segi ini, mempunyai penduduk sebanyak 2.937 jiwa pada 2018. Dari pusat kota Mamuju, pulau ini dapat ditempuh selama lebih kurang 15-20 menit dengan menggunakan perahu sewaan. Jaraknya sekitar 3 kilometer dari daratan Mamuju. Itulah sebabnya pulau ini bisa terlihat jelas dari Anjungan Pantai Manakarra.`,
      backgroundUrl: karampuangImage
    },
    {
      name: "Kue Tetu",
      description: `kue tetu adalah sejenis kue tradisional dari Sulawesi Barat, Indonesia. Kue ini terbuat dari campuran beras ketan, kelapa parut, dan gula merah. Biasanya kue tetu dibentuk menjadi bulatan kecil dan dibungkus dengan daun pisang sebelum dikukus.`,
      backgroundUrl: tetuImage
    },
    {
      name: "Pakaian Pattuqdu ",
      description: ` Baju Pattuqduq Towaine sering digunakan pada pernikahan adat maupun untuk busana tari Pattiqtuq. Baju ini memiliki jumlah yang cukup banyak menyesuaikan acara yang sedang dibawakan.`,
      backgroundUrl: pattuqduImage
    },
    {
      name: "Tari Dana",
      description: `Tari Lenggang adalah tarian selamat datang yang khas dari Surabaya,
      Provinsi Jawa Timur. Tarian ini dimainkan oleh penari wanita yang
      menari dengan gerakan yang indah dan juga anggun.`,
      backgroundUrl: manurungImage
    },
    {
      name: "Batik Mandar",
      description: `Filosofi motif jagung menggambarkan mimpi dan semangat hidup yang tidak pernah mati. Motif ini juga berarti bahwa orang yang berpikir positif akan lebih bahagia dan memiliki kualitas hidup yang lebih baik. Hidupnya digerakkan oleh semangat yang baik dan kepercayaan diri untuk mencapai kesuksesan.`,
      backgroundUrl: batiksulbarImage
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

export default Duapuluhenam;
