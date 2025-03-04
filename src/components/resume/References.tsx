import Link from 'next/link';
import React from 'react'

const References = () => {
  return (
		<main className="flex pb-4">
			<div className="w-1/4 text-xl font-bold">References:</div>
			<div className="w-3/4">
				<p className="text-lg">
					References are available upon request. You can{' '}
					<span className='text-accent'>
						<Link href="mailto:mr.mikesorrentino@gmail.com">
							email
						</Link>
					</span>
                  {' '} me or send me a 
                  <span className='text-accent'><Link href="/contact">{' '} message</Link></span>.
				</p>
			</div>
		</main>
	);
}

export default References