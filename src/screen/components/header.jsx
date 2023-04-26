import logo from '../../image/ww.png';
const Header = () => {
    return(
        <div>
            <div className="col-12 mt-3 bg-light p-2">
                    <a href=''><img className="ms-5" width={140} height={90} src={logo}></img></a>
                    <b className="link radius ps-4 pe-4 p-2"><a className="text text-dark" href="">Главная</a></b>
                    <b className="link radius ps-4 pe-4 p-2"><a className="text text-dark" href="">Футбол</a></b>
                    <b className="link radius ps-4 pe-4 p-2"><a className="text text-dark" href="">Хоккей</a></b>
                    <b className="link radius ps-4 pe-4 p-2"><a className="text text-dark" href="">Баскетбол</a></b>
                    <b className="link radius ps-4 pe-4 p-2"><a className="text text-dark" href="">Авто</a></b>
                    <b className="link radius ps-4 pe-4 p-2"><a className="text text-dark" href="">Лыжи</a></b>
                    <b className="link radius ps-4 pe-4 p-2"><a className="text text-dark" href="">Биатлон</a></b>
                    <b className="link radius ps-4 pe-4 p-2"><a className="text text-dark" href="">Медиафутбол</a></b>
                    <b className="link radius ps-4 pe-4 p-2"><a className="text text-dark" href="">Здоровье</a></b>
                    <a className="text-dark" href=""><b className="link radius"><i class="fa-solid fa-magnifying-glass p-4"></i></b></a>
                </div>
        </div>
    )
}
export default Header;