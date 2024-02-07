const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
<style>
    .foot{
    grid-area: f; min-width: 100%;
    display: grid;
    grid: "left right"
          "copy copy";
    grid-template-columns: auto, auto;
    column-gap: 20px;
    background-color: #1a1a1a !important;
    background-image: none !important;
    font-size: small !important;
    color: antiquewhite !important;
    height: 100% !important;
    }
    a{
    text-decoration: none;
    color: #ff2a2a;
    }
    ul{
    list-style-type: none;
    padding: 0;
    }
    h1{
    font-size: small;
    }
</style>
<div class="foot">
<div id="left" style="grid-area: left; margin-left: auto; background: yellow;">
        <h1>Site</h1>
        <ul>
            <li><a href="index.html"><i class="fa-solid fa-house"></i>&nbspHome</a></li>
            <li><a href="https://discord.gg/Dbf8Y25FeV"><i class="fa-brands fa-discord"></i>&nbspDiscord</a></li>
            <li><a href="contact.html"><i class="fa-solid fa-envelope"></i>&nbspContact</a></li>
        </ul>
    </div>
    <div id="right" style="grid-area: right; background: green;">
        <h1>Information</h1>
        <ul>
            <li><a href="tos.html"><i class="fa-solid fa-file-contract"></i>&nbspTerms and Conditions</a></li>
            <li><a href="privacy.html"><i class="fa-solid fa-lock"></i>&nbspPrivacy Notice</a></li>
            <li><a href="tos.html"><i class="fa-solid fa-file-contract"></i>&nbspTerms and Conditions</a></li>
            <li><a href="privacy.html"><i class="fa-solid fa-lock"></i>&nbspPrivacy Notice</a></li>
            <li><a href="tos.html"><i class="fa-solid fa-file-contract"></i>&nbspTerms and Conditions</a></li>
            <li><a href="privacy.html"><i class="fa-solid fa-lock"></i>&nbspPrivacy Notice</a></li>
        </ul>
        
    </div>
    <div id="copyright" style="grid-area: copy; text-align: center; background: blue;">
        <em><strong>&copy 2024 GameWeenies. All rights reserved.</strong></em>
    </div>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    
    const fontAwesome = document.querySelector('link[href*="font-awesome"]');
    const shadowRoot = this.attachShadow({ mode: 'open' });

    if (fontAwesome) {
      shadowRoot.appendChild(fontAwesome.cloneNode());
    }

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);
