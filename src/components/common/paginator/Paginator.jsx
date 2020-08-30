import React, { useState } from "react";
import classes from "./Paginator.module.css";

let Paginator = ({
	totalUsersCount,
	pageSize,
	onPageChanged,
	currentPage,
	portionSize = 10,
}) => {
	let pagesCount = Math.ceil(totalUsersCount / pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	let portionCount = Math.ceil(pagesCount / portionSize);
	let [portionNumber, setPortionNumber] = useState(1);
	let leftPortionBoundary = (portionNumber - 1) * portionSize + 1;
	let rightPortionBoundary = portionNumber * portionSize;

	return (
		<div className={classes.paginator}>
			{portionNumber > 1 && (
				<button
					onClick={() => {
						setPortionNumber(portionNumber - 1);
					}}
				>
					PREV
				</button>
			)}
			{pages
				.filter(
					(page) => page >= leftPortionBoundary && page <= rightPortionBoundary
				)
				.map((page) => {
					return (
						<span
							onClick={(e) => {
								onPageChanged(page);
							}}
							className={
								(currentPage === page && classes.selectedPage) || classes.page
							}
							key={page}
						>
							{page}
						</span>
					);
				})}
			{portionCount > portionNumber && (
				<button
					onClick={() => {
						setPortionNumber(portionNumber + 1);
					}}
				>
					NEXT
				</button>
			)}
		</div>
	);
};

export default Paginator;
