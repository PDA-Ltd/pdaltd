import { useMemo } from "react";
import Slider from "react-slick";
import { getProjectsForLocale } from "../components/ProjectsData";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";
import Tab from "../components/Tab";
import { useTranslation } from "../hooks/useTranslation";

const ProjectsSection = () => {
  const { language } = useTranslation();
  const projects = useMemo(() => getProjectsForLocale(language), [language]);
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 700, 
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="bg-gray-100 py-20">
      <h2 className="text-3xl font-bold text-orange text-center mb-8">
        Our Projects
      </h2>

      <div className="max-w-7xl mx-auto px-6">
        <Slider {...settings}>
          {projects.map((project) => (
            <div key={project.id} className="px-3">
              <ProjectCard project={project} />
            </div>
          ))}
        </Slider>
      </div>

      <div className="flex justify-center mt-14">
        <Link to="/our-projects">
          <Tab label="More Projects →" />
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
