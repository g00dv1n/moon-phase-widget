const apiUrl = 'https://ipinfo.io/json';
const locaStorageKey = 'mph-widget-geodata';
const localStorage = window.localStorage || {};

function checkLocalStorage() {
  const testKey = 'localStorageTest'
  try {
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
  } catch(e) {
      return false;
  }
}


export default async function () {
  let isLocalStorageSupported = checkLocalStorage();
  let geoData = isLocalStorageSupported && JSON.parse(localStorage.getItem(locaStorageKey));

  if (geoData) {
    return geoData;
  }
  
  const res = await fetch(apiUrl);
  geoData = await res.json();

  const [latStr, lonStr] = geoData.loc.split(',');

  Object.assign(geoData, {
    latitude: parseFloat(latStr),
    longitude: parseFloat(lonStr)
  });
  
  if (isLocalStorageSupported) {
    localStorage.setItem(locaStorageKey, JSON.stringify(geoData));
  }
  return geoData;
}