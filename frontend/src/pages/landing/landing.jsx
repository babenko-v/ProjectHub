import cl from "./Landing.module.css"
import {useEffect, useState} from "react";
import axios from "axios";


function Landing() {
    const [products, setProducts] = useState([]);



    useEffect(() => {
        axios.get('http://127.0.0.1:8000/user/')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.log(error);
                console.error("Помилка при отриманні даних:", error);
            });
    }, []);


    return (
        <div className="container-fluid bodys">
            <div className="bg-black">
                <h1>Products</h1>
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>{product.name} - ${product.price}</li>
                    ))}
                </ul>
            </div>
            <div id="carouselExampleFade"
                 className="row carousel slide carousel-fade justify-content-center align-items-center allofthat"
                 data-bs-ride="carousel">
                <div className="col-xl-6 col-sm-8 www">
                <div className="carousel-innerс">
                        <b className={cl.rara}>Bumbai</b>
                    </div>
                    <button className="carousel-control-prev btn-prx" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next btn-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="col-xl-4 col-sm-8 col-12 main-text">
                    <h2 className="headerr">НАША ЛІКАРНЯ</h2>
                    <p className="textt">Елітна приватна лікарня в Києві - сучасний заклад у престижному районі з високотехнологічним обладнанням. Індивідуальні палати, комфорт та конфіденційність. Кваліфікований медперсонал, широкий спектр послуг, включаючи косметологію та антивікову медицину. Підвищений рівень обслуговування та уваги до пацієнтів </p>
                </div>
            </div>
        </div>
    );
}

export default Landing;