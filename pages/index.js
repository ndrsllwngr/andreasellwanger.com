import React from 'react';
import Link from 'next/link';
import { Layout } from 'components/layout';
import { HtmlHead } from 'components/html-head';
import { Header } from 'components/header';

const LandingPage = () => {
	return (
		<Layout>
			<HtmlHead title="Andreas Ellwanger — Software Engineer." />
			<Header />
			<main>
				<section id="top" className="p-12">
					<div className="max-w-4xl mx-auto">
						Table of contents
						<ol className="list-decimal">
							<li>
								<a href="#about" className="text-my-red font-bold">
									About
								</a>
							</li>
							<li>
								<a href="#research" className="text-my-red font-bold">
									Research
								</a>
							</li>
							<li>
								<a href="#projects" className="text-my-red font-bold">
									Projects
								</a>
							</li>
							<li>
								<a href="#contact" className="text-my-red font-bold">
									Contact
								</a>
							</li>
						</ol>
					</div>
				</section>
				<section id="about" className="bg-my-yellow p-12">
					<div className="max-w-4xl mx-auto">
						<h2 className="text-3xl font-bold pb-6">
							<Link href="#about">
								<a className="hover:text-my-red before-symbol">About</a>
							</Link>
						</h2>
						<div>
							<p className="mb-0">
								Andreas, a postgraduate student, currently pursues Computer Science at LMU Munich, Germany. Last year he
								studied abroad at Leiden University, The Netherlands. He graduated in April 2018 at the LMU Munich with
								a Bachelor of Science in Media Informatics and Human-Computer Interaction. In 2020 Andreas joined{' '}
								<a href="https://www.celonis.com/" className="underline hover:text-my-red">
									Celonis
								</a>
								, the market leader in Process Mining, as Junior Software Engineer in the Core - Event Collection
								department. Before that, he worked remotely for a Berlin-based startup called{' '}
								<a href="https://aiderly.de/" className="underline hover:text-my-red">
									Aiderly GmbH
								</a>{' '}
								as a Full Stack Developer / UX Researcher. Since 2018 he is part of the{' '}
								<a href="https://www.tech4germany.org/en/ueber-uns/" className="underline hover:text-my-red">
									Tech4Germany
								</a>{' '}
								fellowship, Germany’s first e-Government fellowship with Germany’s Chief of Staff Prof. Helge Braun as a
								patron. Therefore he had been staying in Berlin, Germany for three months to work as a UX Researcher as
								well as a Frontend Developer for the German government. Together with eight other fellows, they worked
								on topics related to digitalisation and e-government.
							</p>
						</div>
						<div className="p-8 rounded-sm bg-white mt-8 hover:shadow-md">
							<p className="mb-0">
								<a href="cv.pdf">
									<span className="pdf underline hover:text-my-red">cv.pdf</span>
								</a>{' '}
								provides a more detailed overview.
							</p>
						</div>
					</div>
				</section>
				<section id="research" className="bg-my-grey p-12">
					<div className="max-w-4xl mx-auto">
						<h2 className="text-3xl font-bold pb-6">
							<a href="#research" className="hover:text-my-red before-symbol">
								Research
							</a>
						</h2>
						<p>
							<span className="cite">Axis+Content</span> was written & submitted to DroNet@MobiSys 2018 by Andreas with
							the help of{' '}
							<a href="https://www.axelhoesl.de/" className="underline hover:text-my-red">
								Axel Hösl
							</a>{' '}
							and{' '}
							<a href="http://www.butz.org/" className="underline hover:text-my-red">
								Andreas Butz
							</a>
							. It received overall merit <span className="merit">accept</span> and{' '}
							<span className="merit">weak accept</span> by two knowledgeable reviewers, and was accepted as one of 6
							full papers (out of 26 submissions). At the{' '}
							<a
								href="https://www.sigmobile.org/mobisys/2018/workshops/dronet18/program/"
								className="underline hover:text-my-red"
							>
								conference
							</a>
							, Andreas held an{' '}
							<a
								href="https://www.dropbox.com/sh/05l5x0vayr7j12u/AAAx69okNomuRmn3xouJGzNNa?dl=0"
								className="underline hover:text-my-red"
							>
								18-minute talk
							</a>{' '}
							to present the full paper and answer questions in the Q&A afterwards.
						</p>
						<div className="p-8 rounded-sm bg-white mt-8 hover:shadow-md">
							<p className="mb-0 ref">
								Andreas Ellwanger, Axel Hoesl, and Andreas Butz. 2018. Axis- plus Content-based Control for Camera
								Drones: Design and Evaluation of User Interface Concepts. In Proceedings of the 4th ACM Workshop on
								Micro Aerial Vehicle Networks, Systems, and Applications (DroNet&apos;18). ACM, New York, NY, USA, 9-14.
								DOI: DOI: 10.1145/3213526.3213529
								<br />
								<a href="https://doi.org/10.1145/3213526.3213529">
									<span className="acm underline hover:text-my-red">Paper</span>
								</a>
								,{' '}
								<a href="http://www.medien.ifi.lmu.de/pubdb/publications/pub/hoesl2018dronet/hoesl2018dronet.pdf">
									<span className="pdf underline hover:text-my-red">PDF</span>
								</a>
							</p>
						</div>
					</div>
				</section>
				<section id="projects" className="bg-my-grey p-12">
					<div className="max-w-4xl mx-auto">
						<h2 className="text-3xl font-bold">
							<a href="#projects" className="hover:text-my-red before-symbol">
								Projects
							</a>
						</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 row-gap-8">
							<div className="p-8 rounded-sm bg-white mt-8 hover:shadow-md">
								<h4 className="font-bold mb-3">
									<a href="https://github.com/ndrsllwngr/hll-rust" className="hover:text-my-red">
										MIT Chord algorithm implementation
									</a>
								</h4>
								<p>
									Chord is a protocol and algorithm for a peer-to-peer distributed hash table. The proof-of-concept was
									build with Rust.
								</p>
							</div>
							<div className="p-8 rounded-sm bg-white mt-8 hover:shadow-md">
								<h4 className="font-bold mb-3">
									<a href="https://github.com/ndrsllwngr/hll-scala" className="hover:text-my-red">
										Democratic playlist as webapp
									</a>
								</h4>
								<p>
									Realtime and interactive - It&apos;s time to let everybody in the room decide what&apos;s playing. The
									webapp was implemented with Scala.js as front-end and Scala Akka-http as back-end.
								</p>
							</div>
							<div className="p-8 rounded-sm bg-white mt-8 hover:shadow-md">
								<h4 className="font-bold mb-3">
									<a href="https://github.com/ndrsllwngr/DichteFideleLurche" className="hover:text-my-red">
										Catan game (multiplayer, AI)
									</a>
								</h4>
								<p></p>
							</div>
							<div className="p-8 rounded-sm bg-white mt-8 hover:shadow-md">
								<h4 className="font-bold mb-3">
									<a href="https://github.com/ndrsllwngr/FideleForste" className="hover:text-my-red">
										Game of life (MVC model)
									</a>
								</h4>
								<p></p>
							</div>
						</div>
					</div>
				</section>
				<section id="contact" className="bg-white p-12">
					<div className="max-w-4xl mx-auto">
						<h2 className="text-3xl font-bold pb-6">
							<a href="#contact" className="hover:text-my-red before-symbol">
								Contact
							</a>
						</h2>
						<ul className="list-disc">
							<li>
								<a href="https://twitter.com/ndrsllwngr/" className="underline hover:text-my-red">
									Twitter
								</a>
							</li>
							<li>
								<a href="https://github.com/ndrsllwngr/" className="underline hover:text-my-red">
									GitHub
								</a>
							</li>
							<li>
								<a href="https://de.linkedin.com/in/ellwanger/en/" className="underline hover:text-my-red">
									LinkedIn
								</a>
							</li>
							<li>
								<a href="https://orcid.org/0000-0003-2024-9439" className="underline hover:text-my-red">
									ORCID
								</a>
							</li>
							<li>
								<a href="https://dblp.uni-trier.de/pers/hd/e/Ellwanger:Andreas" className="underline hover:text-my-red">
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
