"use client";

import {ModeToggle} from "@components/ModeToggle";
import {Title} from "@components/Title";

export function Header() {
	return (
		<div className="flex justify-between items-center py-4 w-full px-4 max-w-screen-sm">
			<Title title="gitDiffSummarize"/>
			<ModeToggle/>
		</div>
	)
}