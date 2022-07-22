let major = ["1", "3", "5"];
let minor = ["1", "b3", "5"];
let dominant7th = ["1", "3", "5", "b7"];
let major7th = ["1", "3", "5", "7"];
let minor7th = ["1", "b3", "5", "b7"];
let major6th = ["1", "3", "5", "6"];
let minor6th = ["1", "b3", "5", "6"];
let diminished = ["1", "b3", "b5"];
let dimisnished7th = ["1", "b3", "b5", "bb7"];
let halfDiminished = ["1", "b3", "b5", "b7"];
let augmented = ["1", "3", "#5"];
let suspended2nd = ["1", "4", "5"];
let suspended4th = ["1", "2", "5"];

AmajorScale = ["A", "B", "C#", "D", "E", "F#", "G#", "A"];
BbmajorScale = ["Bb", "C", "D", "Eb", "F", "G", "A", "Bb"];
BmajorScale = ["B", "C#", "D#", "E", "F#", "G#", "A#", "B"];
CmajorScale = ["C", "D", "E", "F", "G", "A", "B", "C"];
DbmajorScale = ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C"];
DmajorScale = ["D", "E", "F#", "G", "A", "B", "C#", "D"];
EbmajorScale = ["Eb", "F", "G", "Ab", "Bb", "C", "D", "Eb"];
EmajorScale = ["E", "F#", "G#", "A", "B", "C#", "D#", "E"];
FmajorScale = ["F", "G", "A", "Bb", "C", "D", "E", "F"];
GbmajorScale = ["Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F", "Gb"];
GmajorScale = ["G", "A", "B", "C", "D", "E", "F#", "G"];
AbmajorScale = ["Ab", "B", "b", "C", "Db", "Eb", "F", "G", "Ab"];

function getScale(rootNote) {
  if (rootNote === "C") {
    return CmajorScale;
  } else if (rootNote === "C#") {
    let arr1 = [];
    CmajorScale.map((item) => {
      if (!item.includes("#")) item2 = item.concat("#");
      arr1.push(item2);
    });
    return arr1;
  } else if (rootNote === "Db") {
    return DbmajorScale;
  } else if (rootNote === "D#") {
    let arr1 = [];
    DmajorScale.map((item) => {
      if (!item.includes("#")) item2 = item.concat("#");
      arr1.push(item2);
    });
    return arr1;
  } else if (rootNote === "Db") {
    return DbmajorScale;
  } else if (rootNote === "D") {
    return DmajorScale;
  } else if (rootNote === "Eb") {
    return EbmajorScale;
  } else if (rootNote === "E") {
    return EmajorScale;
  } else if (rootNote === "F") {
    return FmajorScale;
  } else if (rootNote === "F#") {
    let arr1 = [];
    FmajorScale.map((item) => {
      if (!item.includes("#")) item2 = item.concat("#");
      arr1.push(item2);
    });
    return arr1;
  } else if (rootNote === "Gb") {
    return GbmajorScale;
  } else if (rootNote === "G") {
    return GmajorScale;
  } else if (rootNote === "G#") {
    let arr1 = [];
    GmajorScale.map((item) => {
      if (!item.includes("#")) item2 = item.concat("#");
      arr1.push(item2);
    });
    return arr1;
  } else if (rootNote === "Ab") {
    return AbmajorScale;
  } else if (rootNote === "A") {
    return AmajorScale;
  } else if (rootNote === "A#") {
    let arr1 = [];
    AmajorScale.map((item) => {
      if (!item.includes("#")) item2 = item.concat("#");
      arr1.push(item2);
    });
    return arr1;
  } else if (rootNote === "Bb") {
    return BbmajorScale;
  } else if (rootNote === "B") {
    return BmajorScale;
  }
}

function getFormula(chordType) {
  if (chordType === "major") {
    return major;
  } else if (chordType === "minor") {
    return minor;
  } else if (chordType === "dominant7th") {
    return dominant7th;
  } else if (chordType === "diminished") {
    return diminished;
  } else if (chordType === "suspended2nd") {
    return suspended2nd;
  } else if (chordType === "suspended4th") {
    return suspended4th;
  } else if (chordType === "Dominant7th") {
    return dominant7th;
  } else if (chordType === "major7th") {
    return major7th;
  } else if (chordType === "minor7th") {
    return minor7th;
  } else if (chordType === "diminished7th") {
    return dimisnished7th;
  } else if (chordType === "halfDiminished") {
    return halfDiminished;
  } else if (chordType === "major6th") {
    return major6th;
  } else if (chordType === "minor6th") {
    return minor6th;
  } else if (chordType === "augmented") {
    return augmented;
  }
}

function calculateNotes() {
  let rootNote = document.querySelector("#root-note");
  let chordType = document.querySelector("#chord-type");
  rootNote = rootNote.options[rootNote.selectedIndex].value;
  chordType = chordType.options[chordType.selectedIndex].value;
  let result = document.querySelector("#result");
  let notesArr = [];
  let formula = getFormula(chordType);
  let scale = getScale(rootNote.replace(/['"]+/g, ""));
  let notes = formula.map((n) => {
    let index = Number(n.replace(/\D/g, ""));
    let specialCharacter = n.replace(/[0-9]/g, "");
    let cNote;

    console.log(specialCharacter);
    let chordNote = scale.at(index - 1);
    if (specialCharacter != undefined) {
      cNote = chordNote.concat(specialCharacter);
    }
    notesArr.push(cNote.replace(/['"]+/g, ""));
  });
  console.log(notesArr);
  result.innerHTML = "Notes:" + notesArr.toString() + "\n Formula :" + formula;
  result.style.display = "block";
}
