import React from 'react';
import { Separator } from '../ui/separator';
import Image from 'next/image';
import Link from 'next/link';

const Education = () => {
	return (
		<main className="flex pb-4">
			<div className="w-1/4 text-xl font-semibold">Education:</div>
			<div className="w-3/4">
				<div className="pb-2">
					<p className="text-2xl font-semibold">Bachelor of Arts: Computer Science</p>
				</div>
				<div className="flex h-7 space-x-4 text-lg">
					<div className="">
						<Link href="https://www.pace.edu">
							<Image
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRruvozojeUVfgS6hdjRlBbg2YaeUsZJGChyQ&s"
								width={75}
								height={75}
								alt="Image of Pace University Logo"
							/>
						</Link>
					</div>
					<div>
						<Separator orientation="vertical" />
					</div>
					<div>Pleasntville, NY</div>
					<div>
						<Separator orientation="vertical" />
					</div>
					<div>2008</div>
				</div>
				<div>
					<p></p>
				</div>
			</div>
		</main>
	);
};

export default Education;
