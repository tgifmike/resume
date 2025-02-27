import { Separator } from '@/components/ui/separator';
import React from 'react';

const Resume = () => {
	return (
		<main className="w-full mx-auto">
			{/* Name Heading */}
			<div className="text-6xl py-8 font-note">
				<div className="text-center">Michael Sorrentino</div>
				<div className="flex h-5 justify-center space-x-4 text-sm">
					<div>Phone</div>
					<div>
						<Separator orientation="vertical" />
					</div>
					<div>Email</div>
					<div>
						<Separator orientation="vertical" />
					</div>
					<div>LinkedIn logo</div>
					<div>
						<Separator orientation="vertical" />
					</div>
					<div>Github logo</div>
				</div>
			</div>
			{/* Objective */}
			<div className="flex pb-4">
				<div className="w-1/4 text-xl font-bold">Objective:</div>
				<div className="w-3/4">
					<p>
						Motivated and detail-oriented UAT Tester with 5 years of experience
						in software quality assurance and a passion for coding. Seeking to
						leverage strong problem-solving skills, proficiency in programming
						languages, and deep understanding of software testing processes to
						transition into a Developer role. Eager to contribute to software
						development projects by writing clean, efficient code and
						collaborating with cross-functional teams.
					</p>
				</div>
			</div>
			{/*Technical Skills*/}
			<div className="flex pb-4">
				<div className="w-1/4 text-lg font-bold">Technical Skills:</div>
				<div className="w-3/4">
					<div className="grid grid-cols-3 gap-4">
						<div className='font-semibold'>
							Programming Languages:
							<div className='text-sm font-light'>HTML, CSS, JavaScript, TypeScript</div>
						</div>

						<div>Development Tools:</div>

						<div>Version Control:</div>

						<div>Web Technologies:</div>

						<div>Testing Frameworks:</div>

						<div>Development Tools:</div>

						<div>Databases:</div>

						<div>Other Tools:</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Resume;
