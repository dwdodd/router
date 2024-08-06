const verifyInputSearch = () => {
    if(MyElement('search')){
        const inputSearch = MyElement('search');
        inputSearch.addEventListener('keydounw', () => {
            MyElement('clear-search').style.display = 'block';
        });

        inputSearch.addEventListener('focus', () => {
            if(inputSearch.value){
                MyElement('clear-search').style.display = 'block';
            }
        });
    
        inputSearch.addEventListener('input', (e) => {
            if(e.target.value){
                MyElement('clear-search').style.display = 'block';
            } else{
                MyElement('clear-search').style.display = 'none';
            }
        });

        inputSearch.addEventListener('blur', () => {
            if(!inputSearch.value){
                MyElement('clear-search').style.display = 'none';
            }
        });
    }
};

export default verifyInputSearch;