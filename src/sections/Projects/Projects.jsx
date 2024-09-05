import styles from './ProjectsStyles.module.css';
import s from '../../assets/s.png';
import v from '../../assets/v.png';
import t from '../../assets/t.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={s}
          link="https://dkstudynotion-forntendweb.vercel.app/"
          h3="studynotion"
          p="E.tech platform"
        />
        <ProjectCard
          src={v}
          link="https://dkvideochat.vercel.app/"
          h3="Video Call App"
          p="google meet clone"
        />
        {/* <ProjectCard
          src={hipsster}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Hipsster"
          p="Glasses Shop"
        /> */}
        <ProjectCard
          src={t}
          link="https://dkshopping.vercel.app/"
          h3="Dk shop"
          p="ecommerce website "
        />
      </div>
    </section>
  );
}

export default Projects;
