import { useState } from 'react';
import '../styles/components/contactform.sass';

function ContactForm() {
  const [message, setMessage] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada!');
    setMessage(''); 
  };

  return (
    <form onSubmit={handleSubmit} id="contact-form">
      <h3>Envie uma mensagem</h3>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)} 
        placeholder="Digite sua mensagem"
        rows="4"
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default ContactForm;
