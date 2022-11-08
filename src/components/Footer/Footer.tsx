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
                    <span className="material-icons">data_object</span>
                    <span className={styles["FooterName"]}>squirec-dev</span>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
