// *********************************************
// Calculator constants
// *********************************************

const NUM_NOTES = 5; // How many notes the calculator allows.
const NOTE_PREFIX = "note"; // What the chord notes' variables start with.

// the main fucntion
function chordFinder() {
  let output = document.getElementById("result");
  var user_notes = [];
  for (var i = 1; i <= NUM_NOTES; i++) {
    user_notes.push(getNumberValue(NOTE_PREFIX + i));
  }
  var user_root_note = getNumberValue("root_note");
  user_notes.push(user_root_note);
  user_notes = user_notes.filter((x) => x > -1); // remove "None"s
  user_notes = to_set(user_notes); // remove duplicates
  user_notes.sort((a, b) => a - b); // sort

  // Less than 3 notes is not enough to make a chord. display the user a meanigful message.
  if (user_notes.length < 3) {
    document.getElementById("result").innerHTML =
      "A chord consists of three unique notes or more.  Try adding more notes!";
  }

  // Iterate over the database of chords and find which chords have a degree of similarity with the user's chord.
  var match_names = [];
  var match_qualities = [];
  var match_semitones = [];
  for (var i = 0; i < CHORD_NAMES.length; i++) {
    var overlap = find_chords(user_notes, CHORD_SEMITONES[i]);
    // Must have at least some correlation (i.e. >0 overlap), and if the user's root is >-1, it must match the chord's.
    if (overlap > 0) {
      if (user_root_note > -1) {
        if (user_root_note === CHORD_ROOT_NOTES[i]) {
          match_names.push(CHORD_NAMES[i]);
          match_qualities.push(overlap);
          match_semitones.push(CHORD_SEMITONES[i]);
        }
      } else {
        match_names.push(CHORD_NAMES[i]);
        match_qualities.push(overlap);
        match_semitones.push(CHORD_SEMITONES[i]);
      }
    }
  }

  // If there are no matches, display the result and quit.
  if (match_names.length === 0) {
    output.innerHTML = "No chords that match.";
    return;
  }

  // Sort the chords based on the degree of similarity with the user's chord.
  match_names = match_names.sorted_with(match_qualities).reversed();
  match_semitones = match_semitones.sorted_with(match_qualities).reversed();
  match_qualities.sort((a, b) => a - b).reverse();

  // DEBUG
  // var matches = [];
  // for (var i = 0 ; i < match_names.length ; i++) {
  //     matches.push(`${match_names[i]} [${match_semitones[i].join(' ')}] (${match_qualities[i]})`);
  // }
  // ctx.addHtml(`Matches:<br>* ${matches.join('<br>* ')}`, anchor_output);

  // Split the matches into those tied for first place, and those with lower similarities.
  var best_matches = []; // Those tied for first place
  var other_matches = []; // Lower similarity matches
  var cutoff = 0; // The index where the first lower-quality match occurs.
  do {
    best_matches.push(match_names[cutoff]);
    cutoff++;
  } while (match_qualities[cutoff] === match_qualities[0]);
  for (var i = cutoff; i < match_names.length; i++) {
    other_matches.push(match_names[i]);
  }

  // Depending on how many matches are tied for first, shape the output.
  if (best_matches.length === 1) {
    output.innerHTML = `Your chord is likely <b>${best_matches[0]}</b>.`;
  } else {
    output.innerHTML = `Your chord is likely one of: <ul>${best_matches
      .map((x) => "<li>" + x + "</li>")
      .join("")}</ul>`;
  }

  // Are there other possible chords that weren't tied for first?
  if (other_matches.length > 1) {
    output.innerHTML = `Your chord could also be one of: <ul>${other_matches
      .map((x) => "<li>" + x + "</li>")
      .join("")}</ul>`;
  } else if (other_matches.length === 1) {
    output.innerHTML = `Your chord could also be <b>${other_matches[0]}</b>.`;
  }
}

