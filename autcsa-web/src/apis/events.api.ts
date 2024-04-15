/* eslint-disable no-dupe-keys */
import axios from "axios";

export async function getEvents(
  filter: any,
  pageIndex: number,
  pageSize: number
) {
  return await axios.post("/events/getEvents", filter, {
    params: {
      pageIndex: pageIndex,
      pageSize: pageSize,
    },
  });
}
