import { useState } from 'react';
import './App.css';
import Modall from './components/modal';

function App() {
  const [state,setState]= useState(false)
  const onClick =()=>{
    setState(!state)
  }
  return (
    <div className="App">
      <Modall isOpen ={state} toggle={onClick}/>
      <div className="header">
        <div className="navbar">
          <div className="nav-left">
            <label>REHAT</label>
          </div>
          <div className="nav-right">
            <label>Layanan kami</label>
            <label>Tentang</label>
            <label>Kontak</label>
          </div>
        </div>
        <div className="header-container">
          <div className="hc-left">
            <h3>Luangkan waktu sejenak</h3>
            <p>Kesehatan mentalmu juga perlu perhatian sama seperti kesehatan tubuhmu</p>
            <button onClick={onClick}>Mulai Berselancar</button>
          </div>
          <div className="hc-right">
            <img src={require('./picture/illustration 1.png')}/>
          </div>
        </div>
      </div>
      <div className="body">
        <div className="section1">
          <img src={require('./picture/urban-line-319 1.png')}/>
          <div className="section1-right">
            <h3>Lelah, Burn Out, Cemas</h3>
            <p>Jerih payah yang membuahkan hasil tidak luput dari dampak bagi kesehatan fisik dan mental. Tidak sedikit yang gagal mencapai tujuan hanya karena kena mentalnya.</p>
          </div>
        </div>
        <div className="section2">
          <div className="section2-left">
            <h3>Together we can recover your pain</h3>
            <p>Saat workload atau beban belajar mudah untuk ditangani, siapapun akan lebih produktif. Yuk, cobain bagaimana caranya meringankan beban!</p>
          </div>
          <img src={require('./picture/urban-line-319 2.png')}/>
        </div>
        <div className="section3">
          <div className="section3-left">
            <img src={require('./picture/urban-line-319 3.png')}/>
            <h3>Meditation</h3>
            <p>Meditasi membantu tubuh dan pikiran lebih bugar.</p>
          </div>
          <div className="section3-mid">
            <img src={require('./picture/urban-line-319 4.png')}/>
            <h3>Relaxation</h3>
            <p>Relaksasi merupakan cara paling ringan untuk melepas penat.</p>
          </div>
          <div className="section3-right">
            <img src={require('./picture/urban-line-319 5.png')}/>
            <h3>Consultation</h3>
            <p>Ketika metode ringan kurang membantu, para psikolog bisa membantu melalui konsultasi.</p>
          </div>
        </div>
        <div className="section4">
          <h3>Good productivity with a good mentality</h3>
          <p>“Anything that’s human is mentionable, and anything that is mentionable can be more manageable. When we can talk about our feelings, they become less overwhelming, less upsetting, and less scary.” — <span>Fred Rogers</span></p>
          <label>Ready for our release? <span>Let’s talk later</span></label>
        </div>
      </div>
      <div className="footer">
        <div className='footer-left'>
          <h4>Brought to you by REHAT</h4>
          <p>We are on mission to spread awareness of mental health and loves. The services that we will provide coming from people fretfulness.</p>
          <p>We are provide Rehat Center to keep our mission to be complete. </p>
          <img src={require('./picture/image.png')}/><br/>
          <label>© new Date().getFullYear() Rehat</label>
        </div>
        <div className='footer-right'>
          <label>ABOUT</label>
          <label>BUSINESS MODEL</label>
          <label>PRIVACY</label>
          <label>TERM OF SERVICES</label>
          <label>CONTACT</label>
        </div>
      </div>
    </div>
  );
}

export default App;
