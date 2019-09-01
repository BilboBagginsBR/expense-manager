import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };

  firebase.initializeApp(config);

  const database = firebase.database();

  export { firebase, database as default };




















// //   database.ref('expenses').push({
// //       description: 'expenses three',
// //       note: 'third expenses',
// //       amount: 195,
// //       createdAt: 0
// //   });

//   database.ref('expenses').on('child_removed', (snapshot) => {
//       console.log(snapshot.key, snapshot.val())
//   });

//   database.ref('expenses').on('child_changed', (snapshot) => {
//       console.log(snapshot.key, snapshot.val())
//   });

//   database.ref('expenses').on('child_added', (snapshot) => {
//       console.log(snapshot.key, snapshot.val())
//   })

// //   const callback = (snapshot) => {
// //     const expenses = [];

// //     snapshot.forEach((child) => {
// //         expenses.push({
// //             id: child.key,
// //             ...child.val()
// //         })
// //     })
// //     console.log(expenses)
// //   }

// //   database.ref('expenses').on('value', callback)

// //   database.ref('expenses')
// //                         .once('value')
// //                         .then((snapshot) => {
// //                             const expenses = [];

// //                             snapshot.forEach((child) => {
// //                                 expenses.push({
// //                                     id: child.key,
// //                                     ...child.val()
// //                                 })
// //                             })
// //                             console.log(expenses)
// //                         })
