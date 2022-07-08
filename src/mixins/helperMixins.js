export function getLocalStorage(key) {
  return window.localStorage.getItem(key);
}

export function setLocalStorage(key, data) {
  window.localStorage.setItem(key, data);
}
