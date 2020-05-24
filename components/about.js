import React from 'react';

export const About = () => {
	return (
		<div className="container max-w-5xl mx-auto pb-16 px-4 flex flex-col justify-center">
			<p className="font-sans text-black">
				Andreas, a postgraduate student, currently pursues Computer Science at LMU Munich, Germany. Last year he studied
				abroad at Leiden University, The Netherlands. He graduated in April 2018 at the LMU Munich with a Bachelor of
				Science in Media Informatics and Human-Computer Interaction. In 2020 Andreas joined{' '}
				<a href="https://www.celonis.com/" className="text-gray-800 hover:text-black font-mono uppercase font-bold">
					Celonis
				</a>
				, the market leader in Process Mining, as Junior Software Engineer in the Core - Event Collection department.
				Before that, he worked remotely for a Berlin-based startup called{' '}
				<a href="https://aiderly.de/" className="text-gray-800 hover:text-black font-mono uppercase font-bold">
					Aiderly GmbH
				</a>{' '}
				as a Full Stack Developer / UX Researcher. Since 2018 he is part of the{' '}
				<a
					href="https://www.tech4germany.org/en/ueber-uns/"
					className="text-gray-800 hover:text-black font-mono uppercase font-bold"
				>
					Tech4Germany
				</a>{' '}
				fellowship, Germany’s first e-Government fellowship with Germany’s Chief of Staff Prof. Helge Braun as a patron.
				Therefore he had been staying in Berlin, Germany for three months to work as a UX Researcher as well as a
				Frontend Developer for the German government. Together with eight other fellows, they worked on topics related
				to digitalisation and e-government.
			</p>
		</div>
	);
};
