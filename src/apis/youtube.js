import axios from "axios";

const KEY = "AIzaSyDK4QrKdYUxDjbsleAc88hhh3WP0ZTbayg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
