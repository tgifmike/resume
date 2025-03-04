import Education from '@/components/resume/Education';
import Header from '@/components/resume/Header';
import Objective from '@/components/resume/Objective';
import ProfessionalExperience from '@/components/resume/ProfessionalExperience';
import Projects from '@/components/resume/Projects';
import References from '@/components/resume/References';
import TechnicalSkills from '@/components/resume/TechnicalSkills';
import { Separator } from '@/components/ui/separator';
import React from 'react';


const Resume = () => {
	return (
		<main className="w-full mx-auto">
			{/* Name Heading */}
			<Header />

			{/* Objective */}
			<Objective />

			{/*Technical Skills*/}
			<TechnicalSkills />

			{/*Professionl Experince*/}
			<ProfessionalExperience />

			{/*Education*/}
			<Education />

			{/*Projects*/}
			<Projects />

			{/*References*/}
			<References />
		</main>
	);
};

export default Resume;
