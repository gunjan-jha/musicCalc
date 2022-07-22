var delayTimes = [
  ["Double whole"],
  ["Whole"],
  ["1/2"],
  ["1/4"],
  ["1/8th"],
  ["1/16th"],
  ["1/32nd"],
  ["1/64th"],
  ["1/128th"],
  ["1/256th"],
  ["1/512th"],
];
var preDelayTimes = [[]];
var bpm, barDuration;
var timeSignature;
var room = [
  {
    name: "Hall",
    uid: "100",
    values: {
      preDelay: 0,
      totalLength: 0,
    },
  },
  {
    name: "Large room",
    uid: "101",
    values: {
      preDelay: 3,
      totalLength: 3,
    },
  },
  {
    name: "Small room",
    uid: "102",
    values: {
      preDelay: 6,
      totalLength: 6,
    },
  },
  {
    name: "Tight",
    uid: "103",
    values: {
      preDelay: 9,
      totalLength: 9,
    },
  },
  {
    name: "Custom",
    uid: "104",
    values: {},
  },
];

function createBpmChart() {
  bpm = getNumberValue("bpm");
  if (!bpm) return;
  setWholeNoteLength();
  //   timeSignature = getNumberValue("timeSignature");
  timeSignature = 0;
  setWholeNoteLength();
  delayTimes.forEach(function (note, index) {
    note[1] = (delayTimes[0][1] / Math.pow(2, index)).toFixed(2);
    note[2] = (note[1] * 1.5).toFixed(2);
    note[3] = ((note[1] * 2) / 3).toFixed(2);
  });
  createTable(
    delayTimes,
    [
      "Note",
      "Length \n(in ms) - \n one note",
      "Length \n(in ms) - \n dotted",
      "Length \n(in ms) - \n triplets",
    ],
    false
  );
  createPreDelayChart();
}

function setWholeNoteLength() {
  switch (timeSignature) {
    case 0:
      delayTimes[0][1] = (60000 / bpm) * 4;
      barDuration = (60000 / bpm) * 4;
      break;
    case 1:
      delayTimes[0][1] = (60000 / bpm) * 8;
      barDuration = (60000 / bpm) * 4;
      break;
    case 2:
      delayTimes[0][1] = (60000 / bpm) * 8;
      barDuration = (60000 / bpm) * 6;
      break;
    case 3:
      delayTimes[0][1] = (60000 / bpm) * 8;
      barDuration = (60000 / bpm) * 8;
      break;
    case 4:
      delayTimes[0][1] = (60000 / bpm) * 16;
      barDuration = (60000 / bpm) * 6;
      break;
    case 5:
      delayTimes[0][1] = (60000 / bpm) * 16;
      barDuration = (60000 / bpm) * 12;
      break;
  }
}

function createPreDelayChart() {
  // if (getNumberValue("bpm")) return;
  setPreDelayAndDecay();
  createTable(
    preDelayTimes,
    [
      "Pre-delay \n (in ms)",
      "Decay time \n (in ms)",
      "Total delay/reverb time \n (in ms)",
    ],
    true
  );
}

function setPreDelayAndDecay() {
  switch (getNumberValue("preDelay")) {
    case 0:
      preDelayTimes[0][0] = delayTimes[6][1];
      break;
    case 1:
      preDelayTimes[0][0] = delayTimes[6][2];
      break;
    case 2:
      preDelayTimes[0][0] = delayTimes[6][3];
      break;
    case 3:
      preDelayTimes[0][0] = delayTimes[7][1];
      break;
    case 4:
      preDelayTimes[0][0] = delayTimes[7][2];
      break;
    case 5:
      preDelayTimes[0][0] = delayTimes[7][3];
      break;
    case 6:
      preDelayTimes[0][0] = delayTimes[8][1];
      break;
    case 7:
      preDelayTimes[0][0] = delayTimes[8][2];
      break;
    case 8:
      preDelayTimes[0][0] = delayTimes[8][3];
      break;
    case 9:
      preDelayTimes[0][0] = delayTimes[9][1];
      break;
    case 10:
      preDelayTimes[0][0] = delayTimes[9][2];
      break;
    case 11:
      preDelayTimes[0][0] = delayTimes[9][3];
      break;
    case 12:
      preDelayTimes[0][0] = delayTimes[10][1];
      break;
    case 13:
      preDelayTimes[0][0] = delayTimes[10][2];
      break;
    case 14:
      preDelayTimes[0][0] = delayTimes[10][3];
      break;
  }

  switch (getNumberValue("totalLength")) {
    case 0:
      preDelayTimes[0][2] = delayTimes[0][1];
      break;
    case 1:
      preDelayTimes[0][2] = delayTimes[0][2];
      break;
    case 2:
      preDelayTimes[0][2] = delayTimes[0][3];
      break;
    case 3:
      preDelayTimes[0][2] = delayTimes[1][1];
      break;
    case 4:
      preDelayTimes[0][2] = delayTimes[1][2];
      break;
    case 5:
      preDelayTimes[0][2] = delayTimes[1][3];
      break;
    case 6:
      preDelayTimes[0][2] = delayTimes[2][1];
      break;
    case 7:
      preDelayTimes[0][2] = delayTimes[2][2];
      break;
    case 8:
      preDelayTimes[0][2] = delayTimes[2][3];
      break;
    case 9:
      preDelayTimes[0][2] = delayTimes[3][1];
      break;
    case 10:
      preDelayTimes[0][2] = delayTimes[3][2];
      break;
    case 11:
      preDelayTimes[0][2] = delayTimes[3][3];
      break;
    case 12:
      preDelayTimes[0][2] = delayTimes[4][1];
      break;
    case 13:
      preDelayTimes[0][2] = delayTimes[4][2];
      break;
    case 14:
      preDelayTimes[0][2] = delayTimes[4][3];
      break;
    case 15:
      preDelayTimes[0][2] = delayTimes[5][1];
      break;
    case 16:
      preDelayTimes[0][2] = delayTimes[5][2];
      break;
    case 17:
      preDelayTimes[0][2] = delayTimes[5][3];
      break;
  }
  preDelayTimes[0][1] = (preDelayTimes[0][2] - preDelayTimes[0][0]).toFixed(2);
}

function createTable(tableData, tableHeadings, preDelay) {
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
  //   document.body.appendChild(table);
  // document.getElementById("form").append(table);
  if (preDelay == false) {
    output.textContent = "";
  }
  output.append(table);
}

function getNumberValue(id) {
  let note = document.getElementById(id);
  let noteNumberValue = note.value;
  return Number(noteNumberValue);
}
