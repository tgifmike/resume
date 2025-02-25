import { ModeToggle } from "@/components/theme/ModeToggle";
import Image from "next/image";

export default function Home() {
  return (
		<main className="w-full h-screen flex items-center justify-center">
			<div className="text-center px-2 py-8 max-w-xl">
				<p className="text-7xl font-semibold text-accent mb-4 font-serif">
					Hi, {' '}
					<span className="text-5xl font-bold text-primary">
					I'm	Michael Sorrentino
					</span>
				</p>
				<p className="text-xl text-primary mb-4">
					Currently a User Acceptance Tester, I’m eager to transition into a
					software development role.
				</p>
				<p className="text-lg text-primary">
					This website and the projects displayed here serve as a demonstration
					of my skills and current abilities, as I’m still building my
					professional experience in the field.
				</p>
			</div>
		</main>
	);
}
