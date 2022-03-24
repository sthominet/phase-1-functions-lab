function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(pickupLocation - 42);
  }
  
function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * 264;
  }
  
function distanceTravelledInFeet (pickupLocation, dropOffLocation) {  
    return (Math.abs(dropOffLocation - pickupLocation)) * 264;
  }

function calculatesFarePrice (pickupLocation, dropOffLocation) {
      if ( distanceTravelledInFeet (pickupLocation, dropOffLocation) <= 400 )
      { return 0;}
      else if ( distanceTravelledInFeet (pickupLocation, dropOffLocation) <= 2000 && distanceTravelledInFeet (pickupLocation, dropOffLocation) > 400 )
      { return ( distanceTravelledInFeet (pickupLocation, dropOffLocation) - 400 ) * 0.02;}
      else if ( distanceTravelledInFeet (pickupLocation, dropOffLocation) > 2000 && distanceTravelledInFeet (pickupLocation, dropOffLocation) <= 2500 )
      { return 25;}
      else if ( distanceTravelledInFeet (pickupLocation, dropOffLocation) > 2500 )
      { return 'cannot travel that far';}
  }
