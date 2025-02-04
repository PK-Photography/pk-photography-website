import styles from "./style.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <a href="https://www.instagram.com/itspkphotography.in/" target="_blank">
        Instagram
      </a>
      <a href="https://x.com/pkphotographym" target="_blank">
        Twitter
      </a>
      <a href="https://www.linkedin.com/company/pkphotography" target="_blank">
        LinkedIn
      </a>
    </div>
  );
}
