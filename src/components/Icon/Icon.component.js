import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import fa from "./fontawesome";

const Icon = ({ icon }) => {
  return <>{fa[icon] && <FontAwesomeIcon icon={fa[icon]} />}</>;
};

export default Icon;
