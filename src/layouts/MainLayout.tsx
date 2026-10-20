import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";

function MainLayout(){
    return(
        <>
            <Header/>

            <main className="container my-4">
                <Outlet/>
            </main>

        </>
    )
}

export default MainLayout