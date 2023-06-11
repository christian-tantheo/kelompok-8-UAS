import React, { useState } from "react";
import "./styles.css";
import ampenanImage from "./Image/Duapuluhempat/Nusa Tenggara Barat/pantai ampenan.jpg";
import taliwangImage from "./Image/Duapuluhempat/Nusa Tenggara Barat/taliwang.jpg";
import bonderImage from "./Image/Duapuluhempat/Nusa Tenggara Barat/rumah bonder.png";
import pegonImage from "./Image/Duapuluhempat/Nusa Tenggara Barat/bajuadatpegon.jpg";
import serimpiImage from "./Image/Duapuluhempat/Nusa Tenggara Barat/tari serimpi.jpg";
import batikNTB from "./Image/Duapuluhempat/Nusa Tenggara Barat/batikntb.png";

const Duapuluhempat = () => {
  const [active, setActive] = useState(0);

  const Culture = [
    {
      name: "Pantai Ampenan",
      description: ` Pantai Ampenan adalah salah satu tempat wisata yang terkenal di
      Kota Mataram. Pantai Ampenan sendiri memiliki sisi historis yang
      sangat kental terkait dengan Pulau Lombok pada umumnya dan Kota
      Mataram khususnya. Secara geografis Pantai Ampenan terletak di
      Jalan Pantai Ampenan, Ampenan Tengah, Kota Mataram.`,
      backgroundUrl: ampenanImage
    },
    {
      name: "Ayam Taliwang",
      description: `Ayam Taliwang adalah makanan khas yang berasal dari Karang
      Taliwang, Mataram, Nusa Tenggara Barat. Makanan ini berbahan dasar
      daging ayam. Daging ayam yang disajikan berasal dari ayam kampung
      muda yang dibakar kemudian dibumbui dengan semacam saus yang
      bahannya antara lain cabai merah kering, bawang merah, bawang
      putih, tomat, terasi goreng, kencur, gula merah, dan garam.`,
      backgroundUrl: taliwangImage
    },
    {
      name: "Rumah Monder",
      description: `Bale Bonder bisa dikatakan sebagai salah satu rumah adat terbesar
      yang bisa di temukan di NTB. Hal ini bisa dengan mudah dilihat
      dari ukurannya yang mencapai 50 meter persegi. Ukuran bangunan
      yang besar ini karena Bale Bonder biasanya digunakan sebagai
      tempat tinggal para pembesar suku.`,
      backgroundUrl: bonderImage
    },
    {
      name: "Baju adat Pegon",
      description: ` Baju pegon adalah baju adat tradisional suku sasak yang di gunakan
      oleh kaum laki-laki pada saat upacara-upacara adat suku sasak
      seperti Nyongkolan,Mesejati, Selabar dan upacara adat lainnya.`,
      backgroundUrl: pegonImage
    },
    {
      name: "Tari Serimpi",
      description: `Srimpi atau Serimpi adalah bentuk repertoar (penyajian) tari Jawa
      klasik dari tradisi kraton Kesultanan Mataram dan dilanjutkan
      pelestarian serta pengembangan sampai sekarang oleh empat istana
      pewarisnya di Surakarta dan Yogyakarta.`,
      backgroundUrl: serimpiImage
    },
    {
      name: "Batik Sasambo",
      description: `Batik Sasambo merupakan batik khas Suku Sasambo yang berasal dari provinsi Nusa Tenggara Barat. Sasambo sendiri merupakan singkatan dari 3 suku besar yang ada di Provinsi Nusa Tenggara Barat, yakni Sasak yang berada di Lombok, Samawa di Sumbawa dan Mbojo di Bima. `,
      backgroundUrl: batikNTB
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

export default Duapuluhempat;
