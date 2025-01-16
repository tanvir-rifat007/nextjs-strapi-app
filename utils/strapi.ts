"use server";

import axios from "axios";
import { memoize } from "nextjs-better-unstable-cache";

export const getInfoForHomeFromStrapi = memoize(
  async () => {
    const res = await axios.get(
      "http://localhost:1337/api/info-blocks-landing?pLevel"
    );

    return res.data.data;
  },

  {
    persist: true,
    revalidateTags: () => ["strapi:info"],
    log: ["datacache", "dedupe", "dedupe"],
  }
);
