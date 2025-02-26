import React from 'react'

const About = () => {
  return (
		<main>
			<div>
				<div>
					<h1 className='text-4xl p-4 font-semibold italic font-note'>A little about <span className='text-accent'>Me...</span></h1>
				</div>

				<div className="font-note text-lg">
					<p className="indent-6 pb-3">
						I have always been passionate about technology and its
						transformative power. With a degree in Computer Science from Pace
						University, I possess a strong foundational knowledge in programming
						and software development, though my professional journey has taken
						an interesting detour into the hospitality sector. I spent nearly
						two decades working in and managing restaurants, where I developed a
						broad range of valuable skills—such as problem-solving,
						communication, leadership, and adaptability—that are directly
						transferable to the tech industry.
					</p>
					<p className="indent-6 pb-3">
						More recently, I transitioned to the technology space, starting with
						a role at a Point of Sales (POS) Reseller. There, I installed and
						supported POS systems for clients, providing both onsite and remote
						support. This experience allowed me to gain a deep understanding of
						local area networks and the end-to-end process of system
						integration. A notable achievement during this time was my special
						assignment to test a new POS system acquired by the CEO, which
						further piqued my interest in technology.
					</p>
					<p className="indent-6 pb-3">
						Currently, I am working at Global Payments as part of the User
						Acceptance Testing (UAT) team for a Retail Point of Sale System.
						This role has significantly fueled my interest in software
						development. By collaborating closely with the product, development,
						and QA teams, I have gained valuable insights into the software
						development lifecycle. Reviewing Jira tickets, analyzing user
						stories, and participating in bug tracking and resolution have given
						me a firsthand look at the development process and solidified my
						desire to transition into a developer role.
					</p>
					<p className="indent-6 pb-3">
						In my free time, I have taken proactive steps to expand my knowledge
						and skills in software development. I started with HTML, CSS,
						JavaScript, and PHP, but after receiving guidance from an
						experienced developer, I focused my learning on React and Next.js. I
						have been applying these technologies, along with TypeScript and
						Tailwind CSS, to personal projects. I also work with version control
						using VS Code, where I commit changes to Jira and trigger automated
						deployment processes via Vercel for preview and production
						environments.
					</p>
					<p className="indent-6 pb-3">
						I am excited to continue building on this foundation and believe my
						diverse background, combined with my technical skills, makes me
						well-positioned to transition into a software development role. My
						experiences have taught me how to approach complex problems with a
						strategic mindset, collaborate effectively in teams, and
						continuously learn and adapt—skills that will contribute to my
						success as a software developer.
					</p>
				</div>
			</div>
		</main>
	);
}

export default About