'use client';

import {useState} from 'react';
import {Button} from '@components/ui/button';
import {Textarea} from "@/components/ui/textarea"
import {Skeleton} from "@/components/ui/skeleton"
import {useToast} from "@/hooks/use-toast"
import {Copy} from "lucide-react";
import {Separator} from "@components/ui/separator";

export default function Home() {
	const [diff, setDiff] = useState('');
	const [openaiResponse, setOpenaiResponse] = useState('');
	const [loading, setLoading] = useState(false);
	const {toast} = useToast()

	const handleApiRequest = async (endpoint) => {
		setLoading(true);
		setOpenaiResponse('');

		try {
			const response = await fetch(endpoint, {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({diff}),
			});

			const data = await response.json();

			if (response.ok) {
				setOpenaiResponse(data.response);
			} else {
				toast({
					variant: "destructive",
					title: "Une erreur est survenue.",
					description: data.error || "Une erreur est survenue.",
					className: "w-fit fixed bottom-0 right-0 m-5"
				})
			}
		} catch (err) {
			toast({
				variant: "destructive",
				title: "Une erreur est survenue.",
				description: "Impossible de communiquer avec le serveur.",
				className: "w-fit fixed bottom-0 right-0 m-5"
			})
		} finally {
			setLoading(false);
		}
	};

	const handleButtonClick = (endpoint) => async (e) => {
		e.preventDefault();
		await handleApiRequest(endpoint);
	};

	return (
		<div className="flex flex-col gap-6">
			<Textarea
				value={diff}
				onChange={(e) => setDiff(e.target.value)}
				rows="5"
				placeholder="Collez ici votre git diff..."
				required
				className="w-full bg-primary-foreground"
			></Textarea>

			<div className="flex justify-end gap-4">
				<Button
					onClick={handleButtonClick('/api/commit-message')}
					type="submit"
					disabled={loading}
					variant="secondary"
					className="secondary-foreground"
				>
					Obtenir un message de commit
				</Button>

				<Button
					onClick={handleButtonClick('/api/summarize')}
					type="submit"
					disabled={loading}
				>
					Obtenir un résumé
				</Button>
			</div>

			<Separator/>

			{loading &&
				<div className="flex flex-col gap-2 border rounded p-2">
					<Skeleton className="h-5 w-full"/>
					<Skeleton className="h-5 w-full"/>
					<Skeleton className="h-5 w-full"/>
					<Skeleton className="h-5 w-full"/>
					<Skeleton className="h-5 w-full"/>
					<Skeleton className="h-5 w-[200px]"/>
				</div>
			}

			{openaiResponse && (
				<div className="relative border rounded p-3 bg-primary-foreground">
					<div>
						<Button
							onClick={() => {
								navigator.clipboard.writeText(openaiResponse);
								toast({
									description: "Copié dans le presse-papiers.",
									className: "w-fit fixed bottom-0 right-0 m-5"
								});
							}}
							className="absolute bottom-2 right-2 rounded w-8 h-8"
							aria-label="Copier le résumé"
						>
							<Copy/>
						</Button>
						<p className="whitespace-pre-line text-sm pb-8">{openaiResponse}</p>
					</div>
				</div>
			)}
		</div>
	);
}
