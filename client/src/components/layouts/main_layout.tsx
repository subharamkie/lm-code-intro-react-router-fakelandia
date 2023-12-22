import {Outlet} from "react-router-dom";
import Header from "../header/Header";

const MainLayout:React.FC = () =>{
    return (
        <>
        <Header/>
        <main>
            <Outlet/>
        </main>
        </>
    )
}
export default MainLayout;