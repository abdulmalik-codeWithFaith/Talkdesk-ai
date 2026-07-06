import Card3 from "./Card3";
import "./pricing.css";
function Pricing(){
    return(
        <>
        <h3>Pricing</h3>
       <h1> Choose the Plan That Fits Your Team</h1>
       <p>Everything you need to automate conversations,
         support customers faster, and scale your business. Upgrade or cancel anytime.</p>
         <Card3 
         Header="Starter"
         description="Perfect for small businesses getting started with AI support."
         price={49}
         duration="/month"
         features={[
            "Up to 500 calls/month",
            "1 AI knowledge base",
            "Voice and text responses",
            "Basic lead capture",
            "Email support",
            "7-days conversation history"
         ]}
         buttonText="Get Started Free"
         />
         <Card3
         Header="Growth"
         description="For growing businesses that needs more capacity and insights."
         price={199}
         duration="/month"
         features={[
            "Up to 3,000 calls/month",
            "5 AI knowledge bases",
            "Voice & text responses",
            "Advanced lead capture",
            "Priority support",
            "Full analytics dashboard",
            "Call transcripts and exports",
            "Custom AI voice tone"
         ]}
         buttonText="Get Started Free"
         />
         <Card3 
         Header="Enterprise"
         description="Tailored solution for high-volume call centres and enterprise."
         price={250}
         duration="/month"
         features={[
            "Unlimited calls",
            "Unlimited knowledge bases",
            "Custom AI training",
            "Dedicated account manager",
            "SLA guarantee",
            "White-label option",
            "Api access",
            "Advanced integrations"
         ]}
         buttonText="Contact Sales"
         />
        </>
    )
}
export default Pricing;