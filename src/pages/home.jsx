import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../imgs/logo.png';
import slider1 from '../imgs/slider.png';
import slider2 from '../imgs/slider 2.jpg';
import slider3 from '../imgs/slider 3.jpg';
import mascote from '../imgs/Mascote.png';
import unidade3 from '../imgs/unidade 3.png';

function Home() {
    return (
        <div>
            <header>
                <div className="logo">
                    <img src={logo} alt="IFIT" className="logo-img" />
                </div>
                <nav>
                    <ul>
                        <li><a href="#home">HOME</a></li>
                        <li><a href="#nossa-academia">NOSSA ACADEMIA</a></li>
                        <li><Link to="/treinos">SEU TREINO</Link></li>
                        <li><a href="#planos">PLANOS</a></li>
                        <li><a href="#contato">CONTATO</a></li>
                    </ul>
                </nav>
            </header>
  
        <section id="home">
          <div className="image-carousel">
            <div className="image-slide">
              <img src={slider1} alt="Imagem 1" />
            </div>
            <div className="image-slide">
              <img src={slider2} alt="Imagem 2" />
            </div>
            <div className="image-slide">
              <img src={slider3} alt="Imagem 3" />
            </div>
          </div>
          <div className="navigation">
            <div className="circle" data-index="0"></div>
            <div className="circle" data-index="1"></div>
            <div className="circle" data-index="2"></div>
          </div>
        </section>
  
        <section id="nossa-academia">
          <div id="nossaacademiatexto">
            <h2>Nossa Academia</h2>
            <p>Bem-vindo à nossa academia! Somos dedicados a ajudá-lo a alcançar seus objetivos de condicionamento físico e saúde. Nossa equipe de treinadores experientes e instalações de última geração estão aqui para apoiar sua jornada de fitness.</p>
          </div>
          <div id="mascote">
            <img src={mascote} alt="Mascote" />
          </div>
        </section>
  
        <section id="local">
          <h2>Conheça Nossas Localizações</h2>
  
          <div className="card-container">
          <div className="card">
                <img src="https://blog.nextfit.com.br/wp-content/uploads/2022/07/treino-perna.jpg" alt="Imagem 1" />
                <p> Av. Hilton Souto Maior, S/N - Mangabeira, João Pessoa - PB, 58055-018</p>
              </div>
              <div className="card">
                <img src="https://tecnofit-site.s3.sa-east-1.amazonaws.com/media/files/2023/03/22115409/aparelho-de-academia-barra-guiada.png" alt="Imagem 2" />
                <p>Av. Visc. de Jequitinhonha, 1145 - Boa Viagem, Recife - PE, 51030-021</p>
              </div>
          <div className="card">
              <img src={unidade3} alt="Imagem 3" />
              <p>Avenida Dom Luís, 10 - Fortaleza, Ceará</p>
            </div>
          </div>
        </section>
  
        <section id="planos">
        <h2>PLANOS</h2>
  
  
  <div className="plan-selector">
    <label htmlFor="plan">Escolha um plano: </label>
    <select id="plan">
      <option value="mensal">Plano Mensal</option>
      <option value="trimestral">Plano Trimestral</option>
      <option value="semestral">Plano Semestral</option>
      <option value="anual">Plano Anual</option>
    </select>
  </div>
  
  <div className="plan-price">
    <p>Preço: <span id="price">Selecione um plano</span></p>
  </div>
  
  <div className="card-container" id="plan-cards">
  </div>
        </section>
  
        <section id="contato">
          <div className="social-icons">
            <a href="#" target="_blank"><i className="fab fa-instagram text-instagram"></i></a>
            <a href="#" target="_blank"><i className="fab fa-twitter text-twitter"></i></a>
            <a href="#" target="_blank"><i className="fab fa-facebook text-facebook"></i></a>
          </div>
        </section>
            
        </div>
    );
}

export default Home;