import React, { useState } from "react";
import "./styles.css";
import asiaFarmHayDay from "./Image/Enam/asia farm hay day.jpeg";
import gulaiBelacan from "./Image/Enam/gulai belacan.jpg";
import rumahAdatSelasoJatuhKembar from "./Image/Enam/Rumah Adat Selaso Jatuh Kembar.jpg";
import telukBelanganDanKebayaLabuh from "./Image/Enam/teluk belangan dan kebaya labuh - Copy.jpg";
import tariZapin from "./Image/Enam/tari zapin.jpg";
import awanLarat from "./Image/Enam/awan larat.png";

const Enam = () => {
  const [active, setActive] = useState(0);

  const Culture = [
    {
      name: "Asia Farm Hay Day",
      description: ` Asia Farm adalah salah satu fitur dalam permainan Hay Day. Hay Day adalah permainan simulasi pertanian yang populer di mana pemain dapat mengelola dan mengembangkan peternakan mereka sendiri. `,
      backgroundUrl: asiaFarmHayDay
    },
    {
      name: "Gulai Belacan",
      description: `Gulai Belacan adalah sebuah hidangan khas dari masakan Riau. Gulai ini menggunakan bahan utama belacan, yaitu pasta udang yang diolah dan dibumbui dengan rempah-rempah serta bahan tambahan seperti daging, ikan, atau sayuran.`,
      backgroundUrl: gulaiBelacan
    },
    {
      name: "Rumah Selaso Jatuh Kembar",
      description: `Rumah Selaso Jatuh Kembar adalah sebuah rumah adat tradisional yang berasal dari daerah Palembang, Sumatera Selatan, Indonesia. Nama "Selaso Jatuh Kembar" mengacu pada atap rumah yang memiliki dua pasang kembaran dan dua tingkat, memberikan kesan simetris dan indah.`,
      backgroundUrl: rumahAdatSelasoJatuhKembar
    },
    {
      name: "Baju Teluk Belangan Dan Selaso Jatuh Kembar",
      description: `Baju Teluk Belangan dan Selaso Jatuh Kembar adalah pakaian adat tradisional yang berasal dari daerah Palembang, Sumatera Selatan, Indonesia. Baju Teluk Belangan adalah baju tradisional pria yang terdiri dari baju panjang dengan kerah lebar dan lengan pendek. Selaso Jatuh Kembar, di sisi lain, adalah pakaian adat wanita yang terdiri dari kebaya panjang yang memiliki potongan asimetris di bagian depan dan belakang serta lengan panjang. `,
      backgroundUrl: telukBelanganDanKebayaLabuh
    },
    {
      name: "Tari Zapin",
      description: `Tari Zapin adalah tarian tradisional yang berasal dari masyarakat Melayu di Indonesia, Malaysia, dan Singapura. Tarian ini menggabungkan gerakan tubuh yang lincah dengan irama musik yang menggembirakan. `,
      backgroundUrl: tariZapin
    },
    {
      name: "Awan Larat",
      description: `Batik Awan Larat adalah motif batik tradisional yang berasal dari daerah Riau, Indonesia. Motif ini menggambarkan pola awan yang terlihat seperti larat atau laba-laba. `,
      backgroundUrl: awanLarat
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

export default Enam;
