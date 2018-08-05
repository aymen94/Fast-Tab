/* Author: aymen Naghmouchi */

const SEARCH_ENGINES = {
    'default': 'https://www.google.com/search?q={searchTerms}',
    'google':'https://www.google.com/search?q={searchTerms}',
    'bing':'https://www.bing.com/search?q={searchTerms}',
    'youtube':'https://www.youtube.com/results?q={searchTerms}',
    'yahoo': 'https://search.yahoo.com/search?p={searchTerms}',
    'ask' :'http://www.ask.com/web?q={searchTerms}'
};
var engine= SEARCH_ENGINES.default;

function search(e){
    e.preventDefault();
    let query = document.getElementsByClassName('search-box')[0].value;
    if (query.length > 0)
        window.location.href = engine.replace('{searchTerms}', encodeURIComponent(query));
}

document.getElementById('selectEngine').addEventListener('change',function(){
    engine = SEARCH_ENGINES[this.options[this.selectedIndex].value];
});
document.forms[0].addEventListener('submit',search);
