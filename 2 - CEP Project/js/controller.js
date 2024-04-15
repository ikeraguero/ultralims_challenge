
import * as model from './model.js'
import searchView from './views/searchView.js'
import cepView from './views/cepView.js'
import bookmarksView from './views/bookmarksView.js'


const controlCep = async function() {
    try {
        const id = searchView.getCepNumber()
        const cep = await model.loadCep(id)
        console.log(cep);
        
        cepView.render(cep)
        
    } catch(err) {
        console.log(err);
        
    }
}

const init = function() {
    searchView.addSearchHandler(controlCep)
    bookmarksView.renderBookmarks(model.bookmarks)
}
init()
