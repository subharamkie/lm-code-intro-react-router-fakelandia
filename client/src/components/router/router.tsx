import { Routes,Route } from "react-router-dom"
import MainLayout from "../layouts/main_layout";
import Home from "../home/home";
import {MisdemeanourContainer} from "../misdemeanour/misdemeanour_container";
import Confessions from "../confessions/confessions";
import NotFound from "../notfound/notFound";


const Router:React.FC =() =>{
    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<Home/>}/>
                <Route path="misdemeanours" element={<MisdemeanourContainer/>}/>
                <Route path="confession" element={<Confessions/>}/>
                <Route path="*" element={<NotFound/>}/>

            </Route>
        </Routes>
        
    )
}
export default Router;