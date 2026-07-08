import Card2 from "./Card2";
import "./Work.css";
import {FiShield,
    FiCpu,
    FiMic,
    FiUserPlus,
    FiBarChart2,
    FiZap,
} from "react-icons/fi"
function Work(){
    return(
        <>
        <h3>Get Started</h3>
        <h1>Up and running in <span className="highlight">under 10 minutes</span></h1>
        <p>No coding.No hiring.No training.Just a few steps to a fully operational AI call agent.</p>
        <div className="cards-container">
        <Card2
        No={1}
        icon={<FiZap />}
        title="Signup & Configure"
        description="Create your TalkdeskAI account and fill in your business profile - name,services,pricing,FAQs,hours,and contact details."
        />
        <Card2
        No={2}
        icon={<FiCpu />}
        title="AI Builds Your Knowledge Base."
        description="The platform ingests your information and constructs a private AI knowledge base tailored entirely to your business."
        />
        <Card2
        No={3}
        icon={<FiShield />}
        title="Add the Widget to Your Site"
        description="Receive a single line of code to embed on your website. Talk to AI agent button appears for your visitors instantly."
        />
        <Card2
        No={4}
        icon={<FiMic />}
        title="AI Answers Calls in Real Time"
        description="Visitors click the button,speak or types their question,and the AI responds accurately in a natural voice in a second."
        />
        <Card2
        No={5}
        icon={<FiUserPlus />}
        title="Leads Get Captured Automatically"
        description="Interested callers are guided to share their contact details and inquiry. Every lead land directly in your dashboard."
        />
        <Card2
        No={6}
        icon={<FiBarChart2 />}
        title="Review Analytics And Conversations"
        description="Log into your dashboard to see full conversation tanscripts,captured leads, question trends,and call volume over time."
        />
        </div>
        </>
    )
}
export default Work;