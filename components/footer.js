class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
          ul li {
            list-style: none;
            display: inline;
          }
          .social-row {
            font-size: 20px;
          }
          
          .social-row li a {
            margin: 0 15px;
          }
        </style>
        <footer>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li>|</li>
            <li><a href="tos.html">Terms and Conditions</a></li>
            <li>|</li>
            <li><a href="privacy.html">Privacy Notice</a></li>
            <li>|</li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);