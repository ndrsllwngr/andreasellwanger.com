import React from 'react';

export const Hero = () => {
	return (
		<section className="container max-w-5xl mx-auto my-12 py-16 px-4 flex flex-col justify-center">
			<h1 className="font-bold text-4xl md:text-6xl tracking-wide leading-tight font-mono uppercase">
				Andreas is a Software Engineer at{' '}
				<a className="text-gray-700 hover:underline" href="https://www.celonis.com">
					Celonis
				</a>{' '}
				and studies Computer Science at{' '}
				<a className="text-gray-700 hover:underline" href="https://www.uni-muenchen.de/">
					LMU Munich
				</a>
				.
			</h1>
			<p className="font-normal font-sans uppercase tracking-wide mt-6">Munich, Germany</p>
		</section>
	);
};
