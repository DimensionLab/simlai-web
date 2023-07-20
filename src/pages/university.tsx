import Footer from "@/components/homepage/Footer";
import Header from "@/components/homepage/Header";
import Layout from "@/components/Layout";
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
            <main className="w-full h-full flex flex-col justify-between min-h-screen">
                <Header open={!isOpen} onClose={handleOpen} whichSubpage={"university"}/>
                <section>Something</section>
                <Footer open={!isOpen}/>
            </main>
        </Layout>
    )
}

export default University;