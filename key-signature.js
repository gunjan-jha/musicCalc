var method = document.getElementById("signature_select");
var qualitySelect = document.getElementById("keyQuality");
var rootNote = document.getElementById("rootNote");
var signatureBox = document.getElementById("signatureBox");
var keyBox = document.getElementById("keyBox");
var sharps = document.getElementById("sharps");
var calcButton = document.getElementById("calcButton");
var output = document.getElementById("output");
var nkeysInput = document.getElementById("howMany");

// ---------------------------------- MAIN -------------------------------------
// Option 0 - find key
function findSharps() {
  accidentals_type = accidentals_type.toNumber();
  option = option.toNumber();
  if (option) {
    return;
  }
  ctx.showVariables("accidentals");

  if (accidentals_type === 0) {
    ctx.hideVariables("accidentals");
    ctx.addHtml(
      " The keys with no accidentals are <b>C major</b> and <b>A minor</b>."
    );
  } else {
    return;
  }
}
function calFlatAndSharps() {
  var accidentals = nkeysInput.value;
  var accidentals_type = sharps.options[sharps.selectedIndex].value;
  // option = option.toNumber();
  // if (option) {
  //   return;
  // }
  if (Number(accidentals_type) === 0) {
    return;
  }

  var accText;
  switch (Number(accidentals_type)) {
    case 0:
      output.innerHTML =
        " The keys with no accidentals are <b>C major</b> and <b>A minor</b>.";
      output.style.display = "inline-block";
      return;
    case 1:
      accText = "flats";
      if (accidentals === 1) {
        accText = "flat";
      }
      break;
    case 2:
      accText = "sharps";
      if (accidentals === 1) {
        accText = "sharp";
      }
      break;
  }
  var keys = getKeys(Number(accidentals_type), accidentals);
  output.innerHTML =
    "The keys with " +
    accidentals +
    " " +
    accText +
    " are: <b>" +
    keys.major +
    "</b> and <b>" +
    keys.minor +
    "</b>.";

  output.style.display = "inline-block";
}

// // Option 1 - find accidentals
// // major keys
function findMajorkeys() {
  var key_quality = qualitySelect.options[qualitySelect.selectedIndex].value;
  var major_keys = rootNote.options[rootNote.selectedIndex].value;

  var accidentalsObj;

  if (major_keys == "0") {
    output.innerHTML = "The key of C major has no accidentals.";
    output.style.display = "inline-block";
    return;
  }

  if (Number(key_quality) === 1) {
    accidentalsObj = getAccidentals("major", major_keys);
  } else {
    return;
  }
  var keyName = majorKeys[major_keys].name;
  var plural = "";
  if (accidentalsObj.number !== 1) {
    plural = "s";
  }

  var message =
    "The key of " +
    keyName +
    " major has <b>" +
    accidentalsObj.number +
    " " +
    accidentalsObj.type +
    plural +
    ": ";

  accidentalsObj.names.forEach(function (x) {
    message += x;
    message += ", ";
  });
  message = message.slice(0, -2);
  message += "</b>.";

  //C maj case
  if (major_keys === 0) {
    message = "The key of C major has <b>no accidentals</b>.";
  }

  output.innerHTML = message;
  output.style.display = "inline-block";
}
// minor keys
function findMinorKeys() {
  var key_quality = qualitySelect.options[qualitySelect.selectedIndex].value;
  var minor_keys = rootNote.options[qualitySelect.selectedIndex].value;

  var accidentalsObj;

  if (Number(key_quality) === 0) {
    accidentalsObj = getAccidentals("minor", minor_keys);
  } else {
    return;
  }
  var keyName = minorKeys[minor_keys].name;
  var plural = "";
  if (accidentalsObj.number !== 1) {
    plural = "s";
  }

  var message =
    "The key of " +
    keyName +
    " minor has <b>" +
    accidentalsObj.number +
    " " +
    accidentalsObj.type +
    plural +
    ": ";

  accidentalsObj.names.forEach(function (x) {
    message += x;
    message += ", ";
  });
  message = message.slice(0, -2);
  message += "</b>.";

  //A min case
  if (minor_keys === 11) {
    message = "The key of A minor has <b>no accidentals</b>.";
  }
  output.innerHTML = message;
  output.style.display = "inline-block";
}

