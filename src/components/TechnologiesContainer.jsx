import { 
  DiHtml5, 
  DiCss3, 
  DiJsBadge, 
  DiNodejsSmall,
  DiMysql, 
  DiReact
} from 'react-icons/di';

import '../styles/components/technologiescontainer.sass';

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "mysql", name: "MySQL", icon: <DiMysql /> },
  { id: "react", name: "React", icon: <DiReact /> },
];

const TechnologiesContainer = () => {
  return (
    <div className="technologies-container">
      {technologies.map((tech) => (
        <div key={tech.id} className="technology-card">
          <div className="icon">{tech.icon}</div>
          <h3>{tech.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default TechnologiesContainer;
