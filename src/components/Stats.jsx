import React from "react";
import { IoMdHappy, IoIosJournal, IoMdPeople } from "react-icons/io";
import { MdHeadsetMic } from "react-icons/md";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";
function Stats() {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <section id="stats" className="stats section mt-5" data-aos="fade-up">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <IoMdHappy className="stats-icons" />
              <span className="purecounter" ref={ref1}>
                {inView1 && <CountUp start={0} end={322} duration={1.5} />}
              </span>
              <p>
                Happy Clients <span>consequuntur quae</span>
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <IoIosJournal className="stats-icons" />
              <span className="purecounter" ref={ref2}>
                {inView2 && <CountUp start={0} end={522} duration={1.5} />}
              </span>
              <p>
                Projects <span>adipisci atque cum quia aut</span>
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <MdHeadsetMic className="stats-icons" />
              <span className="purecounter" ref={ref3}>
                {inView3 && <CountUp start={0} end={1322} duration={1.5} />}
              </span>
              <p>
                Hours Of Support <span>aut commodi quaerat</span>
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <IoMdPeople className="stats-icons" />
              <span className="purecounter" ref={ref4}>
                {inView4 && <CountUp start={0} end={72} duration={1.5} />}
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
