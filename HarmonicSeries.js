var calcButton = document.getElementById("calcButton");
var note = document.getElementById("Note");
var octave = document.getElementById("octave");
var output = document.getElementById("output");
var notes_names = [
  { name: "C", value: "0" },
  { name: "C♯/D♭", value: "1" },
  { name: "D", value: "2" },
  { name: "D♯/E♭", value: "3" },
  { name: "E", value: "4" },
  { name: "F", value: "5" },
  { name: "F♯/G♭", value: "6" },
  { name: "G", value: "7" },
  { name: "G♯/A♭", value: "8" },
  { name: "A", value: "9" },
  { name: "A♯/B♭", value: "10" },
  { name: "B", value: "11" },
];
var octavesVS = [
  { name: "0 (sub-contra)", value: "0" },
  { name: "1 (contra)", value: "1" },
  { name: "2 (great)", value: "2" },
  { name: "3 (small)", value: "3" },
  { name: "4 (1-line)", value: "4" },
  { name: "5 (2-line)", value: "5" },
  { name: "6 (3-line)", value: "6" },
  { name: "7 (4-line)", value: "7" },
  { name: "8 (5-line)", value: "8" },
];

// omni.onInit(function (ctx) {
//   bindValueSelect(notesVS, "note_name");
//   bindValueSelect(octavesVS, "octave");
//   setDefault("note_name", "9");
//   setDefault("octave", "4");
// });

function calcHarmonicSeries() {
  var i, j, k;
  //   hideVariables("dummy");
  var first_freq = 16.3516;

  var note = getNumberValue("Note");
  var octave = getNumberValue("octave");

  var step = octave * 12 + note;

  var note_frequency = first_freq * Math.pow(2, step / 12);

  var numer = getNumberValue("number");

  var tableData = [];
  var header = ["Partial", "Freq (Hz)", "Note", "Cents"];
  var notes = [];
  var not_nam = [];
  var oc_ar = [];
  var centi = [];
  for (i = 0; i < numer; i++) {
    notes.push(parseFloat(note_frequency * (i + 1)).toFixed(2));
  }
  for (i = 0; i < numer; i++) {
    not_nam.push(
      Math.round(modulo(12 * (Math.log(notes[i] / 16.3516) / Math.log(2)), 12))
    );
    oc_ar.push(
      Math.floor((12 * (Math.log(notes[i] / 16.3516) / Math.log(2))) / 12)
    );
  }

  //addHtml(not_nam)
  for (i = 0; i < numer; i++) {
    centi.push(
      parseFloat(
        1200 * Math.log2(notes[i] / renote(not_nam[i], oc_ar[i]))
      ).toFixed(0)
    );
  }
  for (i = 0; i < numer; i++) {
    if (not_nam[i] === 12) {
      not_nam[i] = 0;
    }
  }
  for (i = 0; i < numer; i++) {
    tableData.push([
      i + 1,
      notes[i],
      notes_names[not_nam[i]].name + String(oc_ar[i]),
      centi[i],
    ]);
  }

  addTable(tableData, header);
}

function denote(fre) {
  return ((12 * Math.log(fre / 16.5315)) / Math.log(2)).toFixed(4);
}

function renote(no, oc) {
  return 16.3516 * Math.pow(2, (oc * 12 + no) / 12);
}

function modulo(n, m) {
  return ((n % m) + m) % m;
}

// my

function createDropDown(arr, element) {
  for (var i = 0; i < arr.length; i++) {
    var option = document.createElement("option");
    option.text = arr[i].name;
    option.value = arr[i].value;
    element.appendChild(option);
  }
}

function addTable(tableData, tableHeadings) {
  var output = document.querySelector("#output");
  var table = document.createElement("table");
  var tableBody = document.createElement("tbody");

  tableData.forEach(function (rowData) {
    var row = document.createElement("tr");

    rowData.forEach(function (cellData) {
      var cell = document.createElement("td");
      cell.appendChild(document.createTextNode(cellData));
      row.appendChild(cell);
    });
    tableBody.appendChild(row);
  });
  var thead = document.createElement("thead");
  table.appendChild(thead);
  table.appendChild(tableBody);
  tableHeadings.map((item) => {
    thead
      .appendChild(document.createElement("th"))
      .appendChild(document.createTextNode(item));
  });
  output.innerHTML = "";
  output.append(table);
  output.style.display = "inline-block";
}
function getNumberValue(id) {
  let note = document.getElementById(id);
  let noteNumberValue = note.value;
  return Number(noteNumberValue);
}
var note = document.getElementById("Note");
var octave = document.getElementById("octave");
createDropDown(notes_names, note);
createDropDown(octavesVS, octave);

function updateTable() {
  if (output.style.display == "inline-block") {
    calcHarmonicSeries();
  }
}

function init() {
  output.style.display = "none";
}
calcButton.addEventListener("click", calcHarmonicSeries);
note.addEventListener("change", updateTable);
octave.addEventListener("change", updateTable);
init();
