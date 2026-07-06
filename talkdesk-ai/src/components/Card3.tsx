import "./Card3.css";
import { FiCheck } from "react-icons/fi";
type CardProps = {
    Header: string;
    description: string;
    price: number;
    duration:string;
    features: string[];
    buttonText:string;

        };

function Card3({ Header, description, price, duration, features,buttonText}: CardProps) {
    return(
        <>
        <div className="pricing-card">
        <h3>{Header}</h3>
        <p>{description}</p>
        <h2>
            ${price}
            <span>{duration}</span>
        </h2>
        <ul>
            {features.map((features) => (
            <li key={features}>
                <FiCheck />
              <span>{features}</span></li>
                    ))}
        </ul>
        <button>{buttonText}</button>
        </div>
        </>
    )
}
export default Card3;