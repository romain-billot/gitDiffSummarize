"use client";

import {ModeToggle} from "@components/ModeToggle";
import {Title} from "@components/Title";

export function Header() {
	return (
		<div className="flex justify-between items-center px-10 pt-4">
			<Title title="gitDiffSummarize"/>
			<ModeToggle/>
		</div>
	)
}