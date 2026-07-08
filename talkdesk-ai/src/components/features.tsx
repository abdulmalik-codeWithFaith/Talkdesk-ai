import "./features.css";
import { FiClock } from "react-icons/fi";
import {
      FiCpu,
      FiMic,
      FiUserPlus,
      FiTrendingUp,
      FiBarChart2,
            } from "react-icons/fi";
import Card from "./Card";
function Features(){
    return(
        <>
        <h3>Features</h3>
        <h1>Built to Capture, 
            Qualify, and Convert Every <span className="highlight">Lead</span></h1>
            <p>Turn more website visitors into qualified leads, book more meetings 
                automatically, and grow your business with AI working around the clock.</p>
                <div className="cards-container">
                <Card
                  icon={<FiClock />}
                  title="Always on 24/7"
                  description="Your AI agent never sleeps. Every call at midnight,weekends or holidays
                  is answered instantly,no voicemails,no missed opportunities"
                        />
                        <Card 
                        icon={<FiCpu />}
                        title="Intelligent Knowledge Based"
                        description="Feed the AI your FAQs,pricing,servicing and hours.
                        it generates accurate,context-aware answers drawn directly from your business data."
                        />
                        <Card 
                        icon={<FiMic />}
                        title="Natural Voice Responses"
                        description="AI generated voice that sounds warm and professional - indistinguishable from a trained human 
                        agent.No robotic tones"
                        />
                        <Card 
                        icon={<FiUserPlus />}
                        title="Automatic Lead Capture"
                        description="When a caller shows intent,the agent collects their name,email,phone number and inquiry details
                        straight into your dashboard 
                        ."
                        />
                        <Card 
                        icon={<FiTrendingUp />}
                        title="Escalation & Handoff"
                        description="Complex issues get escalated seamlessly. The Ai takes a message or transfers a call
                        so no customer ever feels abandoned."
                        />
                        <Card 
                        icon={<FiBarChart2 />}
                        title="Analytical Dashboard"
                        description="View every conversation,capture leads,call duration and question trend in a clean dashboard
                        built for growing businesses."
                        />
                        </div>
        </>
    )
}
export default Features;