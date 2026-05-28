// Challenge 1 — Student Attendance System

// Create an array of students.

// Features:

// add student
// remove last student
// remove first student
// insert student in middle
// check if student exists
// print all students in one line

const students = ["Rohit", "Akrit", "Anjali", "Aditi", "Ranjiit"];

function addStudent(name) {
  students.push(name);
}
addStudent("Rakesh");

function removeLastStudent() {
  students.pop();
}

function removeFirstStudent() {
  students.shift();
}

function insertStudentAtMiddle(name) {
  const middleIndex = Math.floor(students.length / 2);
  students.splice(middleIndex, 0, name);
}
insertStudentAtMiddle("Rohit");
// console.log(students);

function isStudentExist(name) {
  return students.includes(name);
}

// console.log(isStudentExist("roul"));

function getStudentList() {
  return students.join(", ");
}

// console.log(getStudentList());

// Challenge 2 — YouTube Playlist Manager

// Operations:

// add song
// remove specific song
// create copied playlist
// get last 3 songs
// merge playlist names into one string

const playlist = [
  "Tum hi ho",
  "Ye sham mastani",
  "Kal ho na ho",
  "Pahla nasha",
  "Dil diyan gallan",
  "Kesariya",
  "Chhaiya chhaiya",
  "Ratan lambiyan",
  "Pasoori",
  "Jab tk jahan",
];

function addSong(playlist, name) {
  // 1. Prevent Duplicate Songs
  if (!playlist.includes(name)) {
    playlist.push(name);
  }
  return `Song already exists`;
}

console.log(addSong(playlist, "Ratan lambiyan"));
console.log(playlist);

function removeSong(playlist, name) {
  const lowerCasePlaylist = playlist.map((song) => song.toLowerCase());
  const songIndex = lowerCasePlaylist.indexOf(name.toLowerCase());
  if (songIndex !== -1) {
    playlist.splice(songIndex, 1);
    return `Song: ${name} removed successfully`;
  }
  return `Song not found`;
}

// console.log(playlist);
removeSong(playlist, "kaise hua");
// console.log(removeSong(playlist,"kai hua"));
// console.log(playlist);

// create copied playlist
const copiedPlaylist = [...playlist];
// console.log(copiedPlaylist);

// get last 3 songs
function lastThreeSong(playlist) {
  return playlist.slice(-3);
}

console.log(lastThreeSong(playlist));

// merge playlist names into one string
const songList = playlist.join(" ,");
// console.log(songList);

// 2. Shuffle Playlist
function shuffle(playlist) {
    playlist.sort(() => Math.random() - 0.5);
}
console.log(playlist);
shuffle(playlist);
console.log(playlist);

// 3. Search Songs
const searchSong = (playlist,search) => {
    return playlist.filter((song) => song.toLowerCase().includes(search.toLowerCase()));
}

console.log(searchSong(playlist, "Ho"));