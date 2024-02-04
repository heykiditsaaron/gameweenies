const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
<style>
    .footer{
        display: table;
        background-color: #1a1a1a;
        width: 100%;
        height: fit-content;
        font-family: Arial, Helvetica, sans-serif;
        font-size: small;
        color: #c2c2c2;
    }
    .footer a{
        text-decoration: none;
        color: #ff2a2a;
    }
    .footer h1{
        font-size: small;
        font-style: oblique;
        margin-left: 10%;
    }
    .footer p{
        margin: 0;
    }
    .footer ul{
        list-style: none;
    }
    .footer li{
        margin: 2px 2px;
    }
    .fspan{
        display: table;
        width: 100%;
        margin-right: 0;
        padding-top: 8px;
        padding-bottom: 8px;
    }
    .left{
        display: table-cell;
        width: 50%;
        border-right: 2px solid #2b2b2b;
        padding-left: 25%;
    }
    .right{
        display: table-cell;
        width: auto;
        text-align: justified;
        padding-left: 10%;
    }
    .copy{
        display: table-row;
        width: 100%;
        height: fit-content;
        padding-top: 44px;
        margin-top: 44px;
        text-align: center;
        font-size: smaller;
        font-weight: 400;
    }
    .weenie{
      position: absolute;
      height: max(175%, 10vh);
      bottom: 0;
      left: 0;
    }
    </style>
    <div class="footer">
        <div class="fspan">
            <div>
            <img src="https://gameweenies.net/img/weenie.png" title="GameWeenie" class="weenie">
            </div>
            <div class="left">
                <h1>Site</h1>
                <ul>
                <li><a href="index.html"><i class="fa-solid fa-house"></i>&nbspHome</a></li>
                <li><a href="https://discord.gg/Dbf8Y25FeV"><i class="fa-brands fa-discord"></i>&nbspDiscord</a></li>
                <li><a href="contact.html"><i class="fa-solid fa-envelope"></i>&nbspContact</a></li>
                </ul>
            </div>
            <div class="right">
                <h1>Information</h1>
                <ul>
                <li><a href="tos.html"><i class="fa-solid fa-file-contract"></i>&nbspTerms and Conditions</a></li>
                <li><a href="privacy.html"><i class="fa-solid fa-lock"></i>&nbspPrivacy Notice</a></li>
                </ul>
            </div>
        </div>
        <div class="copy">
                <em><strong>&copy 2024 GameWeenies. All rights reserved.</strong></em>
        </div>
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
