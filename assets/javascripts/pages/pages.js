import setFaq from './pages/setFaq';
import setAbas from './pages/setAbas';
//addImports

const Page = {
  init: function () {
    var _this = this;
    setFaq()
setAbas()
//calls
  },
};

window.addEventListener('DOMContentLoaded', () => {
  Page.init()
})
