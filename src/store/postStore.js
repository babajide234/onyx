import { create } from "zustand";
import { instance } from "../utils/service";
const initialState = {
  posts: null,
  events: null,
  resources: null,
  post: null,
  event: null,
};

const postStore = create((set) => ({
  ...initialState,
  getPosts: async () => {
    try {
      const res = await instance.get("app/list-posts");
      console.log(res);
      set((state) => ({ ...state, posts: res.data }));
      return res.data;
    } catch (error) {
      console.log("error: " + error);
    }
  },
  getEvents: async () => {
    try {
      const res = await instance.get("app/list-event");
      console.log(res);
      set((state) => ({ ...state, events: res.data }));
      return res.data;
    } catch (error) {
      console.log("error: " + error);
    }
  },
  getResource: async () => {
    try {
      const res = await instance.get("app/list-career-resources");
      console.log(res);
      set((state) => ({ ...state, resources: res.data }));
      return res.data.data;
    } catch (error) {
      console.log("error: " + error);
    }
  },
  getSingePosts: async (id) => {
    try {
      const res = await instance.get(`app/list-posts?Id=${id}`);
      console.log(res);
      return res.data;
    } catch (error) {
      console.log("error: " + error);
    }
  },
  getSingeEvents: async (id) => {
    try {
      const res = await instance.get(`app/list-event?Id=${id}`);
      console.log(res);
      return res.data;
    } catch (error) {
      console.log("error: " + error);
    }
  },
}));

export default postStore;
