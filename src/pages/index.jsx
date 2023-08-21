import styles from "@/styles/pages/home.module.scss";

const Home = () => {
  return (
    <section className={styles.section_start}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.container_title}>
            <h1 className={styles.title}>
              TOURNOIS
              <br />
              SSBU <span>BRUNO</span>
            </h1>
            <p className={styles.text}>
              Application web permettant d'aider à l'organisation de tournois
              SSBU (Super Smash Bros. Ultimate).<br></br>

            </p>
            <ul>
              <li>Inscription des participants</li>
              <li>Création des poules</li>
              <li>Gestion des matchs, scores & phases finales</li>
              <li>Affichage du classement</li>
            </ul>
          </div>
          <div className={styles.container_btn}>
            <div className={styles.btn}>
              <span className={styles.btn_text}>Commencer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
