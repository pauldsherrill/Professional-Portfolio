import { useState, useRef, createRef } from "react";
import { useNavigate } from "react-router-dom";

const Work = ({ projects, skills }) => {
  const navigate = useNavigate();

  const chunkProjects = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const projectRows = chunkProjects(projects, 5);

  const [title, setTitle] = useState("MY WORK AND SKILLS");
  const changeTitle = (newTitle) => {
    setTitle(newTitle);
  };

  const projectRefs = useRef(projects.map(() => createRef()));
  const skillRefs = useRef(skills.map(() => createRef()));

  function haveSameClass(element1, element2, className) {
    return (
      element1.current.classList.contains(className) &&
      element2.current.classList.contains(className)
    );
  }

  const handleMouseEnter = (newTitle, projIndex) => {
    setTitle(newTitle);

    const element2Ref = skillRefs.current[projIndex];
    let matchFound = false;

    projectRefs.current.forEach((element1Ref) => {
      if (
        haveSameClass(element2Ref, element1Ref, element2Ref.current.className)
      ) {
        element1Ref.current.classList.add("display");
        matchFound = true;
        console.log("Display added");
      }
    });

    if (!matchFound) {
      console.log(
        "No matching project found for skill class " +
          element2Ref.current.className
      );
    }
  };

  const handleMouseLeave = () => {
    setTitle("MY WORK AND SKILLS");
    projectRefs.current.forEach((ref) => {
      if (ref.current) {
        ref.current.classList.remove("display");
      }
    });
    skillRefs.current.forEach((ref) => {
      if (ref.current) {
        ref.current.classList.remove("display");
      }
    });
  };

  const handleProjectClick = (repoId) => {
    navigate(`/repos/${repoId}`);
  };

  return (
    <>
      <div className="d-flex justify-content-center mt-2 mb-4">
        <h1 className="audiowide-regular name text-start red-glow title">
          {title}
        </h1>
      </div>
      <div className="container mb-5">
        {projectRows.map((row, rowIndex) => (
          <div className="row justify-content-center mb-4" key={rowIndex}>
            {row.map((project, index) => {
              const projIndex = rowIndex * 5 + index;
              return (
                <div className="col-5-custom" key={index}>
                  <div
                    className="square"
                    onClick={() => handleProjectClick(project.id)}
                  >
                    <img
                      ref={projectRefs.current[projIndex]}
                      onMouseEnter={() => changeTitle(project.alt)}
                      onMouseLeave={handleMouseLeave}
                      src={project.src}
                      alt={project.alt}
                      className={project.classes}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div className="container d-flex flex-column justify-content-end align-items-center">
        <div className="row justify-content-center align-items-end w-100">
          {skills.map((skill, index) => (
            <div className={`col-auto ${skill.classes}`} key={index}>
              <a href={skill.href}>
                <img
                  ref={skillRefs.current[index]}
                  src={skill.src}
                  alt={skill.alt}
                  width="50"
                  height="50"
                  className={skill.classes}
                  onMouseEnter={() => handleMouseEnter(skill.alt, index)}
                  onMouseLeave={handleMouseLeave}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Work;
