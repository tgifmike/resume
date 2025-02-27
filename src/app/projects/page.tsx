import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { Github, GithubIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Projects = () => {
	return (
		<main className="w-full mx-auto">
			<Card className="pt-4 m-2">
				<CardHeader>
					<CardTitle>
						{' '}
						<h1 className="text-5xl text-center pb-2">
							<span className="text-accent">My </span>Projects
						</h1>
					</CardTitle>
					<CardDescription className="w-3/4 mx-auto text-center">
						These are some of my projects I have been working. There are links
						to visit the live site and also links to the github Repos.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className="w-[200px]">Project</TableHead>
								<TableHead>Languages</TableHead>
								<TableHead>Frontend Skils</TableHead>
								<TableHead>Backend Skils</TableHead>
								<TableHead>Platforms</TableHead>
								<TableHead>Link</TableHead>
								<TableHead className="text-right">Github</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow className="">
								<TableCell className="font-bold">
									Fully Fuctioning Production Blog
								</TableCell>
								<TableCell>TypeScript, JavaScript, HTML, CSS</TableCell>
								<TableCell>React, Tailwinds, Next.js</TableCell>
								<TableCell>
									Postgress DB with Prisma Schema for storage, NextAuth.js for
									authentication, Sendgird Api for email
								</TableCell>
								<TableCell>Github, Vercel, shadcn/ui</TableCell>
								<TableCell className="text-accent">
									<Link href="https://www.themanagerlife.com">
										The Manager Life
									</Link>
								</TableCell>
								<TableCell className="text-right text-accent">
									<Link href="https://github.com/tgifmike/tml_mark4">
										<Github />
									</Link>
								</TableCell>
							</TableRow>
							<TableRow className="">
								<TableCell className="font-bold">
									Triva Game (Inside The Manager Life Blog)
								</TableCell>
								<TableCell>TypeScript, JavaScript, HTML, CSS</TableCell>
								<TableCell>React, Tailwinds, Next.js</TableCell>
								<TableCell>
									Postgress DB with Prisma Schema for storage
								</TableCell>
								<TableCell>Github, Vercel, shadcn/ui</TableCell>
								<TableCell className="text-accent">
									<Link href="https://www.themanagerlife.com/trivia">
										Trivia Game
									</Link>
								</TableCell>
								<TableCell className="text-right text-accent">
									<Link href="https://github.com/tgifmike/tml_mark4">
										<Github />
									</Link>
								</TableCell>
							</TableRow>
							<TableRow className="">
								<TableCell className="font-bold">
									Lemonade Stand Game (Inside The Manager Life Blog)
								</TableCell>
								<TableCell>TypeScript, JavaScript, HTML, CSS</TableCell>
								<TableCell>React, Tailwinds, Next.js</TableCell>
								<TableCell>
									Postgress DB with Prisma Schema for storage
								</TableCell>
								<TableCell>Github, Vercel, shadcn/ui</TableCell>
								<TableCell className="text-accent">
									<Link href="https://www.themanagerlife.com/lemonade-stand">
										Lemonade Stand Game
									</Link>
								</TableCell>
								<TableCell className="text-right text-accent">
									<Link href="https://github.com/tgifmike/tml_mark4">
										<Github />
									</Link>
								</TableCell>
							</TableRow>
							<TableRow className="">
								<TableCell className="font-bold">
									I wanted to practice with API call so i have calls to stock
									API's, sports API's and weather API's. This is an ongoing project and not finished yet.
								</TableCell>
								<TableCell>TypeScript, JavaScript, HTML, CSS</TableCell>
								<TableCell>React, Tailwinds, Next.js</TableCell>
								<TableCell>API calls to differnet services for data.</TableCell>
								<TableCell>Github, Vercel, shadcn/ui</TableCell>
								<TableCell className="text-accent">
									<Link href="https://dashboard-sable-ten-37.vercel.app/">
										API App
									</Link>
								</TableCell>
								<TableCell className="text-right text-accent">
									<Link href="https://github.com/tgifmike/dashboard">
										<Github />
									</Link>
								</TableCell>
							</TableRow>
						</TableBody>
						{/* <TableFooter>
							<TableRow>
								<TableCell colSpan={3}>Total</TableCell>
								<TableCell className="text-right">$2,500.00</TableCell>
							</TableRow>
						</TableFooter> */}
					</Table>
				</CardContent>
				<CardFooter></CardFooter>
			</Card>
		</main>
	);
};

export default Projects;
