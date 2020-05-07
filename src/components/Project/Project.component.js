import React, { useEffect, useState } from "react";

import Typography from "../../components/Typography/Typography.component";
import Link from "../../components/Link/Link.component";

import styles from "./Project.module.scss";

const Project = ({ project }) => {
  const [projectData, setProjectData] = useState({
    links: [],
    frontend: [],
    backend: [],
    cms: [],
  });

  useEffect(() => {
    import(`../../assets/${project.image}`).then((img) =>
      setProjectData({
        ...project,
        frontend: project.frontend.join(", "),
        backend: project.backend.join(", "),
        cms: project.cms.join(", "),
        img: img.default,
      })
    );
  }, [project]);

  const { img, name, description, links, frontend, backend, cms } = projectData;
  return (
    <div className={`project ${styles.project}`}>
      <img src={img} alt={name} />
      <Typography element="h3">{name}</Typography>
      <Typography>{description}</Typography>
      <Typography element="div">
        <ul>
          {!!frontend.length && (
            <li>
              <strong>Frontend:</strong> {frontend}
            </li>
          )}
          {!!backend.length && (
            <li>
              <strong>Backend:</strong> {backend}
            </li>
          )}
          {!!cms.length && (
            <li>
              <strong>CMS:</strong> {cms}
            </li>
          )}
        </ul>
      </Typography>
      {links.map(({ text, href }) => (
        <Link href={href} key={text} text={text} />
      ))}
    </div>
  );
};

export default Project;
