import { initializeApp, deleteApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc, getDocs, query, where, and, or } from "firebase/firestore";
import configs from "../../dmapp/src/JSON/configurations.json" assert {type: 'json'};

// initial firebase app
var app = initializeApp(configs[6])
var db, JSSubjectRef, SSSubjectRef;

const selectElt = document.querySelector('select#classroom');
selectElt.addEventListener('change', (e) => {
    deleteApp(app);
    let optIndex = e.target.selectedIndex - 1;
    app = initializeApp(configs[optIndex]);
    // init services
    db = getFirestore()
    // collection refs
})



    const classroom = document.querySelector('#classroom');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const notice = document.querySelector('dialog#notice');
    const loginForm = document.forms.login;
    
    
    
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            e.submitter.disable = true;
            e.submitter.style.cursor = 'not-allowed';
            const classroomCollectionRef = collection(db, 'students');
            const q = query(classroomCollectionRef, and(or(where("email", "==", email.value), where("admission_no", "==", email.value)), where("password", "==", password.value)))
            const querySnapshot = await getDocs(q);
            // console.log(querySnapshot);
            if(querySnapshot.empty) {
                notice.querySelector('output').textContent = "Wrong login details!";
                notice.classList.add('active');
                e.submitter.disabled = false;
                e.submitter.style.cursor = 'pointer';
            } else {
                querySnapshot.docs.forEach(async doc => {
                    let photo_src = doc.data().photo_src;
                    let offered = doc.data().offered;
                    let snapshot = {
                        'id': doc.id,
                        'first_name': doc.data().first_name,
                        'last_name': doc.data().last_name,
                        'other_name': doc.data().other_name,
                        'gender': doc.data().gender,
                        'admission_no': doc.data().admission_no,
                        'arm': doc.data().arm,
                        'class': classroom.value,
                        'em': doc.data().email || doc.data().admission_no,
                        'pwd': doc.data().password,
                        photo_src,
                        offered,
                    }
                        sessionStorage.setItem('snapshot', JSON.stringify(snapshot));
                        return location.href = '../../dist/home.html';
                });
            }
        })



    document.getElementById('button').addEventListener('click', function(){
        notice.classList.remove('active');
    })

   