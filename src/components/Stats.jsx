import React from "react";
import { IoMdHappy, IoIosJournal, IoMdPeople } from "react-icons/io";
import { MdHeadsetMic } from "react-icons/md";
import CountUp from "react-countup";
function Stats() {
  return (
    <section id="stats" className="stats section mt-5">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <IoMdHappy className="stats-icons" />
              <span className="purecounter">
                <CountUp start={0} end={322} duration={1.5} enableScrollSpy />
              </span>
              <p>
                Happy Clients <span>consequuntur quae</span>
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <IoIosJournal className="stats-icons" />
              <span className="purecounter">
                <CountUp start={0} end={522} duration={1.5} enableScrollSpy />
              </span>
              <p>
                Projects <span>adipisci atque cum quia aut</span>
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <MdHeadsetMic className="stats-icons" />
              <span className="purecounter">
                <CountUp start={0} end={1322} duration={1.5} enableScrollSpy />
              </span>
              <p>
                Hours Of Support <span>aut commodi quaerat</span>
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <IoMdPeople className="stats-icons" />
              <span className="purecounter">
                <CountUp start={0} end={72} duration={1.5} enableScrollSpy />
              </span>
              <p>
                Hard Workers <span>rerum asperiores dolor</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
Stats;
