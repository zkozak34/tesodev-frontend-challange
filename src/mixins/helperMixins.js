import appAxios from "@/adapters/appAxios";

export let dataList = JSON.parse(window.localStorage.getItem("mockData")) ?? [];

export function fetchAll() {
  let tmp = [];
  appAxios
    .get("data")
    .then((response) => {
      if (response.status == 200) {
        tmp = response.data;
      }
    })
    .catch((err) => console.error(err));

  return tmp;
}

export function initializeData() {
  let fromDb = fetchAll();
  console.log(fromDb);

  let fromLs = JSON.parse(window.localStorage.getItem("mockData")) ?? [];
  dataList = [...fromDb, ...fromLs];
}

export function getAll() {
  initializeData();
  console.log(dataList);
  return dataList;
}

export function searchList(keyword) {
  return dataList.filter((c) => c[0].toLowerCase().includes(keyword.toLowerCase()));
}

export function addNew(data) {
  let oldData = JSON.parse(window.localStorage.getItem("mockData")) || [];
  oldData.push(Object.values(data));
  window.localStorage.setItem("mockData", JSON.stringify(oldData));
}
