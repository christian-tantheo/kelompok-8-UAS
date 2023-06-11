import React, { useState } from "react";
import "./styles.css";
import danaugunungTujuh from "./Image/Delapan/danau gunung tujuh.jpeg";
import gulaiikanPatin from "./Image/Delapan/gulai ikan patin.jpg";
import panggungkajangLeko from "./Image/Delapan/panggung kajang leko.jpg";
import bajukurungTanggung from "./Image/Delapan/baju kurung tanggung.jpg";
import tarisekapuSirih from "./Image/Delapan/sekapur sirih.jpg";
import durianPecah from "./Image/Delapan/durian pecah.png";

const Delapan = () => {
  const [active, setActive] = useState(0);

  const Culture = [
    {
      name: "danau gunung Tujuh ",
      description: `Danau Gunung Tujuh merupakan danau kaldera yang terbentuk akibat kegiatan gunung berapi di masa lampau. Pada ketinggian 1.996 m dpl, danau ini merupakan danau tertinggi di Asia Tenggara. Danau ini sering ditutupi kabut dengan suhu rata-rata 17 derajat Celcius. Luas Danau ± 960 ha dengan panjang berkisar 4,5 km dan lebar 3 km. Danau ini dikelilingi oleh tujuh gunung, yaitu Gunung Hulu Tebo (2.525 meter), Gunung Hulu Sangir (2.330 m), Gunung Madura Besi (2.418 m), Gunung Lumut yang ditumbuhi berbagai jenis lumut (2.350 m), Gunung Selasih (2.230 m), Gunung Jar Panggang (2.469 m), dan Gunung Tujuh (2.735 m).`,
      backgroundUrl: danaugunungTujuh
    },
    {
      name: "gulai ikan patin",
      description: `Gulai ikan patin merupakan salah satu masakan khas Riau yang mudah dijumpai di berbagai rumah makan. Umumnya masakan ini berkuah kental kemerahan dengan potongan daging patin yang cukup besar. Bercita rasa pedas gurih, gulai ikan patin enak dinikmati bersama nasi hangat dan sayur ubi`,
      backgroundUrl: gulaiikanPatin
    },
    {
      name: "panggung kajang Leko",
      description: `Rumah Panggung Kajang Leko merupakan konsep arsitektur dari Marga Bathin. Hingga sekarang orang Bathin tetap mempertahankan adat istiadat yang ditinggalkan oleh pendahulu mereka, bahkan peninggalan Kajang Leko pun masih dapat dinikmati keindahannya dan masih dipergunakan hingga kini.`,
      backgroundUrl: panggungkajangLeko
    },
    {
      name: "baju kurung Tanggung ",
      description: `Baju Kurung Tanggung merupakan pakaian adat yang berasal dari Provinsi Jambi. Baju adat tersebut dipakai oleh laki-laki dan perempuan masyarakat Jambi untuk acara pernikahan.`,
      backgroundUrl: bajukurungTanggung
    },
    {
      name: "Tari sekapur Sirih",
      description: `Tari Sekapur Sirih merupakan tarian selamat datang pada tamu-tamu besar di Provinsi Jambi sebagai tarian wajib dipertunjukan pada saat datangnya tamu besar. Tarian yang diangkat dari gerakan yang menggambarkan tentang kebiasaan-kebiasaan gadis-gadis Jambi yang sedang berhias.`,
      backgroundUrl: tarisekapuSirih
    },
    {
      name: "batik durian pecah",
      description: `Sama seperti namanya, motif ini menggambarkan buah durian yang terpecah menjadi dua bagian. Motif ini mirip dengan motif ceplokan yang berasal dari daerah Jawa. Durian adalah buah yang istimewa untuk masyarakat Jambi.`,
      backgroundUrl: durianPecah
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

export default Delapan;