// --------------------------- DATA ----------------------------------

var sharpsMaj = ["C", "G", "D", "A", "E", "B", "F♯", "C♯"];
var sharpsMin = ["A", "E", "B", "F♯", "C♯", "G♯", "D♯", "A♯"];
var flatsMaj = ["C", "F", "B♭", "E♭", "A♭", "D♭", "G♭", "C♭"];
var flatsMin = ["A", "D", "G", "C", "F", "B♭", "E♭", "A♭"];

var sharps_order = ["F♯", "C♯", "G♯", "D♯", "A♯", "E♯", "B♯"];
var flats_order = ["B♭", "E♭", "A♭", "D♭", "G♭", "C♭", "F♭"];

var majorKeys = [
  { name: "C", id: 0, accType: "none", accNum: 0 },
  { name: "C♯", id: 1, accType: "sharp", accNum: 7 },
  { name: "D♭", id: 2, accType: "flat", accNum: 5 },
  { name: "D", id: 3, accType: "sharp", accNum: 2 },
  { name: "E♭", id: 4, accType: "flat", accNum: 3 },
  { name: "E", id: 5, accType: "sharp", accNum: 4 },
  { name: "F", id: 6, accType: "flat", accNum: 1 },
  { name: "F♯", id: 7, accType: "sharp", accNum: 6 },
  { name: "G♭", id: 8, accType: "flat", accNum: 6 },
  { name: "G", id: 9, accType: "sharp", accNum: 1 },
  { name: "A♭", id: 10, accType: "flat", accNum: 4 },
  { name: "A", id: 11, accType: "sharp", accNum: 3 },
  { name: "B♭", id: 12, accType: "flat", accNum: 2 },
  { name: "B", id: 13, accType: "sharp", accNum: 5 },
  { name: "C♭", id: 14, accType: "flat", accNum: 7 },
];
var minorKeys = [
  { name: "C", id: 0, accType: "flat", accNum: 3 },
  { name: "C♯", id: 1, accType: "sharp", accNum: 4 },
  { name: "D", id: 2, accType: "flat", accNum: 1 },
  { name: "D♯", id: 3, accType: "sharp", accNum: 6 },
  { name: "E♭", id: 4, accType: "flat", accNum: 6 },
  { name: "E", id: 5, accType: "sharp", accNum: 1 },
  { name: "F", id: 6, accType: "flat", accNum: 4 },
  { name: "F♯", id: 7, accType: "sharp", accNum: 3 },
  { name: "G", id: 8, accType: "flat", accNum: 2 },
  { name: "G♯", id: 9, accType: "sharp", accNum: 5 },
  { name: "A♭", id: 10, accType: "flat", accNum: 7 },
  { name: "A", id: 11, accType: "none", accNum: 0 },
  { name: "A♯", id: 12, accType: "sharp", accNum: 7 },
  { name: "B♭", id: 13, accType: "flat", accNum: 5 },
  { name: "B", id: 14, accType: "sharp", accNum: 2 },
];
var sharpsAndFlats = [
  { name: "None", value: "0" },
  { name: "Flats", value: "1" },
  { name: "Sharps", value: "2" },
];

// --------------------------- FUNCTIONS ---------------------------------------

