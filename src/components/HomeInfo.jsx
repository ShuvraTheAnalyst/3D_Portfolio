
// A coding connoisseur from India—where bytes meet spice!
//  Masterminded and crafted numerous projects, acquiring a versatile skill set along the way<br /> —because who needs a corner office when you've got code and creativity?
// Single-handedly built multiple projects to success in just a year—who needs years of experience when you've got enthusiasm and caffeine?<br /> Curious about the impact?
// Need a project done or looking for a dev? <br/> I'm just a few keystrokes away
import { arrow } from "../assets/icons";
import { Link } from "react-router-dom";


const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-sm text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
    {btnText}
    <img src={arrow} className="w-4 h-4 object-contain"/>
       
    </Link>
  </div>

)


const renderContent = {
  1: (
    <h1 className='sm:text-sm sm:leading-snug text-center neo-brutalism-blue py-2 px-6 text-white mx-4'>
       Hi, I'm
        <span className='font-semibold mx-2 text-white'>Shuvra</span>
        👋
        <br />
        A coding enthusiast from India—where bytes meet spice!
    </h1>
  ),
  2: (
    <InfoBox
      text=" Masterminded and crafted numerous projects, picked up many skills along the way" 
      link="/about"
      btnText="Learn more"
      
    
    />
  ),
  3: (
    <InfoBox
      text=" Single-handedly built multiple projects to success in just a year—who needs years of experience when you've got enthusiasm and caffeine? Curious about the impact?" 
      link="/projects"
      btnText=" Visit my portfolio"
      
    
    />
  ),
  4: (
    <InfoBox
      text=" Need a project done or looking for a dev? I'm just a few keystrokes away" 
      link="/contact"
      btnText="Let's Connect"
      
    
    />
  )

}




const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
  
}

export default HomeInfo