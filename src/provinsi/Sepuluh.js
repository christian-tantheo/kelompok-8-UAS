import React, { useState } from "react";
import "./styles.css";
import danauKaolin from "./Image/Sepuluh/danau kaolin.jpeg";
import mieBangka from "./Image/Sepuluh/mie bangka.jpg";
import rumahRakit from "./Image/Sepuluh/rumah rakit.jpg";
import Paksian from "./Image/Sepuluh/paksian.jpg";
import tariCampak from "./Image/Sepuluh/tari campak.jpg";
import daunSimpor from "./Image/Sepuluh/daun simpor.png";

const Sepuluh = () => {
  const [active, setActive] = useState(0);

  const Culture = [
    {
      name: "danau Kaolin",
      description: ` Danau Kaolin berasal dari bekas tambang biji timah yang sudah lama ditinggalkan. Danau Kaolin kerap disebut dengan istilah Kulong Biru. Meskipun bekas tambang timah, Danau Kaolin memiliki udara yang segar tanpa terganggu aroma belerang, karena kawasan ini memang bukan kawah pegunungan.`,
      backgroundUrl: danauKaolin
    },
    {
      name: "mie bangka",
      description: ` mie bangka adalah salah satu varian mie yang disajikan dengan kuah yang dibuat dengan campuran ikan, biasanya ikan tenggiri. Ini membuat varian mie ini memiliki kuah ikan yang merupakan perbedaan terbesarnya dengan mie ayam.`,
      backgroundUrl: mieBangka
    },
    {
      name: "rumah rakit",
      description: `Rumah rakit merupakan salah satu tipologi bangunan rumah tinggal yang berada di tepian Sungai Musi. Keberadaan rumah rakit awalnya dikarenakan adanya peraturan dari Kesulthanan Palembang pada saat itu yang mengharuskan pendatang untuk menetap/tinggal di atas air, yaitu sungai Musi.`,
      backgroundUrl: rumahRakit
    },
    {
      name: "Paksian",
      description: `Pakaian Paksian adalah busana pengantin yang khas dari kota Pangkalpinang. Pakaian untuk mempelai wanita adalah baju kurung merah yang biasanya terbuat dari bahan sutra atau beludru yang pada masa awal disebut baju Seting dan kain yang dipakai adalah kain besusur, kain lasem, atau disebut juga dengan nama kain cual. Bagian kepala memakai mahkota yang dinamakan Paksian. Mempelai laki-laki memakai sorban yang disebut sungkon. Pakaian ini disebut memiliki pengaruh dari Cina dan Arab.Baju pengantin perempuan menurut keterangan orang tua berasal dari negeri Cina, konon menurutcerita, ada saudagar dari Arab datang ke negeri Cina untuk berdagang sambil menyiarkan agama Islam dan jatuh cintadengan seorang gadis Cina kemudian melangsungkan pernikahan dengan gadis Cina tersebut. Pada pernikahan inilah mereka memakai pakaian adat masing-masing. Selanjutnya karena banyaknya orang-orang Cina dan Arab yang datang merantauke Pulau Bangka terutama ke pangkal-pangkal di Pulau Bangka yang merupakan pusat segala aktifitas masyarkat waktu itu diantaranya ada yang melakukan pernikahan maka banyaklah penduduk Pulau Bangka yang meniru pakaian adat tersebut.`,
      backgroundUrl: Paksian
    },
    {
      name: "Tari campak",
      description: `Tari Campak merupakan tarian dari daerah Bangka-Belitung yang menggambarkan keceriaan bujang dan dayang di Kepulauan Bangka Belitung. Tarian ini biasanya dibawakan setelah panen padi atau sepulang dari ume (kebun).`,
      backgroundUrl: tariCampak
    },
    {
      name: "batik daum simpor",
      description: `Daun simpor adalah salah satu tanaman yang daunnya mempunyai sejuta manfaat. Ciri khas dari kain batik simpor ini adalah pemilihan motifnya dari flora seperti daun simpor (pohon dengan daun lebar khas Pulau Belitong) serta fauna seperti ikan cempedik (ikan yang hanya ada di Belitung Timur).`,
      backgroundUrl: daunSimpor
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

export default Sepuluh;
