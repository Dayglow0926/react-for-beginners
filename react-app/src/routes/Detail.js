import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState([]);

  const getCharacter = async () => {
    const json = await (
      await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`
      )
    ).json();
    setCharacter(json.data.results);
  };

  useEffect(() => {
    getCharacter();
  }, [id]);

  console.log(character);
  return (
    <div className={styles.marvel}>
      <img
        src="https://i.annihil.us/u/prod/marvel/images/logo/marvel-logo.png"
        alt="marvel"
      />
      {character.map((char) => (
        <div className={styles.container} key={char.id}>
          <img src={`${char.thumbnail.path}.${char.thumbnail.extension}`} />;
          <h1 className={styles.marvel__title}>{char.name}</h1>
          {char.urls.map((url) => {
            <span className={styles.marvel__url}>url.type</span>;
          })}
        </div>
      ))}
    </div>
  );
}

export default Detail;
