import React from 'react';

const TechnicalSkills = () => {
	return (
		<main className="flex pb-4">
			<div className="w-1/4 text-lg font-bold">Technical Skills:</div>
			<div className="w-3/4">
				<div className="grid grid-cols-3 gap-4">
					<div className="font-semibold">
						Programming Languages:
						<div className="text-sm font-light">
							<div>HTML (Advanced)</div>
							<div>CSS (Advanced)</div>
							<div>JavaScript (Competent)</div>
							<div>TypeScript (Competent)</div>
						</div>
					</div>

					<div className="font-semibold">
						Development Tools:
						<div className="text-sm font-light">VS Code (Competent)</div>
						<div className="text-sm font-light">Jira (Competent)</div>
						<div className="text-sm font-light">Confluence (Competent)</div>
					</div>

					<div className="font-semibold">
						Version Control:
						<div className="text-sm font-light">Git (Beginner)</div>
						<div className="text-sm font-light">Github (Beginner)</div>
					</div>

					<div className="font-semibold">
						Web Technologies:
						<div className="text-sm font-light">React (Beginner)</div>
					</div>

					<div className="font-semibold">
						Testing Frameworks:
						<div className="text-sm font-light">Playwright (Beginner)</div>
					</div>

					<div className="font-semibold">
						Databases:
						<div className="text-sm font-light">SQL (Beginner)</div>
						<div className="text-sm font-light">Postgress (Beginner)</div>
						<div className="text-sm font-light">Prisma (Beginner)</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default TechnicalSkills;
