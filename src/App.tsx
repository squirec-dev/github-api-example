import {
    Header,
    Footer,
} from "components";
import Search from "pages/Search";

const App = () => {
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <Search />
                </div>
            </main>
            <Footer />
        </>
    );
};

export default App;
