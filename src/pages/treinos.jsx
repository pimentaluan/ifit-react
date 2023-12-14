import React, { useRef } from 'react';
import logo from '../imgs/logo.png';
import { Link } from 'react-router-dom';
import '../style/treinos.css';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lnvajrohqoobgbonfurp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxudmFqcm9ocW9vYmdib25mdXJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyOTc4MTcsImV4cCI6MjAxNDg3MzgxN30.zd0sfXxI_22rI5oJ8FXLLMvisu23V4ZYPHUrGNt4MhE';

const supabase = createClient(supabaseUrl, supabaseKey);

function Treinos() {
  let partesDoCorpo = ['Tórax, Ombro ou Tríceps', 'Costas, Abdômen ou Bíceps', 'Parte Inferior, Pernas ou Glúteo'];
  let diaAtual = 0;

  const lesaoRef = useRef(null);
  const objetivoRef = useRef(null);
  const disponibilidadeRef = useRef(null);
  const localRef = useRef(null);

  const handleCriarTreino = () => {
    const lesao = lesaoRef.current.value;
    const objetivo = objetivoRef.current.value;
    const disponibilidade = disponibilidadeRef.current.value;
    const local = localRef.current.value;

    function gerarParteTrabalhada() {
      let partes = [];
      let i = 0;
      while (partes.length < disponibilidade) {
        let parte = partesDoCorpo[i % partesDoCorpo.length];
        if (parte !== lesao) {
          partes.push(parte);
        }
        i++;
      }
      return partes;
    }

    function selecionarExerciciosAleatorios(exercicios, quantidade) {
      let selecionados = [];
      while (selecionados.length < quantidade && exercicios.length > 0) {
        let indice = Math.floor(Math.random() * exercicios.length);
        selecionados.push(exercicios[indice]);
        exercicios.splice(indice, 1);
      }
      return selecionados;
    }

    async function montarTreinos() {
      try {
        let { data: exerciciosData, error } = await supabase
          .from('exercicios')
          .select('*');
    
        if (error) {
          throw error;
        }
    
        let exerciciosPorParte = {};
        exerciciosData.forEach(exercicio => {
          const parte = exercicio.parte;
          if (!exerciciosPorParte[parte]) {
            exerciciosPorParte[parte] = [];
          }
          exerciciosPorParte[parte].push(exercicio);
        });
    
        let partesTrabalhadas = gerarParteTrabalhada(disponibilidade, lesao);
        let treinos = [];
    
        for (let parte of partesTrabalhadas) {
          let possiveisExercicios = selecionarExerciciosAleatorios(exerciciosPorParte[parte], 3);
    
          if (possiveisExercicios.length === 0) {
            console.log(`Não há exercícios disponíveis para ${parte} com o objetivo ${objetivo} no local ${local}.`);
            continue;
          }
    
          let exerciciosSelecionados = selecionarExerciciosAleatorios(possiveisExercicios, Math.min(possiveisExercicios.length, 6 + Math.floor(Math.random() * 3)));
    
          treinos.push({
            parteDoCorpo: parte,
            exercicios: exerciciosSelecionados
          });
        }
    
        console.log('Treinos: ', treinos);
        return treinos;
      } catch (error) {
        console.error('Erro ao montar os treinos:', error);
        return [];
      }
    }
  };

  return (
    <main>
      <header>
        <Link to="/">
          <img src={logo} alt="Home" />
        </Link>
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
            <p>Data de nascimento</p>
            <input id="idade" type="number" />
          </div>
        </div>
  
        <div id="linha_2_caracter" className="linhas">
          <div>
            <p>Lesão</p>
            <select ref={lesaoRef} defaultValue="none">
              <option value="none" disabled hidden>Seleção</option>
              <option value="não">Nunca tive uma lesão</option>
              <option value="Tórax, Ombro ou Tríceps">Tórax, Ombro e Tríceps</option>
              <option value="Costas, Abdômen ou Bíceps">Costas, Abdômen e Bíceps</option>
              <option value="Parte Inferior, Pernas ou Glúteo">Parte Inferior, Pernas e Glúteo</option>
            </select>
          </div>
          <div>
            <p>Objetivo</p>
            <select ref={objetivoRef} defaultValue="none">
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
            <select ref={disponibilidadeRef} defaultValue="none">
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
            <select ref={localRef} defaultValue="none">
              <option value="none" disabled hidden>Seleção</option>
              <option value="Academia">Na academia</option>
              <option value="Em casa">Em casa, parques ou sem o máquinário da academia</option>
            </select>
          </div>
        </div>
  
        <div id="linha_5_caracter" className="linhas">
        <button id="montarTreino" onClick={handleCriarTreino}>Criar treino</button>
        </div>
        </section>

      <section id="infoTreinos">
      <div id="navegacao" className="hidden">
          <i id="diaAnterior" className="fas fa-arrow-left"></i>
          <i id="proximoDia" className="fas fa-arrow-right"></i>
        </div>
        <div id="treinos"></div>
      </section>
    </main>
  );
}

export default Treinos;