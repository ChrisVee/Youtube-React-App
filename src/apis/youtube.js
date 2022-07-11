import axios from "axios";

const KEY = "AIzaSyA2XkyUHRHQkBObkJ7jcJsumPPOSw9LA0M";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
