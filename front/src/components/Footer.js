import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";
import { FaMapMarkerAlt } from "react-icons/fa";
function Footer() {
  return (
    <footer className={styles.footer}>
      <h1>
        {" "}
        <FaMapMarkerAlt /> Follower{" "}
      </h1>
      <h2>Trabalho de Programação de Software para Web feito por: </h2>
      <ul className={styles.name_list}>
        <li>
          <p>Larissa Coelho</p>
        </li>
        <li>
          <p>Bruno Glanzmann</p>
        </li>
        <li>
          <p>Nicolas Anderson</p>
        </li>
        <li>
          <p>Saulo</p>
        </li>
        <li>
          <p>Matheus</p>
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>
          {" "}
          <FaMapMarkerAlt /> Follower
        </span>{" "}
        &copy; 2022
      </p>
    </footer>
  );
}

export default Footer;
