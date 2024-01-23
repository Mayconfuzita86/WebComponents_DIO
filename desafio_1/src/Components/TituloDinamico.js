// Conteúdo do arquivo TituloDinamico.js
class TituloDinamico extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });

        // Verificar se o atributo "titulodocard" está presente
        //const tituloDoCard = this.getAttribute("titulodocard") || "Default Title";
        const tituloDoCard = this.getAttribute("titulodocard");

        // Base do componente
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = tituloDoCard;

        // Estilizar o componente
        const style = document.createElement("style");
        style.textContent = `
            h1 {
                color: red;
            }
        `;

        // Enviar para a sombra
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}

customElements.define("titulo-dinamico", TituloDinamico);
