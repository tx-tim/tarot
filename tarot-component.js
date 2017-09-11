var tmpl = `
<template id="tmpl">
    <style>
      :host {
        border: 1px solid black;
        display: block;
        height: 18.75rem;
        position: relative;
        text-align: center;
      }
      h1 {
        color: blue;
      }
      img { 
        height: 100%;
      }
    </style>
    <h1 class="tarot-title">
        <slot name="title">NEED TITLE</slot>
    </h1>
    <img src="${this.imageurl}" alt="">
    <p>
        <slot name="subtitle">NEED A SUBTITLE</slot>
    </p>
</template>`;

class BdTarot extends HTMLElement {
    static get observedAttributes() {
        return ['imageurl'];
    }

    constructor(props = {_imageurl:  ""}) {
        super();
        this._shadowRoot = this.attachShadow({
            mode: 'open'
        });
        this._imageurl = props._imageurl;
    }

    get imageurl() {
        return this._imageurl;
    }

    set imageurl(url) {
        if(url) {
            this._imageurl = url;
            this.setAttribute('imageurl', url)
        } else {
            this.removeAttribute('imageurl');
        }
    }

    connectedCallback() {
        this._shadowRoot.innerHTML = tmpl;
        var _tmpl = this._shadowRoot.querySelector('#tmpl');
        this._shadowRoot.appendChild(_tmpl.content.cloneNode(true));

        this.imgNode = this._shadowRoot.querySelector('img');
        this._imageurl = this.getAttribute('imageurl');
        this.imageurl = this._imageurl;

        this.attachImage()

    }

    attributeChangedCallback(prop, oldval, newval) {
        if (oldval !== newval) {
            this.attachImage();
        }
    }

    attachImage() {
        if(this.imgNode) {
            this.imgNode.src = this.imageurl;
            this.imgNode.setAttribute('src', this.imageurl);
        }
    }
}

customElements.define('bd-tarot', BdTarot);