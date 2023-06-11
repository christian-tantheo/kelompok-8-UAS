import React, { useState } from "react";
import "./styles.css";
import tugupahlawanImage from "./Image/Duapuluhsatu/tugupahlawan.jpg";
import tahutekImage from "./Image/Duapuluhsatu/tahutek.jpg";
import rumahjogloImage from "./Image/Duapuluhsatu/rumahjoglo.jpg";
import udangcakImage from "./Image/Duapuluhsatu/udangcakbajuadat.png";
import tarilenggangImage from "./Image/Duapuluhsatu/tarilenggang.jpg";
import batikjawatimur from "./Image/Duapuluhsatu/batikjawatimur.png";

const Duapuluhsatu = () => {
  const [active, setActive] = useState(0);

  const Culture = [
    {
      name: "Tugu Pahlawan",
      description: `Tugu Pahlawan adalah sebuah monumen yang menjadi markah tanah Kota
      Surabaya. Tinggi monumen ini adalah 41,15 meter dan berbentuk
      lingga atau paku terbalik. Tubuh monumen berbentuk
      lengkungan-lengkungan (canalures) sebanyak 10 lengkungan, dan
      terbagi atas 11 ruas. Tinggi, ruas dan canalures mengandung makna
      tanggal 10, bulan 11, tahun 1945.`,
      backgroundUrl: tugupahlawanImage
    },
    {
      name: "Tahu Tek",
      description: `Tahu tek adalah salah satu makanan tradisional yang populer di
      Surabaya. Tahu tek berisi tahu yang digoreng setengah matang,
      lontong, kentang, dan sedikit taoge. Bahan-bahan tersebut kemudian
      disiram dengan bumbu kacang yang diberi petis.`,
      backgroundUrl: tahutekImage
    },
    {
      name: "Rumah Joglo",
      description: `Tahukah Kamu Joglo berasal dari kata Tajug Loro (Juglo) yang
      bermakna dua gunung. Dalam filosofi Jawa sendiri gunung merupakan
      tempat yang tinggi dan sakral. Atap rumah Joglo yang berbentuk dua
      gunung. Namun dalam setiap perkembangannya, penyebutan kata Joglo
      kemudian berubah menjadi Joglo.`,
      backgroundUrl: rumahjogloImage
    },
    {
      name: "Pakaian Udang Cak ",
      description: ` Istilah Abang dan None untuk kota Jakarta juga dimiliki oleh kota
      Surabaya, namun dengan nama yang berbeda yaitu Cak dan Ning. Dalam
      kontes cak dan Ning ini, para finalis akan menggunakan pakaian
      khas Surabaya. Cak yang artinya laki-laki dan Ning untuk
      perempuan.`,
      backgroundUrl: udangcakImage
    },
    {
      name: "Tari Lenggang",
      description: `Tari Lenggang adalah tarian selamat datang yang khas dari Surabaya,
      Provinsi Jawa Timur. Tarian ini dimainkan oleh penari wanita yang
      menari dengan gerakan yang indah dan juga anggun.`,
      backgroundUrl: tarilenggangImage
    },
    {
      name: "Batik Kerek",
      description: `Uswatun Hasanah, salah seorang pengusaha batik dari kecamatan Kerek menuturkan bahwa saat ini bahkan banyak masyarakat yang salah presepsi menyebut batik Kerek sebagai batik Tuban. Kata Uswatun batik Tuban adalah batik yang dulunya banyak diproduksi di kelurahan Sendangharjo kota Tuban, dengan motif-motiff klasiknya. Sedangkan batik Kerek adalah batik warisan imigran Tiong Hua yang telah dimodifikasi warga Kerek.`,
      backgroundUrl: batikjawatimur
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

export default Duapuluhsatu;
