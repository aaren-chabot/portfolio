import React, { useEffect, useState } from "react";

import styles from "./TitledLogo.module.scss";

const TitledLogo = ({ logo, text }) => {
  const [logoIcon, setLogo] = useState(null);

  useEffect(() => {
    import(`../../assets/${logo}-logo.png`).then((dynamicLogo) =>
      setLogo(dynamicLogo.default)
    );
  }, [logo]);

  return (
    <div className={styles.titledLogo}>
      <img src={logoIcon} alt={`${text} logo`} />
      <span>{text}</span>
    </div>
  );
};

export default TitledLogo;
