'use client';

import React from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Separator } from '@/components/ui/separator';
import { Linkedin, MailCheck, MailQuestion, MailX, X, XIcon } from 'lucide-react';
import Link from 'next/link';

const Contact = () => {
	//const { toast } = useToast();

	const formSchema = z.object({
		name: z.string().min(3, {
			message: 'Username must be at least 3 characters.',
		}),
		email: z.string().email({ message: 'Invalid email address' }),
		message: z.string().min(10, {
			message: 'Message must be at least 10 characters.',
		}),
	});

	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			message: '',
		},
	});

	// 2. Define a submit handler.
	async function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
		try {
			const res = fetch('/api/contact', {
				method: 'POST',
				body: JSON.stringify({
					values,
				}),
				headers: {
					'content-type': 'application/json',
				},
			});
			if ((await res).status === 200) {
				toast(<div className="text-emerald-500 font-semibold">Success!</div>, {
					description: (
						<div className="flex gap-2 items-center text-emerald-500">
							<MailCheck size={30} strokeWidth={1} /> Email was sucessfully
							sent!
						</div>
					),
					// action: {
					//   label: "undo",
					//   onClick: () => console.log("undo")
					// }
					// cancel: {
					// 	label: <XIcon />,
					// 	onClick: () => console.log('Cancel'),
					// },
				});
			}
			if ((await res).status === 500) {
				toast(
					<div className="text-red-500 font-semibold">
						Something Went Wrong
					</div>,
					{
						description: (
							<div className="flex gap-2 items-center text-red-500">
								<MailX size={30} strokeWidth={1} /> SERVER ERROR: Failed to
								send!
							</div>
						),
						// action: {
						//   label: "undo",
						//   onClick: () => console.log("undo")
						// }
						// cancel: {
						// 	label: <XIcon />,
						// 	onClick: () => console.log('Cancel'),
						// },
					}
				);
			}
			if ((await res).status === 404) {
				toast(
					<div className="text-red-500 font-semibold">
						Something Went Wrong
					</div>,
					{
						description: (
							<div className="flex gap-2 items-center text-red-500">
								<MailQuestion size={30} strokeWidth={1} /> Resource Not Found:
								Failed to send!
							</div>
						),
						// action: {
						//   label: "undo",
						//   onClick: () => console.log("undo")
						// }
						// cancel: {
						// 	label: <XIcon />,
						// 	onClick: () => console.log('Cancel'),
						// },
					}
				);
			}
			if ((await res).status === 400) {
				toast(
					<div className="text-red-500 font-semibold">
						Something Went Wrong
					</div>,
					{
						description: (
							<div className="flex gap-2 items-center text-red-500">
								<MailQuestion size={30} strokeWidth={1} /> Bad Request: Failed
								to send!
							</div>
						),
						// action: {
						//   label: "undo",
						//   onClick: () => console.log("undo")
						// }
						// cancel: {
						// 	label: <XIcon />,
						// 	onClick: () => console.log('Cancel'),
						// },
					}
				);
			}

			form.reset();
			return false;
		} catch (err) {
			console.error('Err', err);
		}
	}

	return (
		<main>
			<h1 className="text-center text-4xl font-mono font-bold tracking-tight p-10">
				I would like to hear from <span className="text-chart-2">you</span>!
			</h1>
			<p className="text-3x pb-5">You can contact me by:</p>
		

			<div>
				<div className="flex h-5 items-center space-x-4 text-md text-accent">
					<div className=''>
						<Link href="mailto:mr.mikesorrentino@gmail.com">
							Email Me @ mr.mikesorrentino@gmail.com
						</Link>
					</div>
					<Separator orientation="vertical" />
					<div>
						<Link href="tel:8455580262">Call Me @ (845) 558-0262</Link>
					</div>
					<Separator orientation="vertical" />
					<div>
						<Link href="http://www.linkedin.com/in/michael-sorrentino-012a3263">
							<Linkedin />
						</Link>
					</div>
          <Separator orientation="vertical" />
          <div><p className='text-primary'>Or use Form Below</p></div>
				</div>
			</div>

			<div className="py-6">
				<Separator />
			</div>

			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input
										placeholder="Albus Percival Wulfric Brian Dumbledore"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input placeholder="Dumbledore@Hogwarts.com" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="message"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Message</FormLabel>
								<FormControl>
									<Textarea
										placeholder="Drop us a line..."
										className="resize-none"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit">Submit</Button>
				</form>
			</Form>
		</main>
	);
};

export default Contact;