function getKeys(accType, accNumb) {
  //return keys = {major:'c', minor:'a'}
  var keysObj = { major: "", minor: "" };

  if (accType === 0) {
    keysObj.major = "C major";
    keysObj.minor = "A minor";
  } else if (accType === 1) {
    keysObj.major = flatsMaj[accNumb] + " major";
    keysObj.minor = flatsMin[accNumb] + " minor";
  } else if (accType === 2) {
    keysObj.major = sharpsMaj[accNumb] + " major";
    keysObj.minor = sharpsMin[accNumb] + " minor";
  }

  return keysObj;
}
function getAccidentals(quality, key_id) {
  var accidentalsObj = { type: "", number: undefined, names: [] };

  if (quality === "major") {
    var accType = majorKeys[key_id].accType;
    var accNum = majorKeys[key_id].accNum;
    accidentalsObj.type = accType;
    accidentalsObj.number = accNum;
    if (accType === "sharp") {
      accidentalsObj.names = sharps_order.slice(0, accNum);
    } else if (accType === "flat") {
      accidentalsObj.names = flats_order.slice(0, accNum);
    }
  } else if (quality === "minor") {
    var accType2 = minorKeys[key_id].accType;
    var accNum2 = minorKeys[key_id].accNum;
    accidentalsObj.type = accType2;
    accidentalsObj.number = accNum2;
    if (accType2 === "sharp") {
      accidentalsObj.names = sharps_order.slice(0, accNum2);
    } else if (accType2 === "flat") {
      accidentalsObj.names = flats_order.slice(0, accNum2);
    }
  }

  return accidentalsObj;
}

// ----------------------------- VS --------------------------------------

var optionVS = [
  { name: "keySignature", value: "0" },
  { name: "key", value: "1" },
];
var majorKeys_VSelect = [
  { name: "C", value: "0" },
  { name: "C♯", value: "1" },
  { name: "D♭", value: "2" },
  { name: "D", value: "3" },
  { name: "E♭", value: "4" },
  { name: "E", value: "5" },
  { name: "F", value: "6" },
  { name: "F♯", value: "7" },
  { name: "G♭", value: "8" },
  { name: "G", value: "9" },
  { name: "A♭", value: "10" },
  { name: "A", value: "11" },
  { name: "B♭", value: "12" },
  { name: "B", value: "13" },
  { name: "C♭", value: "14" },
];
var minorKeys_VSelect = [
  { name: "C", value: "0" },
  { name: "C♯", value: "1" },
  { name: "D", value: "2" },
  { name: "D♯", value: "3" },
  { name: "E♭", value: "4" },
  { name: "E", value: "5" },
  { name: "F", value: "6" },
  { name: "F♯", value: "7" },
  { name: "G", value: "8" },
  { name: "G♯", value: "9" },
  { name: "A♭", value: "10" },
  { name: "A", value: "11" },
  { name: "A♯", value: "12" },
  { name: "B♭", value: "13" },
  { name: "B", value: "14" },
];
var qualityVS = [
  { name: "Minor", value: "0" },
  { name: "Major", value: "1" },
];

function onInit() {
  createDropDown(optionVS, method);
  createDropDown(qualityVS, qualitySelect);
  createDropDown(minorKeys_VSelect, rootNote);
  createDropDown(sharpsAndFlats, sharps);
  keyBox.style.display = "none";
  output.style.display = "none";
}

function createDropDown(arr, element) {
  element.innerHTML = "";
  for (var i = 0; i < arr.length; i++) {
    var option = document.createElement("option");
    option.text = arr[i].name;
    option.value = arr[i].value;
    element.appendChild(option);
  }
}

qualitySelect.addEventListener("change", selectDropDown);
method.addEventListener("change", selectCalculator);
calcButton.addEventListener("click", calculate);

function selectDropDown() {
  var selectedQuality =
    qualitySelect.options[qualitySelect.selectedIndex].value;
  if (selectedQuality == "0") {
    createDropDown(minorKeys_VSelect, rootNote);
  } else if (selectedQuality == "1") {
    createDropDown(majorKeys_VSelect, rootNote);
  }
}

function selectCalculator() {
  var selectedMethod = method.options[method.selectedIndex].value;
  if (selectedMethod == "0") {
    signatureBox.style.display = "inline-block";
    keyBox.style.display = "none";
  } else if (selectedMethod == "1") {
    keyBox.style.display = "inline-block";
    signatureBox.style.display = "none";
  }
}

function calculate() {
  var selectedMethod = method.options[method.selectedIndex].value;
  var selectedQuality =
    qualitySelect.options[qualitySelect.selectedIndex].value;
  if (selectedMethod == "0") {
    if (selectedQuality == "0") {
      findMinorKeys();
    } else if (selectedQuality == "1") {
      findMajorkeys();
    }
  } else if (selectedMethod == "1") {
    calFlatAndSharps();
  }
}
onInit();
