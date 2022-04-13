const parts = [
  { partNbr: "R5AQDVU", partDescr: "Halbendozer", aisle: "B3", qty: 14 },
  { partNbr: "LJBKC0M", partDescr: "Knudleknorp", aisle: "H1", qty: 12 },
  { partNbr: "HUS51DE", partDescr: "Knudlescheiffer", aisle: "H1", qty: 12 },
  { partNbr: "M0XORFH", partDescr: "Borgom Oil", aisle: "B2", qty: 3 },
  { partNbr: "35X7AP8", partDescr: "Glundelscharf", aisle: "C3", qty: 1 },
  { partNbr: "C1AYCAI", partDescr: "Tschoffle", aisle: "A4", qty: 5 },
  { partNbr: "E9IEYLS", partDescr: "Karmandloch", aisle: "C2", qty: 2 },
  { partNbr: "IW2I0TG", partDescr: "Shreckendwammer", aisle: "J4", qty: 2 },
  { partNbr: "95OJTV6", partDescr: "Dimpenaus", aisle: "B1", qty: 16 },
  { partNbr: "LYII1MJ", partDescr: "Lumpenknorp", aisle: "H1", qty: 12 },
  { partNbr: "VQIL7AO", partDescr: "Lumpenschieffer", aisle: "H1", qty: 12 },
  { partNbr: "XF0MPS9", partDescr: "Ratklampen", aisle: "N2", qty: 7 },
  { partNbr: "AFU9OUG", partDescr: "Dulpo Fittings", aisle: "J2", qty: 4 },
  { partNbr: "E7XWGGO", partDescr: "Flugtrimsammler", aisle: "B3", qty: 3 },
  { partNbr: "981FNC9", partDescr: "Grosstramle", aisle: "A1", qty: 1 },
  { partNbr: "AGSXYVZ", partDescr: "Skirpenflatch", aisle: "B2", qty: 2 },
  { partNbr: "V0SK0UX", partDescr: "Lumpenmagler", aisle: "H1", qty: 12 },
  { partNbr: "CTL40Z1", partDescr: "Lumpenflempest", aisle: "H1", qty: 24 },
  { partNbr: "POO9ZPM", partDescr: "Eumonklippen", aisle: "D2", qty: 7 },
  { partNbr: "WEYPU3Z", partDescr: "Mumpenflipper", aisle: "E3", qty: 1 },
];

// list of each part number and qty for check-off in the "detailsList" element.

var supplyList = document.querySelector("#detailsList");
parts.forEach(function (e, i) {
  let newDiv = document.createElement("div");
  let newInput = document.createElement("input");

  newInput.setAttribute("type", "checkbox");

  let partsLabel = document.createElement("label");
  partsLabel.textContent = `${parts[i].qty} (${parts[i].partNbr}) - ${parts[i].partDescr}`;
  supplyList.append(newDiv);
  newDiv.append(newInput);
  newDiv.append(partsLabel);
});

// if parts requiring special handling exist (in aisle B3), list of items needing
// special packaging in the "specialPackaging" element, else remove element.

var uniqueDelivery = document.querySelector("#specialPackaging");
var frail = parts.filter(function (e, i) {
  return parts[i].aisle === "B3";
});

if (frail.length !== 0) {
  frail.forEach(function (e, i) {
    let revisedPackage = document.createElement("p");
    revisedPackage.textContent = `Item: ${frail[i].partNbr} / Qty: ${frail[i].qty}`;
    uniqueDelivery.appendChild(revisedPackage);
  });
} else {
  uniqueDelivery.remove();
}

// if hazardous parts exist (in aisle J4), let employee know in the "hazardousMaterials"
// element and remind them to get gloves, else remove element.

var unsafeItem = document.querySelector("#hazardousMaterials");
var dangerous = parts.some(function (e, i) {
  return parts[i].aisle === "J4";
});

if (dangerous !== true) {
  unsafeItem.remove();
} else {
  let txtNote = document.createElement("p");
  txtNote.textContent = "ATTENTION!! hazardous parts, please wear gloves.";
  unsafeItem.appendChild(txtNote);
}

// if all items in the order are small parts (aisle H1), then let employee know that they should take
// a basket and go dirctly to aisle H1.

var smallParts = document.querySelector("#smallItemsOnly");
var moveParts = parts.every(function (e, i) {
  return parts[i].aisle === "H1";
});

if (moveParts !== true) {
  smallParts.remove();
} else {
  let txtNote2 = document.createElement("memo");
  txtNote2.textContent =
    "If order item is small, take a Basket and go straight to aisle H1";
  smallParts.appendChild(txtNote2);
}

// if there are large items (anthing in aisles S, T, or U), then let the employee know in the "forkiftNeeded"
// element that they will need to reserve a forklift, else remove the element.

var denseLoad = document.querySelector("#forkiftNeeded");
var reserveLift = parts.find(function (e, i) {
  return (
    ((parts[i].aisle === "S" + parts[i].aisle) === "T" + parts[i].aisle) === "U"
  );
});

if (reserveLift == undefined) {
  denseLoad.remove();
} else {
  let txtNote3 = document.createElement("memo");
  txtNote3.textContent = "The load is heavy!. Please, reserve a ForkLift.";
  denseLoad.appendChild(txtNote3);
}

// sum up the total number of parts and append that number to the text already in "totalItems" element.

var sumTotal = document.querySelector("#totalItems");
var outcomeTotal = parts.reduce(function (oldAmount, part) {
  return oldAmount + part.qty;
}, 0);

sumTotal.textContent += ` : ${outcomeTotal}`;
