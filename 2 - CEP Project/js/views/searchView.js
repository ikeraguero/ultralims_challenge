import cepView from "./cepView"

class SearchView {
    #parentEl = document.querySelector('.search-form')
    getCepNumber() {
        return this.#parentEl.querySelector(".search-input").value
    }

    addSearchHandler(handler) {
        this.#parentEl.addEventListener('submit', function(e) {
            e.preventDefault()
            handler()
        })
    }
}

export default new SearchView