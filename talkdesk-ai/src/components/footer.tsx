import "./footer.css";
function Footer(){
    return(
        <>
        <div className="intro">
            <h1 className="logo">Talkdesk<span className="highlight">AI</span></h1>
            <p>The AI call agent that answers every customer call instantly - 24/7,
                on autopilot for businesses of different size.</p>
        </div>
        <div className="list">
            <h3>Product</h3>
            <ul>
                <li>Features</li>
                <li>How it works</li>
                <li>Pricing</li>
                <li>Changelog</li>
            </ul>
        </div>
        <div className="list">
            <h3>Company</h3>
            <ul>
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Press</li>
            </ul>
        </div>
        <div className="list">
            <h3>Support</h3>
            <ul>
                <li>Documentation</li>
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Status</li>
            </ul>
        </div>
        </>
    )
}
export default Footer;
