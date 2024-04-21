import { getJSON } from "./helper.js"

export const state = {
    cep: {}
}

export let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];


export const loadCep = async function(id) {
    try {
        const data = await getJSON(`https://viacep.com.br/ws/${id}/json`)
        state.cep = {
            neighbourhood: data.bairro,
            cep: data.cep,
            ddd: data.ddd,
            ibge: data.ibge,
            city: data.localidade,
            street: data.logradouro,
            state: data.uf
        }
        return state.cep
    } catch(err) {
        console.log(err);
        
    }
}

export const updateBookmarksInLocalStorage = () => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
};
