import axios from 'axios'


function Search() {

    const state = {
        searchKey: ''
    }

    function btnSearch() {
        console.log(state.searchKey)
        axios.get("http://localhost:8080/getOk").then(res => {
            console.log(res)
        })
    }

    function inputChange(event) {
        state.searchKey = event.target.value;
    }

    return (
        <>
            <input type="text" defaultValue={state.searchKey} onChange={inputChange}/>
            <button onClick={btnSearch} style={{width: '100px', height: '24px'}}>search</button>
        </>
    );

}

export default Search;