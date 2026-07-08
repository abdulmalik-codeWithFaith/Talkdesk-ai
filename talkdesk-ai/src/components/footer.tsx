import "./footer.css";
function Footer(){
    return(
        <>
        <div className="intro">
            <h1 className="logo">Talkdesk<span class="highlight">AI</span></h1>
            <p>The AI call agent that answers every customer call instantly - 24/7,
                on autopilot for businesses of different size.</p>
        </div>
        <div className="list">
            <h3>Product</h3>
                <p>Features</p>
                <p>How it works</p>
                <p>Pricing</p>
                <p>Changelog</p>
        </div>
        <div className="list">
            <h3>Company</h3>
                <p>About</p>
                <p>Blog</p>
                <p>Careers</p>
                <p>Press</p>
        </div>
        <div className="list">
            <h3>Support</h3>
                <p>Documentation</p>
                <p>Help Center</p>
                <p>Contact Us</p>
                <p>Status</p>
        </div>
        </>
    )
}
export default Footer;