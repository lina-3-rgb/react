import{useState} from 'react';
import './Home.scss';


const Home = () => {
    const [value, setValue] = useState(5);
    const [hello, setHello]=useState('я живой')

    const name = () => {
        console.log ('Привет мир');
        setValue (value + 1)
        console.log(value)
    }
    const hi = () =>{
        console.log('Привет мир');
        setHello('привет мир')
    }


    return <div className="home-page">
        <div className="container">
            <h1>Главная страница</h1>
            <p>Здесь будет контент главной страницы</p>
            {value}
            {hello}
            <button onClick={name}>
                жми
            </button>
            <button onClick={hi}>
                я живой


            </button>
        </div>
    </div>
};

export default Home;