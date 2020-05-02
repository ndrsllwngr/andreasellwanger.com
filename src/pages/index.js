import Head from "next/head";
import { Layout } from "../components/Layout";

const LandingPage = () => {
  return (
    <Layout>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Andreas Ellwanger — Software Engineer.</title>
        <meta name="author" content="Andreas Ellwanger" />
        <meta name="title" content="Andreas Ellwanger" />
        <meta
          name="description"
          content="Andreas, a postgraduate student, currently pursues Computer Science at the Ludwig Maximilian University of Munich, Germany and the Leiden University, The Netherlands. He graduated in April 2018 at the LMU Munich with a Bachelor of Science in Media Informatics and Human-Computer Interaction."
        />
      </Head>
      <main>
        <section id="top" className="pb-12 pt-16">
          <div>
            <h1 className="mb-32">
              <ellw>Andreas Ellwanger</ellw>, B.Sc.
            </h1>
          </div>
        </section>
        <section id="about" className="bg-my-yellow">
          <div>
            <h2>
              <a href="#about">About</a>
            </h2>
            <div>
              <p className="mb-0">
                Andreas, a postgraduate student, currently pursues Computer
                Science at the Ludwig Maximilian University of Munich, Germany
                and the Leiden University, The Netherlands. He graduated in
                April 2018 at the LMU Munich with a Bachelor of Science in Media
                Informatics and Human-Computer Interaction. At the moment
                Andreas works remotely for a Berlin-based startup called{" "}
                <a href="https://aiderly.de/">Aiderly GmbH</a> as a Full Stack
                Developer / UX Researcher. Since last year he is part of the{" "}
                <a href="https://www.tech4germany.org/en/ueber-uns/">
                  Tech4Germany
                </a>{" "}
                fellowship, Germany’s first e-Government fellowship with
                Germany’s Chief of Staff Prof. Helge Braun as patron. Therefore
                he had been staying in Berlin, Germany for three months to work
                as a UX Researcher as well as a Frontend Developer for the
                German government. Together with eight other fellows, they
                worked on topics related to digitalisation and e-government.
              </p>
            </div>
            <div className="p-8 rounded-sm bg-white mt-8 hover:shadow-md">
              <p className="mb-0">
                <a href="https://www.andreasellwanger.com/cv.pdf">
                  <pdf>cv.pdf</pdf>
                </a>{" "}
                provides a more detailed overview.
              </p>
            </div>
          </div>
        </section>
        <section id="research" className="bg-my-grey">
          <div>
            <h2>
              <a href="#research">Research</a>
            </h2>
            <p>
              <span className="cite">Axis+Content</span> was written & submitted to DroNet@MobiSys
              2018 by Andreas with the help of{" "}
              <a href="https://www.axelhoesl.de/">Axel Hösl</a> and{" "}
              <a href="http://www.butz.org/">Andreas Butz</a>. It received
              overall merit <span className="merit">accept</span> and <span className="merit">weak accept</span>{" "}
              by two knowledgeable reviewers, and was accepted as one of 6 full
              papers (out of 26 submissions). At the{" "}
              <a href="https://www.sigmobile.org/mobisys/2018/workshops/dronet18/program/">
                conference
              </a>
              , Andreas held an{" "}
              <a href="https://www.dropbox.com/sh/05l5x0vayr7j12u/AAAx69okNomuRmn3xouJGzNNa?dl=0">
                18-minute talk
              </a>{" "}
              to present the full paper and answer questions in the Q&A
              afterwards.
            </p>
            <div className="p-8 rounded-sm bg-white mt-8 hover:shadow-md">
              <p className="mb-0 ref">
                Andreas Ellwanger, Axel Hoesl, and Andreas Butz. 2018. Axis-
                plus Content-based Control for Camera Drones: Design and
                Evaluation of User Interface Concepts. In Proceedings of the 4th
                ACM Workshop on Micro Aerial Vehicle Networks, Systems, and
                Applications (DroNet'18). ACM, New York, NY, USA, 9-14. DOI:
                10.1145/3213526.3213529
                <br />
                <a href="https://doi.org/10.1145/3213526.3213529">
                  <span className="acm">Paper</span>
                </a>
                ,{" "}
                <a href="http://www.medien.ifi.lmu.de/pubdb/publications/pub/hoesl2018dronet/hoesl2018dronet.pdf">
                  <span className="pdf">PDF</span>
                </a>
              </p>
            </div>
          </div>
        </section>
        <section id="projects" className="bg-my-grey">
          <div>
            <h2>
              <a href="#projects">Projects</a>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 row-gap-8">
              <div className="p-8 rounded-sm bg-white mt-8 hover:shadow-md">
                <h4>
                  <a href="https://github.com/ndrsllwngr/hll-rust">
                    MIT Chord algorithm implementation
                  </a>
                </h4>
                <p>
                  Chord is a protocol and algorithm for a peer-to-peer
                  distributed hash table. The proof-of-concept was build with
                  Rust.
                </p>
              </div>
              <div className="p-8 rounded-sm bg-white mt-8 hover:shadow-md">
                <h4>
                  <a href="https://github.com/ndrsllwngr/hll-scala">
                    Democratic playlist as webapp
                  </a>
                </h4>
                <p>
                  Realtime and interactive - It's time to let everybody in the
                  room decide what's playing. The webapp was implemented with
                  Scala.js as front-end and Scala Akka-http as back-end.
                </p>
              </div>
              <div className="p-8 rounded-sm bg-white mt-8 hover:shadow-md">
                <h4>
                  <a href="https://github.com/ndrsllwngr/DichteFideleLurche">
                    Catan game (multiplayer, AI)
                  </a>
                </h4>
                <p></p>
              </div>
              <div className="p-8 rounded-sm bg-white mt-8 hover:shadow-md">
                <h4>
                  <a href="https://github.com/ndrsllwngr/FideleForste">
                    Game of life (MVC model)
                  </a>
                </h4>
                <p></p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="bg-white">
          <div>
            <h2>
              <a href="#contact">Contact</a>
            </h2>
            <ul className="list-disc">
              <li>
                <a href="https://twitter.com/ndrsllwngr/">Twitter</a>
              </li>
              <li>
                <a href="https://github.com/ndrsllwngr/">GitHub</a>
              </li>
              <li>
                <a href="https://de.linkedin.com/in/ellwanger/en/">LinkedIn</a>
              </li>
              <li>
                <a href="https://orcid.org/0000-0003-2024-9439">ORCID</a>
              </li>
              <li>
                <a href="https://dblp.uni-trier.de/pers/hd/e/Ellwanger:Andreas">
                  dblp
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default LandingPage;
