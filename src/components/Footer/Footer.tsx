import styles from "./styles.module.scss";

const Footer = () => {
    return (
        <footer className={styles["Footer"]}>
            <div className="container">
                {/* Global footer component */}
                <a
                    className={styles["FooterLink"]}
                    href="https://github.com/squirec-dev/"
                >
                    squirec-dev
                </a>
            </div>
        </footer>
    );
};

export default Footer;
