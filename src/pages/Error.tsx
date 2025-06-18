import { Navbar, TopNav } from "../components";

export const Error = () => (
    <div className="main" style={{ overflow: 'hidden'}}>
        <TopNav/>
        <Navbar/>
        <section className="hero"  style={{height: '63.3vh'}}>
            <div className="hero-text">
               <h2>Error!</h2>
               <p>Страница не найдена</p>
             </div>
        </section>
    </div>
)