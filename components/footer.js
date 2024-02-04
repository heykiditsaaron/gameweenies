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
        margin: 1;
    }
    .footer p{
        margin: 0;
    }
    .fspan{
        display: table;
        margin: 0;
        margin-right: 0;
        padding-top: 4px;
        padding-bottom: 8px;
    }
    .left{
        display: table-cell;
        width: 32vw;
        padding-left: 4%;
    }
    .mid{
        display: table-cell;
        width: 33vw;
        padding-left: 4%;
    }
    .right{
        display: table-cell;
        padding-left: 4%;
        width: auto;
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
      width: 28vw;
      bottom: 0;
      left: 0;
    }
    </style><img src="https://gameweenies.net/img/weenie.png" title="GameWeenie" class="weenie">
    <div class="footer">
        <div class="fspan">
        
            <div class="left">
            
            </div>
            <div class="mid">
            <h1>Claims</h1>
            <p>a</p>
            <p>b</p>
            <p>c</p>
            <p>d</p>
            <p>e</p>
            </div>
            <div class="right">
                <h1>Information</h1>
                <ul style="list-style: none; margin: 0; padding-left: 8px;">
                <li><a href="index.html"><i class="fa-solid fa-house"></i>Home</a></li>
                <li><a href="https://discord.gg/Dbf8Y25FeV"><i class="fa-brands fa-discord"></i>Discord</a></li>
                <li><a href="tos.html"><i class="fa-solid fa-file-contract"></i>Terms and Conditions</a></li>
                <li><a href="privacy.html"><i class="fa-solid fa-lock"></i>Privacy Notice</a></li>
                <li><a href="contact.html"><i class="fa-solid fa-envelope"></i>Contact</a></li>
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