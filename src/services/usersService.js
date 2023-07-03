import apiService from "./apiService";

export default {
    async create({ firstName, lastName, gender, birthDate, image }) {
        return await apiService.post("users", { firstName, lastName, gender, birthDate, image });
    },
    async get() {
        return await apiService.get("users");
    },
    async getById(userId) {
        return await apiService.get(`users/${userId}`);
    },
    async update({ firstName, lastName, gender, birthDate, image }) {
        return await apiService.put(`users/${userId}`, { firstName, lastName, gender, birthDate, image });
    },
    async _delete() {
        return await apiService.delete(`users/${userId}`);
    },

}