// Find how many notes in `user_chord` are in with `known_chord`.  Normalises by the `known_chord`'s length to obtain a value between 0 and 1.  If a user note is not in the known chord, return 0.
function find_chords(user_chord, known_chord) {
  // Remove duplicates and sort.
  user_chord = numeric_sort(to_set(user_chord));
  known_chord = numeric_sort(to_set(known_chord));

  var notes_overlap = 0;
  for (var i = 0; i < user_chord.length; i++) {
    if (known_chord.includes(user_chord[i])) notes_overlap++;
    else return 0;
  }
  return notes_overlap / known_chord.length;
}

// *********************************************
// Helper functions
// *********************************************

// Extend the array prototype for sorting by another array (`keyarr`).
Array.prototype.sorted_with = function (keyarr) {
  var copy_of_me = this.map((x) => x);
  var copy_of_keyarr = keyarr.map((x) => x);
  if (keyarr.length !== this.length) {
    throw Error("Cannot sort by array of different length.");
  }
  var temp;
  for (var outer = 0; outer < this.length; outer++) {
    for (var i = 0; i < this.length - 1; i++) {
      if (copy_of_keyarr[i] > copy_of_keyarr[i + 1]) {
        temp = copy_of_me[i];
        copy_of_me[i] = copy_of_me[i + 1];
        copy_of_me[i + 1] = temp;

        temp = copy_of_keyarr[i];
        copy_of_keyarr[i] = copy_of_keyarr[i + 1];
        copy_of_keyarr[i + 1] = temp;
      }
    }
  }
  return copy_of_me;
};

// Extend the array prototype for copy-reversing.
Array.prototype.reversed = function () {
  var copy_of_me = this.map((x) => x);
  copy_of_me.reverse();
  return copy_of_me;
};

// Is A a subset of B?
function is_subset_of(list_A, list_B) {
  return list_B.every((val) => list_A.includes(val));
}

// Is A a total match with B?
function is_exact_match(list_A, list_B) {
  return (
    list_A.length === list_B.length &&
    list_A.every(function (value, index) {
      return value === list_B[index];
    })
  );
}

// Remove all duplicates from the list.
function to_set(list) {
  var return_list = [];
  list.forEach(function (item) {
    if (!return_list.includes(item)) {
      return_list.push(item);
    }
  });
  return return_list;
}

// Sort numerically.
function numeric_sort(list) {
  list = list.map(function (x) {
    return x;
  });
  list.sort(function (a, b) {
    return a - b;
  });
  return list;
}

// *********************************************
// Data
// *********************************************

