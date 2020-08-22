import axios from "axios";

const instance = axios.create({
	withCredentials: true,
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	headers: {
		"api-key": "33fdc419-4c96-49a2-b3bb-109757a1fef3",
	},
});

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance
			.get(`users?page=${currentPage}&count=${pageSize}`)
			.then((response) => response.data);
	},
	follow(userId) {
		return instance
			.post(`follow/${userId}`, {})
			.then((response) => response.data);
	},
	unfollow(userId) {
		return instance
			.delete(`follow/${userId}`)
			.then((response) => response.data);
	},
	getProfile(userId){
		return instance
			.get(`profile/${userId}`)

	}
};

export const authAPI = {
	me() {
		return instance.get("auth/me")
	},
	profile(userId){
		return instance.get(`profile/${userId}`)
	}
	// showProfile(userId) {
	// 	return instance.get(`profile/${userId}`).then((response) => response.data);
	// },
};
