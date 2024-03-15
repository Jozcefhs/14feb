import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, orderBy } from "firebase/firestore";
import configs from "./JSON/configurations.json";

var app = initializeApp(configs[5]);
var db = getFirestore();

const ss = JSON.parse(sessionStorage.getItem('snapshot'));
const offered = ss.offered;

let subCollection;
for (const key in offered) {
    if (offered[key] == 'Mathematics') {
        subCollection = key.toUpperCase();
        return;
    }
}
// console.log(subCollection);
let tests = {}, exes = {}, notes = {};
const main = document.querySelector('main');
const progress = document.querySelector('dialog#progress');
// getting tests
progress.querySelector('output').textContent = 'Searching Tests...';
progress.showModal();
const testRef = query(collection(db, "activities", "test/" + subCollection), orderBy('catNo'));
const testDocs = await getDocs(testRef);
if (testDocs.empty) {
    progress.insertAdjacentHTML('beforeend', `
        <output>No tests to be found.</output>
    `)
} else {
    let sb = btoa(subCollection);
    testDocs.docs.forEach(test => {
        tests = {...test.data()};
        main.insertAdjacentHTML('beforeend', `
            <div>
                <div>Test ${test.data().catNo}</div>
                <a href="./test.html?ct=${test.data().catNo}&uid=${ss.id}&sb=${sb}">GO</a>
            </div>
        `)
    });
    console.log(tests)
    // sessionStorage.setItem('payload', JSON.stringify(tests));
}

// getting exercises
progress.querySelector('output').textContent = 'Searching Exercises...';
const exeRef = collection(db, "activities", "exercises/" + subCollection);
const exeDocs = await getDocs(exeRef);
if (exeDocs.empty) {
    progress.insertAdjacentHTML('beforeend', `
        <output>No exercises to be found.</output>
    `)
} else {
    exeDocs.docs.forEach(exe => exes = {...exe.data()});
    // sessionStorage.setItem('exes', JSON.stringify(exes));
}

// getting notes
progress.querySelector('output').textContent = 'Searching notes...';
const noteRef = collection(db, "activities", "notes/" + subCollection);
const noteDocs = await getDocs(noteRef);
if (noteDocs.empty) {
    progress.insertAdjacentHTML('beforeend', `
        <output>No notes to be found.</output>
    `)
} else {
    noteDocs.docs.forEach(note => notes = {...note.data()});
    // sessionStorage.setItem('notes', JSON.stringify(notes));
}
