import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import './styles/components/app.sass';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <>
      <div id="portfolio">
        <h1>Évila Oliveira</h1>
        <Sidebar />
        <MainContent />
      </div>
      <div>
        <ContactForm />
      </div>
    </>
  );
}

export default App;
