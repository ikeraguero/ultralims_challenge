
import * as model from './model.js'
import searchView from './views/searchView.js'
import cepView from './views/cepView.js'
import bookmarksView from './views/bookmarksView.js'


const controlCep = async function() {
    try {
        const id = searchView.getCepNumber()
        if(!id) throw new Error("Error");

        cepView.renderSpinner()
        const cep = await model.loadCep(id)
        if(!cep.cep) throw new Error("Error");
        
        cepView.render(cep)
        
    } catch(err) {
        console.log(err);
        cepView.renderError()
    }
}

const init = function() {
    searchView.addSearchHandler(controlCep)
    bookmarksView.renderBookmarks(model.bookmarks)
    cepView.init()
}
init()
