import { useEffect } from 'react';
import SocialNetworks from './SocialNetworks';
import Avatar from '../img/logo-perfil.jpg';
import '../styles/components/sidebar.sass';
import InformationContainer from './InformationContainer';

const Sidebar = () => {
  useEffect(() => {
    const downloadLink = document.getElementById("download-link");
    downloadLink.click(); 
  }, []);

  return ( 
    <aside id="sidebar">
      <img src={Avatar} alt="Logo de perfil" />
      <p className="title">Estudante de Engenharia de Software - FullStack</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="/curriculo.pdf" className="btn" id="download-link" download>
        Download Currículo
      </a>
    </aside>
  );
};

export default Sidebar;
