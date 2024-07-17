// inspriation - https://youtu.be/AiQqip_pVbA?si=AQvqsSNPHOban21S
// currently, this is not functioning in the site

class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <nav class="navbar">
                <div class="logo"><h1><a href="/">andrew doyle</a></h1></div>
                    <a href="#" class="toggle-button">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </a>
                <div class="navbar-links">
                    <ul>
                        <li><a href="/">home</a></li>
                        <li><a href="#projects">projects</a></li>
                        <li><a href="#about">about</a></li>
                    </ul>
                </div>
            </nav>
        </header>
        `
    }
}

class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="smelly-boi">
            <nav>
                <li>
                    <ul>
                        <i class="fa-regular fa-envelope fa-2x"></i>
                        <a href="mailto:andrewfdoyle@proton.me">andrewfdoyle@proton.me</a>
                        <i class="fa-brands fa-linkedin fa-2x"></i>
                        <a href="https://www.linkedin.com/in/andrewfdoyle/">Linkedin</a>
                    </ul>
                </li>
            </nav>
        </footer>
        `
    }
}

customElements.define('site-header', SiteHeader)
customElements.define('site-footer', SiteFooter)
