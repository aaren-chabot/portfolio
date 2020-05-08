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

  const { projects, title } = styles;
  return (
    <div className={`projects ${projects}`}>
      <Typography className={title} element="h2">
        Projects
      </Typography>
      <Spacer size="sm" />
      {projectData.map((project, i, list) => (
        <div key={project.name}>
          <Project project={project} />
          {i + 1 === list.length ? <Spacer size="lg" /> : <Spacer size="xlg" />}
        </div>
      ))}
      <Button className={styles.button}>See My GitHub</Button>
    </div>
  );
};

export default Projects;
