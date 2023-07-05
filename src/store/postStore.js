import { create } from "zustand";
import { instance } from "../utils/service";
const initialState = {
  posts: null,
};

const postStore = create((set) => ({
  ...initialState,
  getEvents: async () => {
    try {
      const res = await instance.get("app/list-posts");
      console.log(res);
      set((state) => ({ ...state, posts: res.data }));
    } catch (error) {
      console.log("error: " + error);
    }
  },
}));

export default postStore;
