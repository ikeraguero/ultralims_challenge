import { getJSON } from "./helper"

export const state = {
    cep: {}
}

export const bookmarks = []

let retrievedArray = JSON.parse(localStorage.getItem('bookmarks'));
console.log(retrievedArray);


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