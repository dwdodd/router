const verifyInputSearch = () => {
    if(document.getElementById('search')){
        const inputSearch = document.getElementById('search');
        inputSearch.addEventListener('keydounw', () => {
            document.getElementById('clear-search').style.display = 'block';
        });

        inputSearch.addEventListener('focus', () => {
            if(inputSearch.value){
                document.getElementById('clear-search').style.display = 'block';
            }
        });
    
        inputSearch.addEventListener('input', (e) => {
            if(e.target.value){
                document.getElementById('clear-search').style.display = 'block';
            } else{
                document.getElementById('clear-search').style.display = 'none';
            }
        });

        inputSearch.addEventListener('blur', () => {
            if(!inputSearch.value){
                document.getElementById('clear-search').style.display = 'none';
            }
        });
    }
};

export default verifyInputSearch;