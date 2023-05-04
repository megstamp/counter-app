import Header from "../components/Header.jsx";
import Counter from "../components/Counter.jsx";
import Footer from "../components/Footer.jsx";

export default function Homepage () {

    return (
        <>
            <div className="main-container">
                <Header />
                <Counter />            
            </div>
            <Footer />
        </>
    )
}