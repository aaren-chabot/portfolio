import React, { useEffect, useState } from 'react';

import Typography from '../../components/Typography/Typography.component';
import Project from '../../components/Project/Project.component';
import Spacer from '../../components/Spacer/Spacer.component';
import Button from '../../components/Button/Button.component';

import styles from './Projects.module.scss';

import data from '../../data/projects';

const Projects = () => {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    setProjectData(data);
  }, []);

  return (
    <div className={`projects ${styles.projects}`}>
      <Typography element="h2">Projects</Typography>
      <Spacer size="sm" />
      {projectData.map((project, i, list) => (
        <>
          <Project key={project.name} project={project} />
          {i + 1 === list.length ? <Spacer size="lg" /> : <Spacer size="xlg" />}
        </>
      ))}
      <Button className={styles.button}></Button>
    </div>
  );
};

export default Projects;
