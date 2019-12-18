const apiUrl = 'https://ipinfo.io/json';
const locaStorageKey = 'mph-widget-geodata';
const localStorage = window.localStorage || {};


const defaultGeo = {
  ip: '104.131.241.248',
  city: 'Gramercy Park',
  region: 'New York',
  country: 'US',
  loc: '40.7402,-73.9996',
  org: 'AS14061 DigitalOcean, LLC',
  postal: '10011',
  timezone: 'America/New_York',
  readme: 'https://ipinfo.io/missingauth'
}

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
  
  try {
    const res = await fetch(apiUrl);

    if (res.ok) {
      geoData = await res.json();
    }
  } catch (err) {
    console.warn(err);
  }
  
  geoData = geoData || defaultGeo;

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