var y = `
<template id="tmpl">
    <h1>title: ${this.title}</h1>
    <img src="${this.imageurl}" alt="">
    <p>subtitle: ${this.subtitle}</p>
</template>`;

class BdTarot extends HTMLElement {
    static get observedAttributes() {
        return ['imageurl'];
    }
    constructor() {
        super();
        this._imageurl;
        this._title;
        this._subtitle;
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

    get title() {
        return this._title;
    }

    set title(val) {
        if(val) {
            this._title = val;
            this.setAttribute('title', val);
        } else {
            this.removeAttribute('title');
            console.log('title removed')
        }
    }

    get subtitle() {
        return this._subtitle;
    }

    set subtitle(val) {
        if(val) {
            this._subtitle = val;
            this.setAttribute('subtitle', val);
        } else {
            this.removeAttribute('subtitle');
            console.log('subtitle removed')
        }
    }

    connectedCallback() {
        this._imageurl = this.getAttribute('imageurl');
        this.imageurl = this._imageurl;

        this._title = this.getAttribute('title');
        this.title = this._title;

        this._subtitle = this.getAttribute('subtitle');
        this.subtitle = this._subtitle;

        this.innerHTML = `
            <template id="tmpl">
                <h1>title: ${this.title}</h1>
                <img src="${this.imageurl}" alt="">
                <p>subtitle: ${this.subtitle}</p>
            </template>`;
        var _tmpl = this.querySelector('#tmpl');
        this.appendChild(_tmpl.content.cloneNode(true));
    }

    attributeChangedCallback() {
        
    }
}

customElements.define('bd-tarot', BdTarot);