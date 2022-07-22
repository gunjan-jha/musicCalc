//--------------------------------- MAIN --------------------------------------

function calculateProgression() {
  let key = document.querySelector("#key").value;
  let progression = document.querySelector("#prog_select_input").value;
  findPogressionOfList(key, progression);
}
// progression chosen from lists
function findPogressionOfList(key, progression) {
  let output = document.querySelector("#result");
  key = Number(key);
  progression = Number(progression);

  //choose progression
  var progressionObject = allProgressions[progression];

  var scaleNotes = getScaleNotes(progressionObject, key);
  var chords = [];

  //Get chords' names
  if (progressionObject.additional_symbols === "no") {
    //e.g.I, IV, V
    progressionObject.pattern.forEach(function (num) {
      //[1, 4, 5]
      var base = scaleNotes[num - 1]; //C //F //G
      var chord = addQuality(base, num); //Cmaj //Fmaj //Gmaj
      chords.push(chord);
    });
  } else {
    //I – IV – ♭viio – IV
    progressionObject.pattern.forEach(function (x) {
      //e.g.♭viio
      if (x.includes("♭")) {
        //♭7

        var num1 = parseInt(x[1]); //7
        var base1 = scaleNotes[num1 - 1]; //B (for C key)
        var flattened = lowerBySemitone(base1); //Bb
        var chord1 = addQuality(flattened, num1); //Bbdim
        chords.push(chord1);
      } else if (x.includes("(6)")) {
        var num2 = parseInt(x[0]);
        var base2 = scaleNotes[num2 - 1];
        var chord2 = addQuality(base2, num2);
        var chordwith6th = chord2 + "⁶";
        chords.push(chordwith6th);
      } else if (x.includes("(7)")) {
        var num3 = parseInt(x[0]);
        var base3 = scaleNotes[num3 - 1];
        var chord3 = addQuality(base3, num3);
        var chordwith7th = chord3 + "⁷";
        chords.push(chordwith7th);
      } else {
        var num4 = parseInt(x);
        var base4 = scaleNotes[num4 - 1];
        var chord4 = addQuality(base4, num4);
        chords.push(chord4);
      }
    });
  } //

  function addQuality(note, degree) {
    var chordQuality = getChordQuality(progressionObject, degree);
    var chord = note + chordQuality;
    return chord;
  }

  //--- Prepare Html text

  //4 chords in a line
  var resultText = "";
  for (var i = 0; i < chords.length; i++) {
    resultText += chords[i] + ", ";
    if (i !== 0 && (i + 1) % 4 === 0) {
      resultText += "<br>";
    }
  }
  var last4characters = resultText.substring(resultText.length - 4);
  if (last4characters === "<br>") {
    resultText = resultText.slice(0, -4);
  }
  resultText = resultText.slice(0, -2);

  //Print text
  let chosenChordProgression = "Chosen chord progression:";
  let permissionObjectNumerals = progressionObject.numerals;
  let chordProgressionForKey =
    "The chord progression in the key of " + keyVS[key].name + ":";
  output.innerHTML =
    chosenChordProgression +
    "\n" +
    permissionObjectNumerals +
    "\n" +
    chordProgressionForKey +
    "\n" +
    resultText;
}
//------------------------------ FUNCTIONS -------------------------------------
function lowerBySemitone(noteStr) {
  var lastSign = noteStr[noteStr.length - 1];
  var lastTwoSigns = noteStr.substring(noteStr.length - 2, noteStr.length);
  if (lastSign === "♯") {
    return removeAccidental(noteStr);
  } else if (
    (lastSign === "♭" && lastTwoSigns !== "♭♭") ||
    noteStr.length === 1
  ) {
    return addFlat(noteStr);
  } else if (lastTwoSigns === "♭♭") {
    return findNote2BeingIntervalDown(noteStr, 1, "♭");
  }
}
function getChordQuality(progressionObject, degree) {
  var quality = progressionObject.quality;
  var chordQuality;
  var maj = "";
  var min = "m";
  var dim = "dim";

  var majorScaleChordQualities = ["", maj, min, min, maj, maj, min, dim];
  var minorScaleChordQualities = ["", min, dim, maj, min, min, maj, maj];
  // var majorScaleChordQualities = ['', 'maj', 'min', 'min', 'maj', 'maj', 'min', 'dim'];
  // var minorScaleChordQualities = ['', 'min', 'dim', 'maj', 'min', 'min', 'maj', 'maj'];
  if (quality === "maj") {
    chordQuality = majorScaleChordQualities[degree];
  } else if (quality === "min") {
    chordQuality = minorScaleChordQualities[degree];
  }
  return chordQuality;
}
function getChordQuality2(scale_quality, degree) {
  var chordQuality;
  var maj = "";
  var min = "m";
  var dim = "dim";

  var majorScaleChordQualities = ["", maj, min, min, maj, maj, min, dim];
  var minorScaleChordQualities = ["", min, dim, maj, min, min, maj, maj];
  // var majorScaleChordQualities = ['', 'maj', 'min', 'min', 'maj', 'maj', 'min', 'dim'];
  // var minorScaleChordQualities = ['', 'min', 'dim', 'maj', 'min', 'min', 'maj', 'maj'];
  if (scale_quality === 0) {
    chordQuality = majorScaleChordQualities[degree];
  } else if (scale_quality === 1) {
    chordQuality = minorScaleChordQualities[degree];
  }
  return chordQuality;
}
function getScaleNotes(progressionObject, key) {
  var quality = progressionObject.quality;
  var scale;
  if (quality === "maj") {
    scale = majorScales[key];
  } else if (quality === "min") {
    scale = minorScales[key];
  }

  return scale;
}
function removeAccidental(noteStr) {
  var lastSign = noteStr.charAt(noteStr.length - 1);
  var result = noteStr;
  if (lastSign === "♯" || lastSign === "♭") {
    result = noteStr.substring(0, noteStr.length - 1);
  }
  return result;
}
function addFlat(noteStr) {
  return noteStr + "♭";
}
function findNote2BeingIntervalDown(note1, interval, allowedAccidental) {
  var note1Obj = noteNameToObject(note1);
  var resultNoteName;
  keyboardNotes.forEach(function (note) {
    if (
      note1Obj.value - interval === note.value &&
      (note.name.length === 1 ||
        note.name[note.name.length - 1] === allowedAccidental)
    ) {
      resultNoteName = note.name;
    }
  });
  return resultNoteName;
}
function noteNameToObject(noteStr) {
  var noteObj;
  keyboardNotes.forEach(function (note) {
    if (note.name === noteStr) {
      noteObj = keyboardNotes[note.order];
    }
  });
  return noteObj;
}
//----------------------------- VS ----------------------------------------------
var keyVS = [
  { name: "C", value: "0" },
  { name: "C♯", value: "1" },
  { name: "D♭", value: "2" },
  { name: "D", value: "3" },
  { name: "D♯", value: "4" },
  { name: "E♭", value: "5" },
  { name: "E", value: "6" },
  { name: "F", value: "7" },
  { name: "F♯", value: "8" },
  { name: "G♭", value: "9" },
  { name: "G", value: "10" },
  { name: "G♯", value: "11" },
  { name: "A♭", value: "12" },
  { name: "A", value: "13" },
  { name: "A♯", value: "14" },
  { name: "B♭", value: "15" },
  { name: "B", value: "16" },
];
//-------------------------------- DATA ------------------------------------------
var keyboardNotes = [
  { name: "C", value: 0, color: "White", order: 0, orderVS: 0 },
  { name: "D♭♭", value: 0, color: "White", order: 1 },
  { name: "C♯", value: 1, color: "Black", order: 2, orderVS: 1 },
  { name: "D♭", value: 1, color: "Black", order: 3, orderVS: 2 },
  { name: "C♯♯", value: 2, color: "Black", order: 4 },
  { name: "D", value: 2, color: "White", order: 5, orderVS: 3 },
  { name: "E♭♭", value: 2, color: "White", order: 6 },
  { name: "D♯", value: 3, color: "Black", order: 7, orderVS: 4 },
  { name: "E♭", value: 3, color: "Black", order: 8, orderVS: 5 },
  { name: "F♭♭", value: 3, color: "Black", order: 9 },
  { name: "D♯♯", value: 4, color: "White", order: 10 },
  { name: "E", value: 4, color: "White", order: 11, orderVS: 6 },
  { name: "F♭", value: 4, color: "White", order: 12 },
  { name: "E♯", value: 5, color: "White", order: 13 },
  { name: "F", value: 5, color: "White", order: 14, orderVS: 7 },
  { name: "G♭♭", value: 5, color: "White", order: 15 },
  { name: "F♯", value: 6, color: "Black", order: 16, orderVS: 8 },
  { name: "G♭", value: 6, color: "Black", order: 17, orderVS: 9 },
  { name: "F♯♯", value: 7, color: "White", order: 18 },
  { name: "G", value: 7, color: "White", order: 19, orderVS: 10 },
  { name: "A♭♭", value: 7, color: "White", order: 20 },
  { name: "G♯", value: 8, color: "Black", order: 21, orderVS: 11 },
  { name: "A♭", value: 8, color: "Black", order: 22, orderVS: 12 },
  { name: "G♯♯", value: 9, color: "White", order: 23 },
  { name: "A", value: 9, color: "White", order: 24, orderVS: 13 },
  { name: "B♭♭", value: 9, color: "White", order: 25 },
  { name: "A♯", value: 10, color: "Black", order: 26, orderVS: 14 },
  { name: "B♭", value: 10, color: "Black", order: 27, orderVS: 15 },
  { name: "C♭♭", value: 10, color: "Black", order: 28 },
  { name: "A♯♯", value: 11, color: "White", order: 29 },
  { name: "B", value: 11, color: "White", order: 30, orderVS: 16 },
  { name: "C♭", value: 11, color: "White", order: 31 },
  { name: "B♯", value: 12, color: "White", order: 32 },
];

