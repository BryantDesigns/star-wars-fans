export function toFeet(heightInCentimeters) {
  const realFeet = (heightInCentimeters * 0.393701) / 12;
  const feet = Math.floor(realFeet);
  const inches = Math.round((realFeet - feet) * 12);
  return `${feet}"${inches}in`;
}

export function toPounds(weightInKilograms) {
  return Math.round(weightInKilograms * 2.20462262);
}


