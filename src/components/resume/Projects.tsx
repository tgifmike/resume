import Link from 'next/link';
import React from 'react'

const References = () => {
  return (
		<main className="flex pb-4">
			<div className="w-1/4 text-xl font-bold">Projects:</div>
			<div className="w-3/4">
				<p className='pb-2'>
					I developed a fully functional blog application utilizing Next.js,
					React, and TypeScript. For data management, I implemented PostgreSQL
					with Prisma as the ORM for efficient and scalable database
					interactions. The project was version-controlled using GitHub and
					deployed seamlessly through Vercel. I leveraged VSCode as my primary
					development environment throughout the entire process.{' '}
				</p>
				<p className='pb-2'>
					In addition to the blog, I created two engaging games: a trivia game
					designed to complement the blog's content, and a Lemonade Stand game
					aimed at enhancing user interaction. Furthermore, I embarked on a new
					project to deepen my understanding of API calls and their integration
					into applications.
			  </p>
			  <p>For more detail and links please click <Link className='text-accent' href='/projects'>here</Link>.</p>
			</div>
		</main>
	);
}

export default References