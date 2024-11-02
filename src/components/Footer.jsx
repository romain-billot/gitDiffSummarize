"use client";

import {Separator} from "@components/ui/separator";

export function Footer() {
	return (
		<div className="flex flex-col gap-4 p-4 max-w-screen-sm w-full">
			<Separator/>
			<div className="flex justify-between items-center">
				<p className="text-sm">© {new Date().getFullYear()} gitDiffSummarize</p>
				<p className="text-sm">Romain Billot</p>
			</div>
		</div>
	);
}