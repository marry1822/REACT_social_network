import { createSelector } from "reselect";

//примитивный селектор
export const getUsersSelector = (state) => {
	return state.usersPage.users;
};

//селектор, зависящий от примитивного
export const getUsers = createSelector(getUsersSelector, (users) => {
	return users.filter((user) => true);
});

export const getPageSize = (state) => {
	return state.usersPage.pageSize;
};

export const getTotalUsersCount = (state) => {
	return state.usersPage.totalUsersCount;
};

export const getCurrentPage = (state) => {
	return state.usersPage.currentPage;
};

export const getIsFetching = (state) => {
	return state.usersPage.isFetching;
};

export const getFollowingInProgress = (state) => {
	return state.usersPage.followingInProgress;
};
