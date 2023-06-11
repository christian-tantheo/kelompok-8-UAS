import React, { useState } from "react";
import "./styles.css";
import jaturDoyan from "./Image/Empatbelas/jantur doyan.jpg";
import Kalumpe from "./Image/Empatbelas/kalumpe.jpg";
import Bentang from "./Image/Empatbelas/betang.jpg";
import Sangkaru from "./Image/Empatbelas/sangkaru.jpeg";
import Gangereng from "./Image/Empatbelas/gangereng.jpg";
import enggangDayak from "./Image/Empatbelas/EnggangDayak.png";

const Empatbelas = () => {
  const [active, setActive] = useState(0);

  const Culture = [
    {
      name: "Jantur doyan",
      description: `Kawasan air terjun Jantur Doyan merupakan salah satu tempat wisata
      unggulan Kabupaten Barito Utara yang selalu ramai dikunjungi
      wisatawan setempat maupun luar daerah, terutama pada hari libur
    </h2>`,
      backgroundUrl: jaturDoyan
    },
    {
      name: "Kalumpe",
      description: `Makanan khas dayak ini adalah olahan daun singkong yang ditumbuk
      sampai halus, setelah itu dimasak dengan terong pipit atau yang
      berukuran kecil bersama dengan lengkuas, serai, bawang merah, dan
      bawang putih.`,
      backgroundUrl: Kalumpe
    },
    {
      name: "Rumah bentang",
      description: `Rumah betang adalah rumah adat khas Kalimantan yang terdapat
      diberbagai penjuru Kalimantan dan dihuni oleh masyarakat Dayak
      terutama di daerah hulu sungai yang biasanya menjadi pusat
      permukiman suku Dayak`,
      backgroundUrl: Bentang
    },
    {
      name: "Pakaian Sangkaru",
      description: `Baju Sangkarut atau dikenal juga Baju
      Basulau merupakan pakaian rompi yang dilapisi oleh Sulau (kerang).`,
      backgroundUrl: Sangkaru
    },
    {
      name: "Tari Gangereng",
      description: `Tari gangereng atau yang lebih dikenal dengan tari Giring-Giring
      merupakan tari pergaulan muda mudi dengan penuh suka cita
      menyambut pahlawan yang telah menang perang melawan penjajah.`,
      backgroundUrl: Gangereng
    },
    {
      name: "batik Enggang Dayak",
      description: `Motif Burung enggang melambangkan kedekatan masyarakat Dayak Indonesia dengan alam. Segala bagian tubuh burung enggang melambangkan kehebatan dan keagungan suku ini, sedangkan burung itu sendiri melambangkan perdamaian dan persatuan: Sayapnya yang kokoh melambangkan pemimpin yang selalu melindungi rakyatnya, sedangkan ekornya yang panjang dianggap sebagai tanda kemakmuran suku Dayak. Selain itu, burung enggang juga digunakan sebagai teladan kehidupan berkeluarga dan bermasyarakat. Ia melambangkan kasih tanpa syarat terhadap pasangan dan pendidikan anak sehingga menjadi manusia yang matang dan mandiri.
      Sangat perlu ditekankan bahwa suku Dayak Kalimantan sangat dekat dengan burung enggang. Burung ini selalu tampil dalam berbagai mitos dan kisah rakyat Dayak yang berbeda di semua daerah di pulau ini. Diantaranya, rakyat setempat meyakini bahwa burung enggang merupakan Panglima para Burung. Ia dianggap memiliki kekuatan supernatural dan hanya akan muncul di masa perang. Secara umum, burung ini dianggap sakral dan orang dilarang memburu, apalagi memakannya.`,
      backgroundUrl: enggangDayak
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

export default Empatbelas;
