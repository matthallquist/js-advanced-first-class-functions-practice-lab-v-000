// Code your solution in this file!
const logDriverNames = function(drivers) {
  drivers.map(driver => console.log(driver.name));
}

const logDriversByHometown = function(drivers, location) {
  newArray = drivers.filter(driver => driver.hometown === location);
  newArray.map(driver => console.log(driver.name));
}

function compareDrivers(a,b) {
  let result = 0;
  if (a.revenue > b.revenue) {
    result = 1;
  } else if (b.revenue > a.revenue) {
    result = -1;
  }
  return result;
}

const driversByRevenue = function(drivers) {
  let result = compareDrivers()
  console.log(result);
}
