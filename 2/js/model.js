import { getJSON } from "./helper"

export const state = {
    cep: {}
}

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
        console.log(state.cep);
    } catch(err) {
        console.log(err);
        
    }
}