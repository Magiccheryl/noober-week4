window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write the recipe (algorithm), then write the code
  

  // Loop through all of the available rides contained
    for (let i=0; i<json.length; i++) {

    // Set Passenger name to first name and last name
    let passengerName = `${json[i].passengerDetails.first} ${json[i].passengerDetails.last}`
    // Set Passenger Phone Number to phone number
    let passengerPhoneNumber = `${json[i].passengerDetails.phoneNumber}`
  
    // Set Pickup Address
    let pickupAddress = `${json[i].pickupLocation.address}`
    // Set Pickup Place to the City, State and Zip
    let pickupPlace = `${json[i].pickupLocation.city}, ${json[i].pickupLocation.state} ${json[i].pickupLocation.zip}`

    // Set Dropoff Address
    let dropoffAddress = `${json[i].dropoffLocation.address}`
    // Set Dropoff Place to the City, State and Zip
    let dropoffPlace = `${json[i].dropoffLocation.city}, ${json[i].dropoffLocation.state} ${json[i].dropoffLocation.zip}`

    // Store number of passengers
    let numberOfPassengers = json[i].numberOfPassengers
      
    // Set level of service with conditional statements (same logic as hw3)
    let serviceRequested
    let borderStyling
    if (json[i].purpleRequested==true) {
      serviceRequested=`Noober Purple`
      // (for fun) Give each level of service a different visual look – a purple border for Noober Purple
      borderStyling=`border-purple-500`
    } else if (numberOfPassengers > 3 && json[i].purpleRequested==false){
      serviceRequested=`Noober XL`
      // (for fun) Give each level of service a different visual look – a black border for Noober XL
      borderStyling=`border-black`
    } else {
      serviceRequested=`Noober X`
      // (for fun) Give each level of service a different visual look – a grey border for Noober X
      borderStyling=`border-gray-300`
    }

    //Set the condition: if there is only one passenger, set to "passenger", else set to "passengers"
    let passengerChange
    if (numberOfPassengers == 1){
      passengerChange = `passenger`
    } else {
      passengerChange = `passengers`
    }

    // Insert HTML into the rides div, using the data from ride request
    let ridesList = document.querySelector(`.rides`)
    ridesList.insertAdjacentHTML(`beforeend`,`
    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>${serviceRequested}</span>
    </h1>

    <div class="border-4 ${borderStyling} p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${passengerName}</h2>
          <p class="font-bold text-gray-600">${passengerPhoneNumber}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
            ${numberOfPassengers} ${passengerChange}
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${pickupAddress}</p>
          <p>${pickupPlace}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${dropoffAddress}</p>
          <p>${dropoffPlace}</p>
        </div>
      </div>
    </div>

    `)
  
  }

})