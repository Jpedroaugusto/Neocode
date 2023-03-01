import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Main } from '../components/Main/Main';

export function Home() {
    return (
        <div id="page-home">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}