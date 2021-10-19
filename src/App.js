import './App.css';

const App = () => {
    return (
        <div>
            <Header />
            <Technologies />

        </div>
    )
}

const Technologies = ()=>{
    return(
        <ul>
            <li>css</li>
            <li>react</li>
            <li>js</li>
        </ul>
    )
}
const Header = ()=> {
    return(
        <div>
            <a href="#">Home</a>
            <a href="#">New fead</a>
            <a href="#">Message</a>
        </div>
    )
}
export default App;
