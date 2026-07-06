import "./card2.css";
type CardProps = {
    No:number;
    icon: React.ReactNode;
    title: string;
    description: string;
            };

    function Card2({ No,icon, title, description}: CardProps) {
        return (
              <div className="card">
                <div className="card-header">
                    <span className="card-number">
                        {No.toString().padStart(2, "0")}
                    </span>
            <div className="card-icon">
                {icon}
                </div>
                </div>
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
        </div>
            );
              }
            export default Card2;