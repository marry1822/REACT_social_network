import React from "react";
import classes from "./Paginator.module.css";

let Paginator = ({totalUsersCount,pageSize,onPageChanged,currentPage}) => {
	let pagesCount = Math.ceil(totalUsersCount / pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	return (
		<div>
			{pages.map((page) => {
				return (
					<span
						onClick={(e) => {
							onPageChanged(page);
						}}
						className={currentPage === page && classes.selectedPage}
					>
						{page}
					</span>
				);
			})}
		</div>
	);
};

export default Paginator;
