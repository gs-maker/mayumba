import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
	const { data } = await axios.get(url, {
		headers: {
			"x-rapidapi-host": "bayut.p.rapidapi.com",
			"x-rapidapi-key": "39db01bdc6mshf9d15a8c34d018ep166949jsn0796910b10e5",
		},
	});
	return data;
};
