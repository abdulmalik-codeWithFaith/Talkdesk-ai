import "./Card.css";
type CardProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
         };

function Card({ icon, title, description}: CardProps) {
    return (
        <div className="card">
            <div>{icon}</div>

            <h3>{title}</h3>

            <p>{description}</p>

        </div>
        );
    }

export default Card;
