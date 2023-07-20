import Footer from "@/components/homepage/Footer";
import Header from "@/components/homepage/Header";
import DropdownMenu from "@/components/homepage/main-components/mobile-components/DropdownMenu";
import Layout from "@/components/Layout";
import MainUni from "@/components/university-components/MainUni";
import { useState } from "react";

const University = () => {
const [isOpen, setIsOpen] = useState(true);

const handleOpen = () => {
    setIsOpen(prevIsOpen =>  {
    return !prevIsOpen;
    });
}
    return (
        <Layout>
            <main className={`w-full h-full flex flex-col justify-between items-center min-h-screen ${!isOpen ? `hidden` : ``}`}>
                <Header open={!isOpen} onClose={handleOpen} whichSubpage={"university"}/>
                <MainUni/>
                <Footer open={!isOpen}/>
            </main>
            <div className={`w-full h-full ${isOpen ? `hidden` : `flex flex-col`}`}>
                <DropdownMenu open={!isOpen} onClose={handleOpen}/>
            </div>  
        </Layout>
    )
}

export default University;