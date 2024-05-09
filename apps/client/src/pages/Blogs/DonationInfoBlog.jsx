import React from "react";
import BlogSvg from "../../assets/Blog1.svg";
import BlogsLayout from "../../components/Layouts/BlogsLayout/BlogsLayout";
import styles from "./index.module.css";

const DonationInfoBlog = () => {
  const title = "Darivanjem krvi do spašenog života više";

  return (
    <BlogsLayout
      title={title}
      image={"https://i.ibb.co/f8kFjHC/Picture1.jpg" || BlogSvg}
    >
      <p>
        Nije rijedak slučaj da u najtežim i često presudnim trenucima za čovjeka
        nastane potraga za odgovarajućom krvnom grupom. Samo punoljetna osoba i
        njegova dobra volja te „uredan“ zdravstveni karton uvjet su za jedan,
        hvalevrijedan čin koji može spasiti nečiji život, a riječ je o{" "}
        <b>darivanju krvi</b>.
      </p>
      <h3 className={styles["blogs-paragraph-title"]}>
        Humana i dobrovoljna gesta
      </h3>
      <p>
        Ne bismo se mogli nazvati slobodnim čovjekom kada bismo bili prisiljeni
        na nešto. S toga, važno je naglasiti kako, <b>za darovati krv</b>, mora
        biti isključen bilo kakav vanjski utjecaj prisile koji bi u zamjenu za
        novac ili na kakav drugi način osoba bila primorana postati donatorom.
        <b> Donirati</b> znači{" "}
        <u>
          <i>dobrovoljno i samostalno</i>
        </u>{" "}
        odlučiti da vlastita zdrava krvna zrnca omogući drugome kako bi mu
        postala lijekom u najkritičnijim životnim situacijama.
      </p>
      <h3 className={styles["blogs-paragraph-title"]}>
        Kako postati dobrovoljni davatelj krvi?
      </h3>
      <p>
        Nakon što osoba pokaže interes, a punoljetna je i dobro zdravstvenog
        stanja instaliranjem aplikacije <i style={{ color: "red" }}>Arteria</i>{" "}
        na svoj mobilni uređaj dolazi korak bliže spašavanju jednog ljudskog
        života. Na aplikaciji je moguće vidjeti vlastiti angažman koji bi bio
        popraćen vrijednim nagradama za sudjelovanje. Što duže sudjelovanje i
        redovno doniranje, to veće i bogatije nagrade.
      </p>
      <h3 className={styles["blogs-paragraph-title"]}>
        Koliko često je moguće darivati krv?
      </h3>
      <p>
        Prema{" "}
        <a href="https://www.hck.hr/novosti/tko-sve-moze-biti-dobrovoljni-davatelj-krvi/11936">
          uputama Crvrnog križa
        </a>
        , u vremenskom intervalu od godine dana moguće je darovati krv{" "}
        <b>četiri puta</b> za muškarce u razmaku od 3 mjeseca te
        <b> tri puta</b> godišnje za žene u razmaku od 4 mjeseca
      </p>
      <p>
        To mogu biti osobe 18-65 godina, odnosno do 70 godina ako su dobrog
        zdravstvenog stanja. Uz odobrenje liječnika osoba može pristupiti
        darivanju krvi, pod uvjetom da je tjelesna temperatura do 37 °C. Težina
        osobe mora biti proporcionalna s visinom, ali tek iznad 55 kilograma
        tjelesne mase.
      </p>
      <h3 className={styles["blogs-paragraph-title"]}>
        Najrjeđa i najčešća krvna grupa
      </h3>
      <p>
        Moguće{" "}
        <a href="https://www.plivazdravlje.hr/aktualno/clanak/3217/Krvne-grupe-kako-se-nasljedjuje-A-B-AB-ili-0-krvna-grupa.html">
          krvne grupe
        </a>{" "}
        su A, B, AB ili 0 od kojih se krvna grupa AB pozitivna naziva
        <b> univerzalni primatelj</b>, tj, osobe koje imaju tu krvnu grupu mogu
        primiti krv od bilo koje druge krvne grupe.
      </p>
      <p>
        <b>0+</b> krvna grupa je najčešća i ima ju čak 42 % svjetskog
        stanovništva. Slijede potom krvna grupa A+ (31%), B+ (15%) i AB+ (5%).
        0- krvnu grupu ima otprilike 3 posto populacije, no ni ona nije
        najrjeđa. Iza nje slijede A- (2.5%), B- (1%) te najrjeđa <b>AB-</b>{" "}
        krvna grupa koju nosi tek 0.5% stanovništva.
      </p>
      <h3 className={styles["blogs-paragraph-title"]}>
        Iako si zdrav, ne možeš uvijek darovati krv!
      </h3>
      <p>
        Postoje nekoliko slučajeva kada osoba ne može darovati krv, a to su:
      </p>
      <ul className={styles["blogs-ul"]}>
        <li>visoki ili niski krvni tlak</li>
        <li>nizak hemoglobin</li>
        <li>žene: menstruacija, trudnoća ili dojenje</li>
        <li> lakše akutne bolesti </li>
        <li>nedavno napravljena tetovaža i piercing </li>
        <li>alkoholizirano stanje</li>
        <li>uzimanje antibiotika</li>
        <li>cijepljenje osobe</li>
        <li>primljena transfuzija</li>
        <li>nedavni operativni zahvati</li>
      </ul>
      <p>
        Iako osobe koje ispunjavaju neki od ovih zapreka ne mogu biti donatorom
        mogu biti podrškom i animatorom da se osoba odluči na ovaj čin darivanja
        krvi.
      </p>
      <h3 className={styles["blogs-paragraph-title"]}>Zaključak</h3>
      <p>
        Voliš pomagati drugima, ali ti pokatkada ponestane ideja kako to učinit?
        Novonastali startup Arteria ima rješenje za tebe. Skini aplikaciju na
        svoj mobilni uređaj i registriraj se. Na jednom mjestu te čekaju
        informacije, kada i gdje možeš donirati krv, koliko često, a čekaju te i
        neke nagrade. Jer ljubav nije samo nekoga voljeti već i darivati. Daruj
        krv i spasi život.
      </p>
      <p>
        Za više ovakvog sadržaja preuzmi <a href="">našu aplikaciju</a> i
        zaprati nas na
        <a href="https://www.instagram.com/arteria_app/"> društvenim mrežama</a>
        .
      </p>
    </BlogsLayout>
  );
};

export default DonationInfoBlog;
