import appAxios from "@/adapters/appAxios";

export let data = {
  dataList: [],
  dataCount: 0,
};

export function getAllData() {
  return appAxios
    .get("data")
    .then((response) => {
      if (response.status == 200) {
        let dataList = response.data;
        return dataList;
      }
    })
    .catch((err) => {
      return err;
    });
}

export async function getList() {
  data.dataList = await getAllData();
  data.dataCount = data.dataList.length;
  return data;
}

export function searchList(keyword) {
  return data.dataList.filter((c) => c[0].toLowerCase().includes(keyword.toLowerCase()));
}
