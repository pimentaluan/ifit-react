import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Treinos() {
  const treinosContent = (
    <section>
      <header>
        
      </header>

      <h1>Crie seu próprio treino</h1>

      <section id="infoCaracteristicas">
        <div id="linha_1_caracter" className="linhas">
          <div>
            <p>Altura (cm)</p>
            <input id="altura" type="number" />
          </div>
          <div>
            <p>Peso (kg)</p>
            <input id="peso" type="number" />
          </div>
          <div>
            <p>Idade</p>
            <input id="idade" type="number" />
          </div>
        </div>
  
        <div id="linha_2_caracter" className="linhas">
          <div>
            <p>Lesão</p>
            <select id="lesao" defaultValue="none">
              <option value="none" disabled hidden>Seleção</option>
              <option value="não">Nunca tive uma lesão</option>
              <option value="Tórax, Ombro ou Tríceps">Tórax, Ombro e Tríceps</option>
              <option value="Costas, Abdômen ou Bíceps">Costas, Abdômen e Bíceps</option>
              <option value="Parte Inferior, Pernas ou Glúteo">Parte Inferior, Pernas e Glúteo</option>
            </select>
          </div>
          <div>
            <p>Objetivo</p>
            <select id="objetivo" defaultValue="none">
              <option value="none" disabled hidden>Seleção</option>
              <option value="Criar massa muscular">Criar massa muscular</option>
              <option value="Emagrecer">Emagrecer</option>
              <option value="Melhorar a saúde">Melhorar a saúde</option>
            </select>
          </div>
        </div>
  
        <div id="linha_3_caracter" className="linhas">
          <div>
            <p>Disponibilidade</p>
            <select id="dias" defaultValue="none">
              <option value="none" disabled hidden>Seleção</option>
              <option value="2">Posso treinar 2 vezes na semana</option>
              <option value="3">Posso treinar 3 vezes na semana</option>
              <option value="4">Posso treinar 4 vezes na semana</option>
              <option value="5">Posso treinar 5 vezes na semana</option>
              <option value="6">Posso treinar 6 vezes na semana</option>
              <option value="7">Posso treinar 7 vezes na semana</option>
            </select>
          </div>
        </div>
  
        <div id="linha_4_caracter" className="linhas">
          <div>
            <p>Local de treino</p>
            <select id="local" defaultValue="none">
              <option value="none" disabled hidden>Seleção</option>
              <option value="Academia">Na academia</option>
              <option value="Em casa">Em casa, parques ou sem o máquinário da academia</option>
            </select>
          </div>
        </div>
  
        <div id="linha_4_caracter" className="linhas">
          <button id="montarTreino">Criar treino</button>
        </div>
      </section>
  
      <section id="infoTreinos">
        <div id="navegacao" className="hidden">
          <i id="diaAnterior" className="fas fa-arrow-left"></i>
          <i id="proximoDia" className="fas fa-arrow-right"></i>
        </div>
        <div id="treinos"></div>
        <div>
          <button id="novasop" className="hidden">Gerar novas opções!</button>
        </div>
      </section>
      </section>
  );

  return (
    <Router>
      <Routes>
        <Route path="/treinos" element={treinosContent} />
      </Routes>
    </Router>
  );
}

export default Treinos;