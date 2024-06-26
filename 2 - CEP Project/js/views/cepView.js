import { bookmarks } from "../model.js";
import { updateBookmarksInLocalStorage } from "../model.js";
import bookmarksView from "./bookmarksView.js";
import icons from '../../img/icons.svg'

class CepView {
    #parentEl = document.querySelector(".main")
    #message = 'Algo errado ocorreu em sua busca. Tente novamente!'
    data

    addButtonHandler(handler) {
        document.querySelector('.save-button').addEventListener('click', handler)
    }

    init() {
        const markup = `<div class="main-message">
        <svg class="main-icon">
            <use href="${icons}#icon-smile"></use>
          </svg>
          <span class="main-text">Comece procurando por um CEP existente ou selecionando CEPs salvos para exibir informação!</span>
    </div>`

    this.#parentEl.insertAdjacentHTML("afterbegin", markup)
    }
    
    renderSpinner() {
        const markup = `<div class="spinner">
    <svg>
        <use href="${icons}#icon-loader"></use>
    </svg>
        </div>`

    this.#parentEl.innerHTML = ''    
    this.#parentEl.insertAdjacentHTML("afterbegin", markup)
    }

    renderError(message = this.#message) {
        const markup = `<div class="error-message">
        <div>
          <svg class='error-icon'>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <span class='error-text'>${message}</span>
      </div>`

    this.#clear();
    this.#parentEl.insertAdjacentHTML('afterbegin', markup)
    }

    render(data) {
        this.data = data
        const markup = this.#generateMarkup(data);
        this.#clear()
        this.#parentEl.insertAdjacentHTML('afterbegin', markup)
        const isSaved = bookmarks.some(bookmark => bookmark.cep === data.cep);
        if (isSaved) {
            const saveButton = document.querySelector('.save-button');
            if (saveButton) saveButton.remove();
        } else {
            this.addButtonHandler(this.save.bind(this));
        }
    }

    #generateMarkup(data) {
        return `
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
        this.render(this.data)
    }
}

export default new CepView