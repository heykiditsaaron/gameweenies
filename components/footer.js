const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
<style>
.foot {
  display:  table;
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
  text-align: center;
}
.foot span{
  display: table-cell;
  widht: auto;
  padding: 4px 7px;
}
.weenie {
  display: block;
  margin-left: 0px;
  margin-right: auto;
  width: 7vw;
  position: fixed;
  margin-top: 0px;
  margin-bottom: 1px;
}
</style>
    <div class="foot">
    <p>
      <span><img src="./img/weenie.png" class="weenie"></span>

      <span><a href="index.html"><i class="fa-solid fa-house"></i>Home</a></span>
      
      <span><a href="tos.html">Terms</a></span>
      
      <span><a href="privacy.html">Privacy Notice</a></span>
      
      <span><a href="contact.html">Contact</a></span>

      <span><a href="https://discord.gg"><i class="fab fa-discord"></i></i></a></span>

      <span><a href="https://twitter.com/my-twitter-profile"><i class="fab fa-twitter"></i></a></span>
      
      <span><a href="https://www.linkedin.com/in/my-linkedin-profile"><i class="fab fa-linkedin"></i></a></span>
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