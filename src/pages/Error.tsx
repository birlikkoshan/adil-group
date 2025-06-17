import { Navbar } from "../components/Navbar";

export const Error = () => (
<div className="main" style={{ overflow: 'hidden'}}>
    <Navbar/>
    <section className="hero"  style={{height: '63.3vh'}}>
        <div className="hero-text">
           <h2>Error!</h2>
           <p>Страница не найдена</p>
         </div>
    </section>
</div>
)