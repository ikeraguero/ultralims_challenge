
import * as model from './model.js'
import searchView from './views/searchView.js'


const controlCep = async function() {
    try {
        const id = searchView.getCepNumber()
        const cep = await model.loadCep(id)
        console.log(cep);
        
    } catch(err) {
        console.log(err);
        
    }
}

const init = function() {
    searchView.addSearchHandler(controlCep)
}
init()
