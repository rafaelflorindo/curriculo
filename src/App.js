import fotoPerfil from './fotoPerfil.jpeg'
import './App.css'

function App() {
  return (
    <div>
      <header>
        <img src={fotoPerfil}></img>
        <h1>Rafael Florindo</h1>
      </header>

      <main>
        <section>
          <h2>Objetivo: Ministrar aulas de desenvolvimento em Sistemas</h2>
        </section>

        <section>
          <h1>Dados para contato</h1>
          <h2>Rafael Florindo</h2>
          <p>44 xxxxx-xxxx</p>
          <p>E-mail: rafael.forindo@escola.pr.gov.br</p>
          <p>Linkdin: xxxxxxxx</p>
          <p>GitHub: xxxx</p>
        </section>

        <section>
          <h1>Formação</h1>
          <div>
            <article>
              <h2>Ensino médio Profissionalizante em Desenvolvimento de Sistemas</h2>
              <p>Instituição: Colégio Santa Maria Goretti</p>
              <p>Ano de Conclusão: 2027</p>
            </article>

            <article>
              <h2>Bacharel em Ciências da Computação</h2>
              <p>Instituição: FAI </p>
              <p>Ano de Conclusão: 2003</p>
            </article>
          </div>
        </section>

        <section>
          <h1>Experiência profissional</h1>
          <div>
            <article>
              <h2>Empresa: Seed-PR</h2>
              <p>Função/cargo: Professor</p>
              <p>Período: desde 2009</p>
            </article>
            <article>
              <h2>Empresa: Unifamma</h2>
              <p>Função/cargo: Professor</p>
              <p>Período: 2020 - 2022</p>
            </article>
          </div>
        </section>
      </main>

      <footer>
        <div>Desenvolvido por Rafael Florindo</div>
      </footer>
    </div>
  );
}

export default App;
