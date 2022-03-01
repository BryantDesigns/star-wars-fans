export function toFeet(heightInCentimeters) {
  const realFeet = (heightInCentimeters * 0.393701) / 12;
  const feet = Math.floor(realFeet);
  const inches = Math.round((realFeet - feet) * 12);
  return `${feet}"${inches}in`;
}

export function toPounds(weightInKilograms) {
  if (weightInKilograms === "unknown") {
    return "unknown";
  } else {
    const num = parseFloat(weightInKilograms.replace(/,/g, ""));
    const pounds = Math.round(num * 2.20462262);
    return `${pounds}lbs`;
  }
}
