import api from "../apiClient";


export default {
    all: () => api.get("/events")
}