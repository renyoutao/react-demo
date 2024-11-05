import MyButton from "./MyButton";
import ProductList from "./Product";
import {useState} from "react";
import Search from "./Search";

function App() {

    const [count, setCount] = useState(0);

    function btnClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <p>first react project.....</p>
            <ProductList/>
            <MyButton count={count} btnClick={btnClick}/>
            <MyButton count={count} btnClick={btnClick}/>
            <br/>
            <Search/>
        </div>
    );
}

export default App;
