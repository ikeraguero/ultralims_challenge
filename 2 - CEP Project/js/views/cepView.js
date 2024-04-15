import { bookmarks } from "../model";

class CepView {
    #parentEl = document.querySelector(".main")
    data

    addButtonHandler(handler) {
        document.querySelector('.save-button').addEventListener('click', handler)
    }

    render(data) {
        console.log(data);
        this.data = data        
        const markup = this.#generateMarkup(data);
        this.#clear()
        this.#parentEl.insertAdjacentHTML('afterbegin', markup)
        this.addButtonHandler(this.save.bind(this))
    }

    #generateMarkup(data) {
        return `<li class="cep-list">
        <ul>CEP: ${data.cep}</ul>
        <ul>Cidade: ${data.city}</ul>
        <ul>Bairro: ${data.neighbourhood}</ul>
        <ul>Estado: ${data.state}</ul>
        <ul>IBGE: ${data.ibge}</ul>
    </li>
    <div class="save-button">SALVAR</div>
    `
    }

    #clear() {
        this.#parentEl.innerHTML = '';
    }

    save() {
        bookmarks.push(this.data)
        this.#setLocalStorage()
        
    }

    #setLocalStorage() {
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks))
    }
}

export default new CepView