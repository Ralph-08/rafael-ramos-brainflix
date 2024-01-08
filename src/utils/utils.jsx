const API_URL = "https://project-2-api.herokuapp.com";
const API_KEY = "?api_key=5818c0c8-34e0-4074-bd0a-575018f154ba";

const getVideo = (videoId) => `${API_URL}/videos/${videoId}${API_KEY}`;

export { API_URL, API_KEY, getVideo };
