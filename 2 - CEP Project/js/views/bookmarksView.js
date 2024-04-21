import { bookmarks } from "../model";
import cepView from "./cepView";

class BookmarksView {
    #parentEl = document.querySelector('.saved-list')

    renderBookmarks(arr) {
        this.#parentEl.innerHTML = ''
        arr.forEach(el => {
            const markup = this.#generateMarkup(el);
            this.#parentEl.insertAdjacentHTML('afterbegin', markup)
            document.querySelector(".bookmarks-container").addEventListener('click', function(e) {
                cepView.render(el)
            })
        });
    }

    #generateMarkup(data) {
        return `<div class="bookmarks-container">
        <div class="cep-number"><span>${data.cep}</span></div>
        <div class="cep-description">
            <ul class="cep-description-list">
                <li>
                    <span>UF:</span>
                    <span class='bookmark-value'>${data.state}</span>
                </li>
                <li><span>Cidade:</span>
                    <span class='bookmark-value'>${data.city}</span></li>
                <li>
                    <span>Bairro:</span>
                    <span class='bookmark-value'>${data.neighbourhood}</span>
                </li>
                <li>
                    <span>IBGE:</span>
                    <span class='bookmark-value'>${data.ibge}</span>
                </li>
            </ul>
        </div>
    </div>
    `
    }
}

export default new BookmarksView