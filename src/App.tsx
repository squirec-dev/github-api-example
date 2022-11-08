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
                <Search />
            </main>
            <Footer />
        </>
    );
};

export default App;
