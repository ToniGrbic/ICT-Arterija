import React from "react";
import BlogsLayout from "../../components/Layouts/BlogsLayout/BlogsLayout";
import BlogSvg from "../../assets/Blog1.svg";
import styles from "./index.module.css";

const ArteriaBlog = () => {
  const title = " Arteria - doniraj krv i budi kapljica koja život znači!";

  return (
    <BlogsLayout
      title={title}
      image={"https://i.ibb.co/qN7kK78/Picture1.png" || BlogSvg}
    >
      <p>
        Medicina je, možemo primijetiti, kroz čovječanstvo uvelike napredovala.
        Svi bismo se oko toga složili, no jedan problem ne jenjava. Riječ je o
        jednoj humanoj gesti darivanja krvi. Upravo tom gestom se nastoji
        osvijestiti i ohrabriti ljude o bitnosti darivanja koji ima vrlo važnu
        ulogu u cjelokupnom zdravstvenom sustavu.
      </p>
      <h3 className={styles["blogs-paragraph-title"]}>
        Odakle se rodila ideja?
      </h3>
      <p>
        Započeto putovanje u DUMP Internship-u spaja nekoliko mladih učenika i
        studenata koje prepoznaju članovi logističkog sektora u jedan team. U
        svakom od područja; dizajna, multimedije, programiranja i marketinga
        članovi udruge su izabrali Andreu i Mariju, Lovru i Marina te Roka i
        Tonia koji su, udruživši svoje snage, pokrenuli startup budućnosti.
        Nešto nikad viđeno u Lijepoj Našoj, a izuzetno humano.
      </p>
      <h3 className={styles["blogs-paragraph-title"]}>Startup budućnosti</h3>
      <p>
        Zajedničkim snagama stvoren je projekt vrijedan pozornosti. Arteria-
        tvrtka koja se bavi poticanjem na darivanje krvi i koja na takav način
        želi osvijestiti sve oni koji su sposobni darovati krv bila je nit
        vodilja. Bio to poznanik ili ne, lijepo je znati da netko pridonosi
        produljenju nečijeg života i briga o tuđem zdravlju. Kao što arterija
        pumpa krv iz srca do drugih dijelova tijela, tako je zajednički{" "}
        <b>cilj</b>
        povezati srca da kucaju kao jedno{" "}
        <u>
          <i>jer svaki život je jednako vrijedan!</i>
        </u>
      </p>
      <h3 className={styles["blogs-paragraph-title"]}>Poticanje humanosti</h3>
      <p>
        FESB u Splitu već više od desetljeća uspješno surađuje s dumpovcima i
        potiče mlade znalce da se izraze i pokažu svijetu. Aplikacija nastaje
        kao produkt rada, a brzo i jednostavno logiranje u aplikaciju dovodi do
        informacija važnih za doniranje krvi. Na jednom mjestu moguće je brzo,
        jednostavno i anonimno praćenje vlastitog angažmana glede doniranja.
        Osim što je svrha spasiti život, možda se negdje i otputuje, tko zna?!
      </p>
      <h3 className={styles["blogs-paragraph-title"]}>
        Kapljica koja život znači!
      </h3>
      <p>
        Kako bi se razvila svijest o humanosti ovoga čina važno je istaknuti da
        svaka kapljica krvi, život znači jednoj osobi. Ljepota je u anonimnosti
        i jednostavnosti, solidarnosti i dobrovoljnom odazivu koji može spasiti
        nečiji život. Ukoliko je osoba voljna, punoljetna i nema zdravstvenih
        zapreka utoliko je poželjno da se odazove i postane dijelom ovog
        humanitarnog odaziva u spašavanju, jer samo čovjek čovjeku može
        produljiti život.
      </p>
      <h3 className={styles["blogs-paragraph-title"]}>
        Pokažimo čovječnost i okrenimo svoja srca jedni prema drugima!
      </h3>
      <p>
        Kako bi se svelo sve na jedan zajednički nazivnik, važno je istaknuti da
        darovati krv nije opasno, ali mogu spasiti nečiji život. izdvojiti
        nekoliko minuta može biti od presudne važnosti za pojedinca, a
        cjelokupan proces od samog dolaska traje oko 30 minuta i potpuno je
        bezbolan. <b>Pokaži solidarnost i prijavi se za doniranje krvi!</b>
      </p>
      <p>Keywords:</p>
      <p>
        Darivanje krvi, medicina, zdravstvo, humanost, krv, arterija, vene,
        život
      </p>
    </BlogsLayout>
  );
};

export default ArteriaBlog;
