class SearchView {
    #parentEl = document.querySelector('.search-form')
    getCepNumber() {
        return this.#parentEl.querySelector(".search-input").value
    }

    addSearchHandler(handler) {
        this.#parentEl.addEventListener('submit', function(e) {
            e.preventDefault()
            handler()
            this.#parentEl.querySelector(".search-input").value = '';
        }.bind(this))
    }
}

export default new SearchView