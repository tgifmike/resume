import React from 'react'
import { Separator } from '../ui/separator'
import Link from 'next/link';
import Image from 'next/image';

import { GithubIcon, Linkedin, LucideGithub } from 'lucide-react';

const Header = () => {
  return (
		<main className="text-6xl py-8 font-note">
			<div className="text-center text-accent">Michael Sorrentino</div>
			<div className="flex h-5 justify-center space-x-4 text-sm">
				<div>
					<Link href="tel:8455580262">(845) 558-0262</Link>
				</div>
				<div>
					<Separator orientation="vertical" />
				</div>
				<div>
					<Link href="mailto:mr.mikesorrentino@gmail.com">
						mr.mikesorrentino@gmail.com
					</Link>
				</div>
				<div>
					<Separator orientation="vertical" />
				</div>
				<div>
					<Link href="www.linkedin.com/in/michael-sorrentino-012a3263">
						<Image
							src="https://content.linkedin.com/content/dam/me/business/en-us/amp/xbu/linkedin-revised-brand-guidelines/home/fg/brand-homepg-please-note-icon-dsk-v01.png.original.png"
							width={25}
							height={25}
							alt="Imgage of LinkedIn logo"
						/>
					</Link>
				</div>
				<div>
					<Separator orientation="vertical" />
				</div>
				<div className='flex items-center'>
					<Link href="https://github.com/tgifmike">
                      <Image
                          src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
                          width={30}
                          height={30}
                          alt='Imgage of Github logo'
                      />
					</Link>
				</div>
			</div>
		</main>
	);
}

export default Header