const CHORD_NAMES = [
  "Cmaj",
  "Cmin",
  "Caug",
  "Cdim",
  "C<sup>sus2</sup>",
  "C<sup>sus4</sup>",
  "C<sup>7</sup>",
  "Cmaj<sup>7</sup>",
  "Cmin<sup>7</sup>",
  "Cdim<sup>7</sup>",
  "Cmin<sup>7♭5</sup>",
  "C<sup>6</sup>",
  "Cmin<sup>6</sup>",
  "C<sup>9</sup>",
  "Cmaj<sup>9</sup>",
  "C<sup>7♭9</sup>",
  "Cmin<sup>9</sup>",
  "C♯maj ≈ D♭maj",
  "C♯min ≈ D♭min",
  "C♯aug ≈ D♭aug",
  "C♯dim ≈ D♭dim",
  "C♯<sup>sus2</sup> ≈ D♭<sup>sus2</sup>",
  "C♯<sup>sus4</sup> ≈ D♭<sup>sus4</sup>",
  "C♯<sup>7</sup> ≈ D♭<sup>7</sup>",
  "C♯maj<sup>7</sup> ≈ D♭maj<sup>7</sup>",
  "C♯min<sup>7</sup> ≈ D♭min<sup>7</sup>",
  "C♯dim<sup>7</sup> ≈ D♭dim<sup>7</sup>",
  "C♯min<sup>7♭5</sup> ≈ D♭min<sup>7♭5</sup>",
  "C♯<sup>6</sup> ≈ D♭<sup>6</sup>",
  "C♯min<sup>6</sup> ≈ D♭min<sup>6</sup>",
  "C♯<sup>9</sup> ≈ D♭<sup>9</sup>",
  "C♯maj<sup>9</sup> ≈ D♭maj<sup>9</sup>",
  "C♯<sup>7♭9</sup> ≈ D♭<sup>7♭9</sup>",
  "C♯min<sup>9</sup> ≈ D♭min<sup>9</sup>",
  "Dmaj",
  "Dmin",
  "Daug",
  "Ddim",
  "D<sup>sus2</sup>",
  "D<sup>sus4</sup>",
  "D<sup>7</sup>",
  "Dmaj<sup>7</sup>",
  "Dmin<sup>7</sup>",
  "Ddim<sup>7</sup>",
  "Dmin<sup>7♭5</sup>",
  "D<sup>6</sup>",
  "Dmin<sup>6</sup>",
  "D<sup>9</sup>",
  "Dmaj<sup>9</sup>",
  "D<sup>7♭9</sup>",
  "Dmin<sup>9</sup>",
  "D♯maj ≈ E♭maj",
  "D♯min ≈ E♭min",
  "D♯aug ≈ E♭aug",
  "D♯dim ≈ E♭dim",
  "D♯<sup>sus2</sup> ≈ E♭<sup>sus2</sup>",
  "D♯<sup>sus4</sup> ≈ E♭<sup>sus4</sup>",
  "D♯<sup>7</sup> ≈ E♭<sup>7</sup>",
  "D♯maj<sup>7</sup> ≈ E♭maj<sup>7</sup>",
  "D♯min<sup>7</sup> ≈ E♭min<sup>7</sup>",
  "D♯dim<sup>7</sup> ≈ E♭dim<sup>7</sup>",
  "D♯min<sup>7♭5</sup> ≈ E♭min<sup>7♭5</sup>",
  "D♯<sup>6</sup> ≈ E♭<sup>6</sup>",
  "D♯min<sup>6</sup> ≈ E♭min<sup>6</sup>",
  "D♯<sup>9</sup> ≈ E♭<sup>9</sup>",
  "D♯maj<sup>9</sup> ≈ E♭maj<sup>9</sup>",
  "D♯<sup>7♭9</sup> ≈ E♭<sup>7♭9</sup>",
  "D♯min<sup>9</sup> ≈ E♭min<sup>9</sup>",
  "Emaj",
  "Emin",
  "Eaug",
  "Edim",
  "E<sup>sus2</sup>",
  "E<sup>sus4</sup>",
  "E<sup>7</sup>",
  "Emaj<sup>7</sup>",
  "Emin<sup>7</sup>",
  "Edim<sup>7</sup>",
  "Emin<sup>7♭5</sup>",
  "E<sup>6</sup>",
  "Emin<sup>6</sup>",
  "E<sup>9</sup>",
  "Emaj<sup>9</sup>",
  "E<sup>7♭9</sup>",
  "Emin<sup>9</sup>",
  "Fmaj",
  "Fmin",
  "Faug",
  "Fdim",
  "F<sup>sus2</sup>",
  "F<sup>sus4</sup>",
  "F<sup>7</sup>",
  "Fmaj<sup>7</sup>",
  "Fmin<sup>7</sup>",
  "Fdim<sup>7</sup>",
  "Fmin<sup>7♭5</sup>",
  "F<sup>6</sup>",
  "Fmin<sup>6</sup>",
  "F<sup>9</sup>",
  "Fmaj<sup>9</sup>",
  "F<sup>7♭9</sup>",
  "Fmin<sup>9</sup>",
  "F♯maj ≈ G♭maj",
  "F♯min ≈ G♭min",
  "F♯aug ≈ G♭aug",
  "F♯dim ≈ G♭dim",
  "F♯<sup>sus2</sup> ≈ G♭<sup>sus2</sup>",
  "F♯<sup>sus4</sup> ≈ G♭<sup>sus4</sup>",
  "F♯<sup>7</sup> ≈ G♭<sup>7</sup>",
  "F♯maj<sup>7</sup> ≈ G♭maj<sup>7</sup>",
  "F♯min<sup>7</sup> ≈ G♭min<sup>7</sup>",
  "F♯dim<sup>7</sup> ≈ G♭dim<sup>7</sup>",
  "F♯min<sup>7♭5</sup> ≈ G♭min<sup>7♭5</sup>",
  "F♯<sup>6</sup> ≈ G♭<sup>6</sup>",
  "F♯min<sup>6</sup> ≈ G♭min<sup>6</sup>",
  "F♯<sup>9</sup> ≈ G♭<sup>9</sup>",
  "F♯maj<sup>9</sup> ≈ G♭maj<sup>9</sup>",
  "F♯<sup>7♭9</sup> ≈ G♭<sup>7♭9</sup>",
  "F♯min<sup>9</sup> ≈ G♭min<sup>9</sup>",
  "Gmaj",
  "Gmin",
  "Gaug",
  "Gdim",
  "G<sup>sus2</sup>",
  "G<sup>sus4</sup>",
  "G<sup>7</sup>",
  "Gmaj<sup>7</sup>",
  "Gmin<sup>7</sup>",
  "Gdim<sup>7</sup>",
  "Gmin<sup>7♭5</sup>",
  "G<sup>6</sup>",
  "Gmin<sup>6</sup>",
  "G<sup>9</sup>",
  "Gmaj<sup>9</sup>",
  "G<sup>7♭9</sup>",
  "Gmin<sup>9</sup>",
  "G♯maj ≈ A♭maj",
  "G♯min ≈ A♭min",
  "G♯aug ≈ A♭aug",
  "G♯dim ≈ A♭dim",
  "G♯<sup>sus2</sup> ≈ A♭<sup>sus2</sup>",
  "G♯<sup>sus4</sup> ≈ A♭<sup>sus4</sup>",
  "G♯<sup>7</sup> ≈ A♭<sup>7</sup>",
  "G♯maj<sup>7</sup> ≈ A♭maj<sup>7</sup>",
  "G♯min<sup>7</sup> ≈ A♭min<sup>7</sup>",
  "G♯dim<sup>7</sup> ≈ A♭dim<sup>7</sup>",
  "G♯min<sup>7♭5</sup> ≈ A♭min<sup>7♭5</sup>",
  "G♯<sup>6</sup> ≈ A♭<sup>6</sup>",
  "G♯min<sup>6</sup> ≈ A♭min<sup>6</sup>",
  "G♯<sup>9</sup> ≈ A♭<sup>9</sup>",
  "G♯maj<sup>9</sup> ≈ A♭maj<sup>9</sup>",
  "G♯<sup>7♭9</sup> ≈ A♭<sup>7♭9</sup>",
  "G♯min<sup>9</sup> ≈ A♭min<sup>9</sup>",
  "Amaj",
  "Amin",
  "Aaug",
  "Adim",
  "A<sup>sus2</sup>",
  "A<sup>sus4</sup>",
  "A<sup>7</sup>",
  "Amaj<sup>7</sup>",
  "Amin<sup>7</sup>",
  "Adim<sup>7</sup>",
  "Amin<sup>7♭5</sup>",
  "A<sup>6</sup>",
  "Amin<sup>6</sup>",
  "A<sup>9</sup>",
  "Amaj<sup>9</sup>",
  "A<sup>7♭9</sup>",
  "Amin<sup>9</sup>",
  "A♯maj ≈ B♭maj",
  "A♯min ≈ B♭min",
  "A♯aug ≈ B♭aug",
  "A♯dim ≈ B♭dim",
  "A♯<sup>sus2</sup> ≈ B♭<sup>sus2</sup>",
  "A♯<sup>sus4</sup> ≈ B♭<sup>sus4</sup>",
  "A♯<sup>7</sup> ≈ B♭<sup>7</sup>",
  "A♯maj<sup>7</sup> ≈ B♭maj<sup>7</sup>",
  "A♯min<sup>7</sup> ≈ B♭min<sup>7</sup>",
  "A♯dim<sup>7</sup> ≈ B♭dim<sup>7</sup>",
  "A♯min<sup>7♭5</sup> ≈ B♭min<sup>7♭5</sup>",
  "A♯<sup>6</sup> ≈ B♭<sup>6</sup>",
  "A♯min<sup>6</sup> ≈ B♭min<sup>6</sup>",
  "A♯<sup>9</sup> ≈ B♭<sup>9</sup>",
  "A♯maj<sup>9</sup> ≈ B♭maj<sup>9</sup>",
  "A♯<sup>7♭9</sup> ≈ B♭<sup>7♭9</sup>",
  "A♯min<sup>9</sup> ≈ B♭min<sup>9</sup>",
  "Bmaj",
  "Bmin",
  "Baug",
  "Bdim",
  "B<sup>sus2</sup>",
  "B<sup>sus4</sup>",
  "B<sup>7</sup>",
  "Bmaj<sup>7</sup>",
  "Bmin<sup>7</sup>",
  "Bdim<sup>7</sup>",
  "Bmin<sup>7♭5</sup>",
  "B<sup>6</sup>",
  "Bmin<sup>6</sup>",
  "B<sup>9</sup>",
  "Bmaj<sup>9</sup>",
  "B<sup>7♭9</sup>",
  "Bmin<sup>9</sup>",
];

