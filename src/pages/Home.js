import projectdata from './ProjectData';
import HeroSection from '../components/HeroSection'
import ProjectCard from '../components/ProjectCard';
import HeroCard from '../components/HeroCard';
import Divisor from '../components/Divisor';
import TestSliderProjectCard from '../components/TestSliderProjectCard';
import CaroselloLungo from '../components/CaroselloLungo'

function Home() {
    return (
    <div className="min-h-screen bg-zinc-300  flex flex-col">
        <Divisor text="HeroCard: Full text."/>
        <HeroCard/>
        
        <Divisor text="HeroSection: Logo + text."/>
        <HeroSection/>

        <Divisor text="ProjectCard: The whole card is a link + image + text."/>
        <div className='pb-10'>
            {projectdata.map((data)=>
                <div key={data.title} className="py-10">
                    <ProjectCard title={data.title} description={data.description} img={data.img} url={data.url}/>
                </div>
                )}
        </div>

        <Divisor text="TestSliderProjectCard: Title + description + img object"/>
        <TestSliderProjectCard title="title" description="description" img={slider1image[0].img}/>

        <Divisor text="CaroselloLungo: Title + description + img object"/>
        <CaroselloLungo title="title" description="description" img={slider1image[0].img}/>
    </div>)}
export default Home;

const slider1image =[{
    img:[
        require("../img/e-com1.webp"),
        require("../img/e-com2.webp"),
        require("../img/e-com3.webp"),
        require("../img/e-com1.webp"),
        require("../img/e-com2.webp"),
        require("../img/e-com3.webp"),
        require("../img/e-com1.webp"),
        require("../img/e-com2.webp"),
        require("../img/e-com3.webp"),
        require("../img/e-com1.webp"),
        require("../img/e-com2.webp"),
        require("../img/e-com3.webp")

    ]}];