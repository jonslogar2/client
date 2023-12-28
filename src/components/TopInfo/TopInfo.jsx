import style from "./TopInfo.module.css";

const details = [
  {
    label: "Phone",
    value: "+639204782895",
    link: "sms:+639204782895",
  },
  {
    label: "Tel",
    value: "(02)22222",
    link: "",
  },
  {
    label: "Facebook/Messenger",
    link: "https://www.fb.com",
    value: "CYN Solutions",
  },
  {
    label: "Viber",
    value: "(+63)9204782895",
    link: "viber://pa?chatURI=jonvibertwilio://chat?number=+639204782895",
  },
];

const TopInfo = () => {
  const handleViberClick = (viberLink) => {
    window.location.href = viberLink;
  };

  return (
    <section className={style.wrapper}>
      <div className={style.flex_wrapper}>
        {details.map((info) => (
          <div className="" key={info.label}>
            <p>
              {info.label}:{" "}
              <span>
                {info.link ? (
                  <a href={info.link} target="_blank" rel="noopener noreferrer">
                    {info.value}
                  </a>
                ) : info.label === "Viber" ? (
                  <span
                    style={{ cursor: "pointer", color: "blue" }}
                    onClick={() => handleViberClick(info.link)}
                  >
                    {info.value}
                  </span>
                ) : (
                  info.value
                )}
              </span>{" "}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopInfo;
