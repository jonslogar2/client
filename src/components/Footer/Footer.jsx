import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.flex_wrapper}>
        <h1 style={{ fontSize: "20px", color: "white", fontWeight: 500 }}>
          CYN Solutions Inc. | 2023
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
