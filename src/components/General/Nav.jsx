import { Link } from "react-router-dom";
import { VK, TG } from "../../env"
import pathIconVK from "../../assets/images/icons/vk.png"
import pathIconTG from "../../assets/images/icons/tg.png"
import {
	EnvelopePlusFill,
	TelephoneInboundFill,
	GeoAltFill,
} from "react-bootstrap-icons";
import SearchProd from "../Search";

const Nav = ({ user }) => {
	return (
		<div className='navigation'>
			<Link to="mailto:@DogFood.com"><EnvelopePlusFill />&nbsp;<span>@DogFood.com</span></Link>
			<div>
				<Link to={VK} target="_blank"><img width="25px" src={pathIconVK} alt="ВКонтакте" /></Link>
				<Link to={TG} target="_blank"><img width="28px" src={pathIconTG} alt="Телеграмм" /></Link>
			</div>
			<Link to="тел +7-900-000-00-00"><TelephoneInboundFill />&nbsp;<span>+7-900-000-00-00</span></Link>
			<Link to="#"><GeoAltFill />&nbsp;<span>г. Дог-Таун, ул. Шарикова д. 120</span></Link>
			{!user && <span style={{ visibility: "hidden" }}></span>}
			{user && <span style={{ visibility: "visible" }}>
				<SearchProd />
			</span>}
		</div>
	);
}

export default Nav;
