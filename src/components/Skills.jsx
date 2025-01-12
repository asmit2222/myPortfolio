import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

function Skills() {
  return (
    <section id="skills" className="skills section light-background">
      <div className="skill-cont">
        <h2 className="skill-title">Skills</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div className="container skills-list">
        <div className="row skills-content skills-animation ">
          <div className="col-lg-6">
            <div className="progressBar">
              <span className="skill">HTML</span>
              <div className="w-100">
                <ProgressBar
                  completed={90}
                  className="wrapper"
                  barContainerClassName="container-bar"
                  labelClassName="label"
                />
              </div>
            </div>

            <div className="progressBar">
              <span className="skill">CSS</span>
              <div className="w-100">
                <ProgressBar
                  completed={85}
                  className="wrapper"
                  barContainerClassName="container-bar"
                  labelClassName="label"
                />
              </div>
            </div>

            <div className="progressBar">
              <span className="skill">JS</span>
              <div className="w-100">
                <ProgressBar
                  completed={75}
                  className="wrapper"
                  barContainerClassName="container-bar"
                  labelClassName="label"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="progressBar">
              <span className="skill">React</span>
              <div className="w-100">
                <ProgressBar
                  completed={60}
                  className="wrapper"
                  barContainerClassName="container-bar"
                  labelClassName="label"
                />
              </div>
            </div>

            <div className="progressBar">
              <span className="skill">SQL</span>
              <div className="w-100">
                <ProgressBar
                  completed={50}
                  className="wrapper"
                  barContainerClassName="container-bar"
                  labelClassName="label"
                />
              </div>
            </div>

            <div className="progressBar">
              <span className="skill">Firebase</span>
              <div className="w-100">
                <ProgressBar
                  completed={60}
                  className="wrapper"
                  barContainerClassName="container-bar"
                  labelClassName="label"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
