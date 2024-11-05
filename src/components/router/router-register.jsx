import {createBrowserRouter} from 'react-router-dom'
import Home from './home';
import About from './about';
import Contact from './contact';

const routerRegister = createBrowserRouter([{
    path: "/",
    element: <Home/>
}, {
    path: "/about",
    element: <About/>
}, {
    path: "/contact",
    element: <Contact/>
}
])

export default routerRegister;

