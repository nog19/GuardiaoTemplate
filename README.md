# Empresa de Segurança — Template para Portfólio

Um site estático enxuto e responsivo para exibir serviços, equipe e frota de uma empresa de segurança. Ideal para apresentar um projeto no seu portfólio: design moderno, tema claro/escuro, menu móvel com bloqueio de scroll e pequenas animações (AOS).

Demonstração rápida
- Abra `index.html` no navegador ou sirva a pasta com um servidor estático.
- Toggle de tema no canto superior direito.
- Menu móvel com bloqueio de scroll e overlay.
- Botão de WhatsApp flutuante e CTAs com telefone.

Tecnologias
- HTML5
- CSS (variáveis, responsividade)
- JavaScript (vanilla)
- Font Awesome (ícones)
- AOS (animações ao rolar)

Principais recursos
- Tema claro/escuro com preferência salva no `localStorage`.
- Menu móvel com lock de scroll (compatível com iOS).
- Header fixo que se esconde ao rolar para baixo e reaparece ao rolar para cima.
- Cards de serviços, galeria responsiva e CTA destacado.
- Variáveis de cor separadas em `variables.css` para fácil customização.

Estrutura do projeto
- index.html — página principal
- src/
  - css/
    - variables.css — paleta e tokens de cor
    - styles.css — estilos principais
  - js/
    - theme.js — lógica do tema e toggle
    - menu.js — controle do menu móvel e scroll lock
    - header.js — controle do header visível/oculto
  - images/ — imagens da galeria e hero
- README.md — este arquivo

Como executar localmente
- Com Python 3: `python -m http.server 8000` e acesse `http://localhost:8000`
- Ou use `serve .` (npm i -g serve)

Personalização rápida
- Cores: edite `src/css/variables.css`
- Logo / imagens: substitua em `src/images/`
- Texto: edite `index.html`

Licença
sinta-se livre para adaptar.