import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Marvel.module.css";

function Marvel({ id, name, path }) {
  return (
    <div className={styles.marvel}>
      <img src={path} alt={name} className={styles.marvel__img} />
      <div className={styles.marvel__title}>
        <h2>
          <Link to={`/character/${id}`}>{name}</Link>
        </h2>
      </div>
    </div>
  );
}

Marvel.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default Marvel;
