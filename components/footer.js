const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
<style>
.foot {
  display:  table;
  table-layout: fixed;
  background-color: white;
  border: medium solid black;
  border-radius: 10px;
  box-shadow: 2px 2px 5px black;
  width: 85vw;
  height: fit-content;
  margin-left: auto;
  margin-right: auto;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  text-align: center;
}
.foot a{
  color: #ff2a2a;
  text-decoration: none;
}
.foot a:hover{
  color: #ff2a2a;
  text-decoration: underline;
}
.foot p{
  display: table-row;
  width: auto;
}
.foot span{
  display: table-cell;
  padding: 4px;
}
</style>
    <div class="foot">
    <p>
      <span><a href="index.html"><i class="fa-solid fa-house"></i><br>Home</a></span>
      <span><a href="https://discord.gg"><i class="fa-brands fa-discord"></i><br>Discord</a></span>
      <span><a href="tos.html"><i class="fa-solid fa-file-contract"></i><br>Terms</a></span>
      <span><a href="privacy.html"><i class="fa-solid fa-lock"></i><br>Privacy</a></span>
      <span><a href="contact.html"><i class="fa-solid fa-envelope"></i><br>Contact</a></span>
    </p>
    </div>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const fontAwesome = document.querySelector('link[href*="font-awesome"]');
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    if (fontAwesome) {
      shadowRoot.appendChild(fontAwesome.cloneNode());
    }

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);