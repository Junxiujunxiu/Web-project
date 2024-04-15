/* eslint-disable no-dupe-keys */
import axios from "axios";

export async function getNews(
  filter: any,
  pageIndex: number,
  pageSize: number
) {
  return await axios.post("/news/getNews", filter, {
    params: {
      pageIndex: pageIndex,
      pageSize: pageSize,
    },
  });
}
