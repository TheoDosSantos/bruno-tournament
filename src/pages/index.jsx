import { useState, useEffect } from "react";
import styles from "@/styles/pages/home.module.scss";

const Home = () => {
  const [start, setStart] = useState(false);

  const [nbPlayer, setNbPlayer] = useState(0);
  const [nbPool, setNbPool] = useState(0);
  const [stepPlayer, setStepPlayer] = useState(false);
  const [listPlayer, setListPlayer] = useState([]);

  const [stepPool, setStepPool] = useState(false);
  const [listPool, setListPool] = useState([]);

  const declarePlayer = (nbPlayer) => {
    setStepPlayer(true);
    let listPlayer = [];
    for (let i = 0; i < nbPlayer; i++) {
      listPlayer.push({
        id: i,
        name: "",
      });
    }
    return setListPlayer(listPlayer);
  };

  const fillPlayer = (e, id) => {
    let list = [...listPlayer];
    list[id].name = e.target.value;
    return setListPlayer(list);
  };

  const verifyPlayer = () => {
    let list = [...listPlayer];
    let error = false;
    list.forEach((player) => {
      if (player.name === "") {
        error = true;
      } else {
        error = false;
      }
    });
    if (!error) {
      setStepPool(true);
      generatePool();
    } else {
      setStepPool(false);
    }
  };

  const generatePool = () => {
    let list = [...listPlayer];
    let listPool = [];
    let nbPlayer = list.length;
    let nbPlayerPool = nbPlayer / nbPool;
    for (let i = 0; i < nbPool; i++) {
      let pool = [];
      for (let j = 0; j < nbPlayerPool; j++) {
        let random = Math.floor(Math.random() * list.length);
        pool.push(list[random]);
        list.splice(random, 1);
      }
      listPool.push(pool);
    }
    console.log(listPool);
    return setListPool(listPool);
  };

  return (
    <>
      {!start && (
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
                  Application web permettant d'aider à l'organisation de
                  tournois SSBU (Super Smash Bros. Ultimate).
                </p>
              </div>
              <div className={styles.container_btn}>
                <div className={styles.btn} onClick={() => setStart(true)}>
                  <span className={styles.btn_text}>Commencer</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {start && !stepPlayer && (
        <section className={styles.section_number}>
          <div className={styles.wrapper}>
            <div className={styles.container}>
              <div className={styles.container_title}>
                <h1 className={styles.title}>
                  Choisissez un nombre de <span>joueurs</span>
                </h1>
                <p className={styles.text}>
                  Sélectionnez le nombre de joueurs qui participeront au
                  tournois.
                </p>
              </div>
              <form className={styles.form}>
                <div className={styles.container_input}>
                  <div className={styles.label}>Nombre de joueurs :</div>
                  <input
                    className={styles.input}
                    type="text"
                    name="number"
                    id="number"
                    onChange={(e) => setNbPlayer(e.target.value)}
                    min="4"
                    max="64"
                    placeholder="4 joueurs"
                  />
                </div>
                <div className={styles.container_input}>
                  <div className={styles.label}>Nombre de poules :</div>
                  <input
                    className={styles.input}
                    type="text"
                    name="number"
                    id="number"
                    onChange={(e) => setNbPool(e.target.value)}
                    min="2"
                    max="8"
                    placeholder="2 poules"
                  />
                </div>
              </form>
              {nbPlayer > 3 && nbPool > 1 && (
                <div className={styles.container_btn}>
                  <div
                    className={styles.btn}
                    onClick={() => declarePlayer(nbPlayer)}
                  >
                    <span className={styles.btn_text}>Commencer</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
      {stepPlayer && !stepPool && (
        <section className={styles.section_player}>
          <div className={styles.wrapper}>
            <div className={styles.container}>
              <div className={styles.container_title}>
                <h1 className={styles.title}>
                  Entrez le nom des <span>joueurs</span>
                </h1>
                <p className={styles.text}>
                  Entrez le nom des joueurs qui participeront au tournois.
                </p>
              </div>
              <form className={styles.form}>
                {listPlayer.map((player, i) => {
                  return (
                    <div className={styles.container_input} key={i}>
                      <div className={styles.label}>Joueur {i + 1} :</div>
                      <input
                        className={styles.input}
                        type="text"
                        name="player"
                        id="player"
                        onChange={(e) => fillPlayer(e, i)}
                        placeholder="Pseudonyme"
                      />
                    </div>
                  );
                })}
              </form>
              <div className={styles.container_btn}>
                <div className={styles.btn} onClick={() => verifyPlayer()}>
                  <span className={styles.btn_text}>Génération</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {stepPool && (
        <section className={styles.section_pool}>
          <div className={styles.wrapper}>
            <div className={styles.container}>
              <div className={styles.container_title}>
                <h1 className={styles.title}>
                  Présentation des <span>poules</span>
                </h1>
                <p className={styles.text}>
                  La génération des poules a été faite en fonction du nombre de
                  joueurs et du nombre de poules.
                </p>
              </div>
              <div className={styles.container_pool}>
                {listPool.map((pool, i) => {
                  return (
                    <div className={styles.pool} key={i}>
                      <div className={styles.title}>
                        <h2 className={styles.pool_title}>Poule 0{i + 1}</h2>
                      </div>
                      <ul className={styles.list}>
                        {pool.map((player, i) => {
                          return (
                            <li className={styles.pool_list} key={i}>
                              <span className={styles.list_name}>
                                {player.name}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Home;
