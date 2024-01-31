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
  margin-right: auto;
  margin-left: auto;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  text-align: center;
  justify-items: center;
  align-items: center;
}
.foot a{
  color: #ff2a2a;
  text-decoration: none;
}
.foot a:hover{
  color: #ff2a2a;
  text-decoration: underline;
}
.foot ul{
  display: grid;
  list-style: none;
  grid-auto-flow: column;
  padding: 0px;
}
.foot ul li{
  display: inline-table;
}
.copy{
  font-size: 12px;
  font-weight: 400;
}

</style>
    <div class="foot">
    <ul>
      <li><a href="index.html"><i class="fa-solid fa-house"></i><br>Home</a></li>
      <li><a href="https://discord.gg/Dbf8Y25FeV"><i class="fa-brands fa-discord"></i><br>Discord</a></li>
      <li><a href="tos.html"><i class="fa-solid fa-file-contract"></i><br>Terms</a></li>
      <li><a href="privacy.html"><i class="fa-solid fa-lock"></i><br>Privacy</a></li>
      <li><a href="contact.html"><i class="fa-solid fa-envelope"></i><br>Contact</a></li>
      <li><a href="contact.html"><i class="fa-solid fa-envelope"></i><br>Contact</a></li>
    </ul>
    <p class="copy">&copy 2024 GameWeenies. All rights reserved.</span>
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