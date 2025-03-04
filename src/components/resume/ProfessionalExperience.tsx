import React from 'react'
import { Separator } from '../ui/separator';
import Link from 'next/link';
import Image from 'next/image'

const ProfessionalExperience = () => {
  return (
		<main className="flex pb-4">
			<div className="w-1/4 text-xl font-bold">Professional Experience:</div>
			<div className="w-3/4">
				<div className="">
					<div className="py-2">
						<p className="font-semibold text-2xl">Senior User Acceptance Tester</p>
					</div>
					<div className="flex h-5 space-x-4 text-md">
						<div>
							<Link href="https://www.globalpayments.com/">
								<Image
									src="https://www.globalpayments.com/-/media/project/global-payments/corporate/shared/logos/logoprimary.svg?rev=f4ebeb753da2483dae990c1da9a41f29"
									width={150}
									height={150}
									alt="Image of Global Payments logo"
								/>
							</Link>
						</div>
						<div>
							<Separator orientation="vertical" />
						</div>
						<div>Remote</div>
						<div>
							<Separator orientation="vertical" />
						</div>
						<div>April 2021 - Present</div>
					</div>
					<div className="pt-4">
						<ul className="list-disc">
							<li>
								<p>
									Worked with development teams to ensure that software meets
									business requirements and user expectations by performing UAT
									on various applications.
								</p>
							</li>
							<li>
								<p>
									Documented detailed test cases and results in JIRA, ensuring
									proper traceability of issues.
								</p>
							</li>
							<li>
								<p>
									Collaborated closely with developers to identify bugs and
									ensure quick resolution, improving the overall development
									process.
								</p>
							</li>
							<li>
								<p>
									Led the creation of test plans, and test cases for both manual
									testing environments.
								</p>
							</li>
						</ul>
					</div>
				</div>
				<div className="pt-4">
					<div>
						<p className="font-semibold text-2xl py-2">Level 3 Tech</p>
					</div>
					<div className="flex h-5 space-x-4 text-md">
						<div className="flex items-center">
							<Link href="https://www.cervion.com/">
								<Image
									src="data:image/png;base64,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"
									width={150}
									height={150}
									alt="Image of Cervion Systems Logo"
								/>
							</Link>
						</div>
						<div>
							<Separator orientation="vertical" />
						</div>
						<div className="">Tarrytown, NY</div>
						<div>
							<Separator orientation="vertical" />
						</div>
						<div>July 2017 - April - 2021</div>
					</div>
					<div className="pt-4">
						<ul className="list-disc">
							<li>
								<p>
									Conducted diagnostic procedures to determine root cause of
									customer problems and provide accurate repair recommendations.
								</p>
							</li>
							<li>
								<p>
									Developed and initiated projects, including managing costs,
									schedule and performance.
								</p>
							</li>
							<li>
								<p>
									Defined, created and controlled testing environments for
									successful software deliverables.
								</p>
							</li>
							<li>
								<p>
									Developed and tested new product offerings prior to release to
									assist development team in bug identification.
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</main>
	);
}

export default ProfessionalExperience