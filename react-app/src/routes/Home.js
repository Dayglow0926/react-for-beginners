import { useEffect, useState } from "react";
import Marvel from "../components/Marvel";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const json = await (
      await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023`
      )
    ).json();
    setCharacters(json.data.results);
    setLoading(false);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  console.log(characters);
  return (
    <div className={styles.main}>
      <img src="https://i.annihil.us/u/prod/marvel/images/logo/marvel-logo.png" />
      <div className={styles.container}>
        {loading ? (
          <h1 className={styles.loader}>Loading...</h1>
        ) : (
          <div className={styles.marvels}>
            {characters.map((char) => (
              <Marvel
                key={char.id}
                id={char.id}
                name={char.name}
                path={char.thumbnail.path + "." + char.thumbnail.extension}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
