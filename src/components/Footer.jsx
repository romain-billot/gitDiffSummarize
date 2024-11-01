"use client";

import {Separator} from "@components/ui/separator";

export function Footer() {
	return (
		<div className="flex flex-col gap-4 px-10 py-4 w-full">
			<Separator/>
			<div className="flex justify-between items-center">
				<p>© {new Date().getFullYear()} gitDiffSummarize</p>
				<p>Romain Billot</p>
			</div>
		</div>
	);
}