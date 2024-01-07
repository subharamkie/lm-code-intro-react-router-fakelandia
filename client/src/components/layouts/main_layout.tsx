import {Outlet} from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";

const MainLayout= () =>{
    return (
        <>
        <Header/>
        <main className='p-6 home'>
            <Outlet/>
        </main>
        <Footer/>
        </>
    )
}
export default MainLayout;