function getNumberValue(id) {
  let note = document.getElementById(id);
  let noteNumberValue = note.value;
  return Number(noteNumberValue);
}
const CHORD_SEMITONES = [
  [0, 4, 7],
  [0, 3, 7],
  [0, 4, 8],
  [0, 3, 6],
  [0, 2, 7],
  [0, 5, 7],
  [0, 4, 7, 10],
  [0, 4, 7, 11],
  [0, 3, 7, 10],
  [0, 3, 6, 9],
  [0, 3, 6, 10],
  [0, 4, 7, 9],
  [0, 3, 7, 9],
  [0, 2, 4, 7, 10],
  [0, 2, 4, 7, 11],
  [0, 1, 4, 7, 10],
  [0, 2, 3, 7, 10],
  [1, 5, 8],
  [1, 4, 8],
  [1, 5, 9],
  [1, 4, 7],
  [1, 3, 8],
  [1, 6, 8],
  [1, 5, 8, 11],
  [0, 1, 5, 8],
  [1, 4, 8, 11],
  [1, 4, 7, 10],
  [1, 4, 7, 11],
  [1, 5, 8, 10],
  [1, 4, 8, 10],
  [1, 3, 5, 8, 11],
  [0, 1, 3, 5, 8],
  [1, 2, 5, 8, 11],
  [1, 3, 4, 8, 11],
  [2, 6, 9],
  [2, 5, 9],
  [2, 6, 10],
  [2, 5, 8],
  [2, 4, 9],
  [2, 7, 9],
  [0, 2, 6, 9],
  [1, 2, 6, 9],
  [0, 2, 5, 9],
  [2, 5, 8, 11],
  [0, 2, 5, 8],
  [2, 6, 9, 11],
  [2, 5, 9, 11],
  [0, 2, 4, 6, 9],
  [1, 2, 4, 6, 9],
  [0, 2, 3, 6, 9],
  [0, 2, 4, 5, 9],
  [3, 7, 10],
  [3, 6, 10],
  [3, 7, 11],
  [3, 6, 9],
  [3, 5, 10],
  [3, 8, 10],
  [1, 3, 7, 10],
  [2, 3, 7, 10],
  [1, 3, 6, 10],
  [0, 3, 6, 9],
  [1, 3, 6, 9],
  [0, 3, 7, 10],
  [0, 3, 6, 10],
  [1, 3, 5, 7, 10],
  [2, 3, 5, 7, 10],
  [1, 3, 4, 7, 10],
  [1, 3, 5, 6, 10],
  [4, 8, 11],
  [4, 7, 11],
  [0, 4, 8],
  [4, 7, 10],
  [4, 6, 11],
  [4, 9, 11],
  [2, 4, 8, 11],
  [3, 4, 8, 11],
  [2, 4, 7, 11],
  [1, 4, 7, 10],
  [2, 4, 7, 10],
  [1, 4, 8, 11],
  [1, 4, 7, 11],
  [2, 4, 6, 8, 11],
  [3, 4, 6, 8, 11],
  [2, 4, 5, 8, 11],
  [2, 4, 6, 7, 11],
  [0, 5, 9],
  [0, 5, 8],
  [1, 5, 9],
  [5, 8, 11],
  [0, 5, 7],
  [0, 5, 10],
  [0, 3, 5, 9],
  [0, 4, 5, 9],
  [0, 3, 5, 8],
  [2, 5, 8, 11],
  [3, 5, 8, 11],
  [0, 2, 5, 9],
  [0, 2, 5, 8],
  [0, 3, 5, 7, 9],
  [0, 4, 5, 7, 9],
  [0, 3, 5, 6, 9],
  [0, 3, 5, 7, 8],
  [1, 6, 10],
  [1, 6, 9],
  [2, 6, 10],
  [0, 6, 9],
  [1, 6, 8],
  [1, 6, 11],
  [1, 4, 6, 10],
  [1, 5, 6, 10],
  [1, 4, 6, 9],
  [0, 3, 6, 9],
  [0, 4, 6, 9],
  [1, 3, 6, 10],
  [1, 3, 6, 9],
  [1, 4, 6, 8, 10],
  [1, 5, 6, 8, 10],
  [1, 4, 6, 7, 10],
  [1, 4, 6, 8, 9],
  [2, 7, 11],
  [2, 7, 10],
  [3, 7, 11],
  [1, 7, 10],
  [2, 7, 9],
  [0, 2, 7],
  [2, 5, 7, 11],
  [2, 6, 7, 11],
  [2, 5, 7, 10],
  [1, 4, 7, 10],
  [1, 5, 7, 10],
  [2, 4, 7, 11],
  [2, 4, 7, 10],
  [2, 5, 7, 9, 11],
  [2, 6, 7, 9, 11],
  [2, 5, 7, 8, 11],
  [2, 5, 7, 9, 10],
  [0, 3, 8],
  [3, 8, 11],
  [0, 4, 8],
  [2, 8, 11],
  [3, 8, 10],
  [1, 3, 8],
  [0, 3, 6, 8],
  [0, 3, 7, 8],
  [3, 6, 8, 11],
  [2, 5, 8, 11],
  [2, 6, 8, 11],
  [0, 3, 5, 8],
  [3, 5, 8, 11],
  [0, 3, 6, 8, 10],
  [0, 3, 7, 8, 10],
  [0, 3, 6, 8, 9],
  [3, 6, 8, 10, 11],
  [1, 4, 9],
  [0, 4, 9],
  [1, 5, 9],
  [0, 3, 9],
  [4, 9, 11],
  [2, 4, 9],
  [1, 4, 7, 9],
  [1, 4, 8, 9],
  [0, 4, 7, 9],
  [0, 3, 6, 9],
  [0, 3, 7, 9],
  [1, 4, 6, 9],
  [0, 4, 6, 9],
  [1, 4, 7, 9, 11],
  [1, 4, 8, 9, 11],
  [1, 4, 7, 9, 10],
  [0, 4, 7, 9, 11],
  [2, 5, 10],
  [1, 5, 10],
  [2, 6, 10],
  [1, 4, 10],
  [0, 5, 10],
  [3, 5, 10],
  [2, 5, 8, 10],
  [2, 5, 9, 10],
  [1, 5, 8, 10],
  [1, 4, 7, 10],
  [1, 4, 8, 10],
  [2, 5, 7, 10],
  [1, 5, 7, 10],
  [0, 2, 5, 8, 10],
  [0, 2, 5, 9, 10],
  [2, 5, 8, 10, 11],
  [0, 1, 5, 8, 10],
  [3, 6, 11],
  [2, 6, 11],
  [3, 7, 11],
  [2, 5, 11],
  [1, 6, 11],
  [4, 6, 11],
  [3, 6, 9, 11],
  [3, 6, 10, 11],
  [2, 6, 9, 11],
  [2, 5, 8, 11],
  [2, 5, 9, 11],
  [3, 6, 8, 11],
  [2, 6, 8, 11],
  [1, 3, 6, 9, 11],
  [1, 3, 6, 10, 11],
  [0, 3, 6, 9, 11],
  [1, 2, 6, 9, 11],
];

const CHORD_ROOT_NOTES = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3,
  3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
  4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6,
  6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
  7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9,
  9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10,
  10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,
  11, 11, 11, 11, 11, 11,
];
