import { VK, TG } from "../../env"
import { Link } from "react-router-dom";
import pathIconVK from "../../assets/images/icons/vk.png"
import pathIconTG from "../../assets/images/icons/tg.png"

const Footer = ({ user }) => {
	return <footer>
		<div className="footerLink header__menu">
			{user && <>
				<Link to="/catalog" title="Каталог">
					<span>Каталог</span>
				</Link>&nbsp;
				<Link to="/" title="Избранное">
					<span>Избранное</span>
				</Link>&nbsp;
				<Link to="/" title="Корзина">
					<span>Корзина</span>
				</Link>&nbsp;
				<Link to="/profile" title="Профиль">
					<span>Профиль</span>
				</Link></>
			}
		</div>
		<div className="footerContact">
			<div className="tel"><Link to="tel:+7-900-000-00-00">+7-900-000-00-00</Link></div>
			<div><Link to="mailto:@DogFood.com">@DogFood.com</Link></div>
			<div><Link to="#">г. Дог-Таун, ул. Шарикова д. 120</Link></div>
		</div>
		<div className="footerInfo">
			@ DogFood<br />
			Всё для пёсиков<br />
			ОГРНИП 88888888888<br />
			ИНН 777777777777
			<div>
				<Link to={VK} target="_blank"><img width="25px" src={pathIconVK} alt="ВКонтакте" /></Link>
				<Link to={TG} target="_blank"><img width="28px" src={pathIconTG} alt="Телеграмм" /></Link>
			</div>
		</div>



	</footer>
}

export default Footer;