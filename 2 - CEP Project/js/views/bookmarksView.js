
class BookmarksView {
    #parentEl = document.querySelector('.saved-list')

    renderBookmarks(arr) {
        this.#parentEl.innerHTML = ''
        arr.forEach(el => {
            const markup = this.#generateMarkup(el);
            this.#parentEl.insertAdjacentHTML('afterbegin', markup)
        });
    }

    #generateMarkup(data) {
        return `<div class="bookmarks-container">
        <div class="cep-number"><span>89232-040</span></div>
        <div class="cep-description">
            <ul class="cep-description-list">
                <li>
                    <span>UF:</span>
                    <span>${data.cep}</span>
                </li>
                <li><span>Cidade:</span>
                    <span>${data.city}</span></li>
                <li>
                    <span>Bairro:</span>
                    <span>${data.neighbourhood}</span>
                </li>
                <li>
                    <span>IBGE:</span>
                    <span>${data.ibge}</span>
                </li>
            </ul>
        </div>
    </div>
    `
    }
}

export default new BookmarksView