var majorScales = [
  ["C", "D", "E", "F", "G", "A", "B", "C"],
  ["C♯", "D♯", "E♯", "F♯", "G♯", "A♯", "B♯", "C♯"],
  ["D♭", "E♭", "F", "G♭", "A♭", "B♭", "C", "D♭"],
  ["D", "E", "F♯", "G", "A", "B", "C♯", "D"],
  ["D♯", "E♯", "F♯♯", "G♯", "A♯", "B♯", "C♯♯", "D♯"],
  ["E♭", "F", "G", "A♭", "B♭", "C", "D", "E♭"],
  ["E", "F♯", "G♯", "A", "B", "C♯", "D♯", "E"],
  ["F", "G", "A", "B♭", "C", "D", "E", "F"],
  ["F♯", "G♯", "A♯", "B", "C♯", "D♯", "E♯", "F♯"],
  ["G♭", "A♭", "B♭", "C♭", "D♭", "E♭", "F", "G♭"],
  ["G", "A", "B", "C", "D", "E", "F♯", "G"],
  ["G♯", "A♯", "B♯", "C♯", "D♯", "E♯", "F♯♯", "G♯"],
  ["A♭", "B♭", "C", "D♭", "E♭", "F", "G", "A♭"],
  ["A", "B", "C♯", "D", "E", "F♯", "G♯", "A"],
  ["A♯", "B♯", "C♯♯", "D♯", "E♯", "F♯♯", "G♯♯", "A♯"],
  ["B♭", "C", "D", "E♭", "F", "G", "A", "B♭"],
  ["B", "C♯", "D♯", "E", "F♯", "G♯", "A♯", "B"],
];
var minorScales = [
  ["C", "D", "E♭", "F", "G", "A♭", "B♭", "C"],
  ["C♯", "D♯", "E", "F♯", "G♯", "A", "B", "C♯"],
  ["D♭", "E♭", "F♭", "G♭", "A♭", "B♭♭", "C♭", "D♭"],
  ["D", "E", "F", "G", "A", "B♭", "C", "D"],
  ["D♯", "E♯", "F♯", "G♯", "A♯", "B", "C♯", "D♯"],
  ["E♭", "F", "G♭", "A♭", "B♭", "C♭", "D♭", "E♭"],
  ["E", "F♯", "G", "A", "B", "C", "D", "E"],
  ["F", "G", "A♭", "B♭", "C", "D♭", "E♭", "F"],
  ["F♯", "G♯", "A", "B", "C♯", "D", "E", "F♯"],
  ["G♭", "A♭", "B♭♭", "C♭", "D♭", "E♭♭", "F♭", "G♭"],
  ["G", "A", "B♭", "C", "D", "E♭", "F", "G"],
  ["G♯", "A♯", "B", "C♯", "D♯", "E", "F♯", "G♯"],
  ["A♭", "B♭", "C♭", "D♭", "E♭", "F♭", "G♭", "A♭"],
  ["A", "B", "C", "D", "E", "F", "G", "A"],
  ["A♯", "B♯", "C♯", "D♯", "E♯", "F♯", "G♯", "A♯"],
  ["B♭", "C", "D♭", "E♭", "F", "G♭", "A♭", "B♭"],
  ["B", "C♯", "D", "E", "F♯", "G", "A", "B"],
];

