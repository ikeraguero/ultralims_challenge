import { bookmarks } from "../model";
import { updateBookmarksInLocalStorage } from "../model";
import bookmarksView from "./bookmarksView";
import renderBookmarks from './bookmarksView';

class CepView {
    #parentEl = document.querySelector(".main")
    data

    addButtonHandler(handler) {
        document.querySelector('.save-button').addEventListener('click', handler)
    }

    render(data) {
        this.data = data        
        const markup = this.#generateMarkup(data);
        this.#clear()
        this.#parentEl.insertAdjacentHTML('afterbegin', markup)
        this.addButtonHandler(this.save.bind(this))
    }

    #generateMarkup(data) {
        return `
        <h1 class="main-title">Informações encontradas!</h1>
        <ul class="cep-list">
        <li><span class='cep-list-property'>CEP </span><span class='cep-list-value'>${data.cep}</span></li>
        <li><span class='cep-list-property'>CIDADE </span><span class='cep-list-value'>${data.city}</span></li>
        <li><span class='cep-list-property'>BAIRRO </span><span class='cep-list-value'>${data.neighbourhood}</span></li>
        <li><span class='cep-list-property'>ESTADO </span><span class='cep-list-value'>${data.state}</span></li>
        <li><span class='cep-list-property'>IBGE </span><span class='cep-list-value'>${data.ibge}</span></li>
    </ul>
    <div class="save-button">SALVAR</div>
    `
    }

    #clear() {
        this.#parentEl.innerHTML = '';
    }

    save() {
        bookmarks.push(this.data)
        updateBookmarksInLocalStorage();
        bookmarksView.renderBookmarks(bookmarks)
    }
}

export default new CepView