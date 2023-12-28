import style from "./HomePage.module.css";

const Homepage = () => {
  return (
    <section>
      <div className={style.wrapper}>
        <h1 style={{ textAlign: "center", fontSize: "30px" }}>Homepage</h1>
      </div>
    </section>
  );
};

export default Homepage;