// ordered as in VS
var allProgressions = [
  {
    name: "8-bar blues",
    numerals: "I – V – IV – IV,<br> I – V – I – V",
    quality: "maj",
    pattern: [1, 5, 4, 4, 1, 5, 1, 5],
    additional_symbols: "no",
  },
  {
    name: "12-bar blues",
    numerals: "I – I – I – I, <br>IV – IV – I – I, <br>V – IV – I – I",
    quality: "maj",
    pattern: [1, 1, 1, 1, 4, 4, 1, 1, 5, 4, 1, 1],
    additional_symbols: "no",
  },
  {
    name: "50's progression",
    numerals: "I – vi – IV – V",
    quality: "maj",
    pattern: [1, 6, 4, 5],
    additional_symbols: "no",
  },
  {
    name: "50's progression #2",
    numerals: "I − vi − ii − V",
    quality: "maj",
    pattern: [1, 6, 2, 5],
    additional_symbols: "no",
  },
  {
    name: "Andalusian cadence",
    numerals: "i – VII – VI – V",
    quality: "maj",
    pattern: [1, 7, 6, 5],
    additional_symbols: "no",
  },
  {
    name: "Circle progression",
    numerals: "vi – ii – V – I",
    quality: "maj",
    pattern: [6, 2, 5, 1],
    additional_symbols: "no",
  },
  {
    name: "Montgomery-Ward bridge",
    numerals: "V7 – I7 – IV – IV, vi7 – II7 – ii7 – V7",
    quality: "maj",
    pattern: ["5(7)", "1(7)", "4", "4", "6(7)", "2(7)", "2(7)", "5(7)"],
    additional_symbols: "yes",
  },
  {
    name: "The Pachelbel progression",
    numerals: "I – V – vi – iii,<br> IV – I – IV – V",
    quality: "maj",
    pattern: [1, 5, 6, 3, 4, 1, 4, 5],
    additional_symbols: "no",
  },
  {
    name: "I – I – IV – V",
    numerals: "I – I – IV – V",
    quality: "maj",
    pattern: [1, 1, 4, 5],
    additional_symbols: "no",
  },
  {
    name: "I – ii – V",
    numerals: "I – ii – V",
    quality: "maj",
    pattern: [1, 2, 5],
    additional_symbols: "no",
  },
  {
    name: "I – ♭iii – IV – ♭iii",
    numerals: "I – ♭iii – IV – ♭iii",
    quality: "maj",
    pattern: ["1", "♭3", "4", "♭3"],
    additional_symbols: "yes",
  },
  {
    name: "I – iii – IV – V",
    numerals: "I – iii – IV – V",
    quality: "maj",
    pattern: [1, 3, 4, 5],
    additional_symbols: "no",
  },
  {
    name: "I – iii – vi – IV",
    numerals: "I – iii – vi – IV",
    quality: "maj",
    pattern: [1, 3, 6, 4],
    additional_symbols: "no",
  },
  {
    name: "I – IV – I – V",
    numerals: "I – IV – I – V",
    quality: "maj",
    pattern: [1, 4, 1, 5],
    additional_symbols: "no",
  },
  {
    name: "I – IV – ii – V",
    numerals: "I – IV – ii – V",
    quality: "maj",
    pattern: [1, 4, 2, 5],
    additional_symbols: "no",
  },
  {
    name: "I – IV – V",
    numerals: "I – IV – V",
    quality: "maj",
    pattern: [1, 4, 5],
    additional_symbols: "no",
  },
  {
    name: "I – IV – V – IV",
    numerals: "I – IV – V – IV",
    quality: "maj",
    pattern: [1, 4, 5, 4],
    additional_symbols: "no",
  },
  {
    name: "I – IV – V – V",
    numerals: "I – IV – V – V",
    quality: "maj",
    pattern: [1, 4, 5, 5],
    additional_symbols: "no",
  },
  {
    name: "I – IV – vii° – iii – vi – ii – V – I",
    numerals: "I – IV – vii° – iii,<br> vi – ii – V – I",
    quality: "maj",
    pattern: [1, 4, 7, 3, 6, 2, 5, 1],
    additional_symbols: "no",
  },
  {
    name: "I – IV – ♭vii° – IV",
    numerals: "I – IV – ♭vii° – IV",
    quality: "maj",
    pattern: ["1", "4", "♭7", "4"],
    additional_symbols: "yes",
  },
  {
    name: "I – IV – ♭vii – IV",
    numerals: "I – IV – ♭vii° – IV",
    quality: "maj",
    pattern: ["1", "4", "♭7", "4"],
    additional_symbols: "yes",
  },
  {
    name: "I – V – IV – V",
    numerals: "I – V – IV – V",
    quality: "maj",
    pattern: [1, 5, 4, 5],
    additional_symbols: "no",
  },
  {
    name: "I – V – vi – IV",
    numerals: "I – V – vi – IV",
    quality: "maj",
    pattern: [1, 5, 6, 4],
    additional_symbols: "no",
  },
  {
    name: "I – vi – V",
    numerals: "I – vi – V",
    quality: "maj",
    pattern: [1, 6, 5],
    additional_symbols: "no",
  },
  {
    name: "I – ♭VII – IV",
    numerals: "I – ♭VII – IV",
    quality: "maj",
    pattern: ["1", "♭7", "4"],
    additional_symbols: "yes",
  },
  {
    name: "ii – V – I",
    numerals: "ii – V – I",
    quality: "maj",
    pattern: [2, 5, 1],
    additional_symbols: "no",
  },
  {
    name: "IV – V – vi – iii",
    numerals: "IV – V – vi – iii",
    quality: "maj",
    pattern: [4, 5, 6, 3],
    additional_symbols: "no",
  },
  {
    name: "V – I – IV",
    numerals: "V – I – IV",
    quality: "maj",
    pattern: [5, 1, 4],
    additional_symbols: "no",
  },
  {
    name: "V – IV – I",
    numerals: "V – IV – I",
    quality: "maj",
    pattern: [5, 4, 1],
    additional_symbols: "no",
  },
  {
    name: "vi – IV – I – V",
    numerals: "vi – IV – I – V",
    quality: "maj",
    pattern: [6, 4, 1, 5],
    additional_symbols: "no",
  },
  {
    name: "vi – V – IV – iii",
    numerals: "vi – V – IV – iii",
    quality: "maj",
    pattern: [6, 5, 4, 3],
    additional_symbols: "no",
  },
  {
    name: "vi – V – IV – V",
    numerals: "vi – V – IV – V",
    quality: "maj",
    pattern: [6, 5, 4, 5],
    additional_symbols: "no",
  },
  {
    name: "vi6 – ii – v6 – I",
    numerals: "vi6 – ii – V6 – I",
    quality: "maj",
    pattern: ["6(6)", "2", "5(6)", "1"],
    additional_symbols: "yes",
  },
  {
    name: "i – iv – i (min)",
    numerals: "i – iv – i",
    quality: "min",
    pattern: [1, 4, 1],
    additional_symbols: "no",
  },
  {
    name: "i – iv – v (min)",
    numerals: "i – iv – v",
    quality: "min",
    pattern: [1, 4, 5],
    additional_symbols: "no",
  },
  {
    name: "i – iv – v – i (min)",
    numerals: "i – iv – v – i",
    quality: "min",
    pattern: [1, 4, 5, 1],
    additional_symbols: "no",
  },
  {
    name: "i – iv7 – v7 – i (min)",
    numerals: "i – iv7 – v7 – i",
    quality: "min",
    pattern: ["1", "4(7)", "5(7)", "1"],
    additional_symbols: "yes",
  },
  {
    name: "i – iv – VII (min)",
    numerals: "i – iv – VII",
    quality: "min",
    pattern: [1, 4, 7],
    additional_symbols: "no",
  },
  {
    name: "i – VI – III – VII (min)",
    numerals: "i – VI – III – VII",
    quality: "min",
    pattern: [1, 6, 3, 7],
    additional_symbols: "no",
  },
  {
    name: "i –vi7 – iv7 – v7 (min)",
    numerals: "i –vi7 – iv7 – v7",
    quality: "min",
    pattern: ["1", "6(7)", "4(7)", "5(7)"],
    additional_symbols: "yes",
  },
  {
    name: "i – VI – VII (min)",
    numerals: "i – VI – VII",
    quality: "min",
    pattern: [1, 6, 7],
    additional_symbols: "no",
  },
  {
    name: "i – VII – VI – VII (min)",
    numerals: "i – VII – VI – VII",
    quality: "min",
    pattern: [1, 7, 6, 7],
    additional_symbols: "no",
  },
  {
    name: "ii° – v – i (min)",
    numerals: "ii° – v – i",
    quality: "min",
    pattern: [2, 5, 1],
    additional_symbols: "no",
  },
  {
    name: "VI – VII – i – i (min)",
    numerals: "VI – VII – i – i",
    quality: "min",
    pattern: [6, 7, 1, 1],
    additional_symbols: "no",
  },
];
