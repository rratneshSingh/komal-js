// setTimeout( function () {
//     console.log( 'one ');
//     setTimeout( function() {
//         console.log( 'two ');
//         setTimeout( function() {
//             console.log( 'two ');
//             setTimeout( function() {
//                 console.log( 'two ');
//                 setTimeout( function() {
//                     console.log( 'two ');
//                     setTimeout( function() {
//                         console.log( 'two ');
//                         setTimeout( function() {
//                             console.log( 'two ');
//                             setTimeout( function() {
//                                 console.log( 'two ');
//                                 setTimeout( function() {
//                                     console.log( 'two ');
//                                 }, 3000);
//                             }, 3000);
//                         }, 3000);
//                     }, 3000);
//                 }, 3000);
//             }, 3000);
//         }, 3000);
//     }, 3000);
// }, 3000);

var data = {
    person: {
        name: 'Ram',
        city: 'Prayagraj'
    },
    city: [ 'Kanpur', 'Lucknow', 'Varanasi'],
    population: [
        { 
            city: 'Kanpur',
            count: 456789
        },
        { 
            city: 'Lucknow',
            count: 454589
        },
        { 
            city: 'Varanasi',
            count: 478789
        }
    ]
}

function createPromise( apiType ) {
    return new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            if ( apiType === 'person' ) {
                resolve( data.person );
            } else if ( apiType === 'city' ) {
                resolve( data.city );
            } else if ( apiType === 'population') {
                resolve( data.population );
            } else {
                reject('Error');
            }
        }, 5000);
    });
}

// var personApi = createPromise( 'person' );
// personApi
// .then( ( data ) => {
//     console.log( data );
//     return createPromise('city');
// }).then( ( data ) => {
//     console.log( data );
//     return createPromise('population');
// }).then( ( data ) => {
//     console.log( data );
//     return createPromise('hjshasj');
// }).catch( ( data ) => {
//     console.log( data );
// });
async function demo() {
    var personApi = createPromise('person');
    var data  = await personApi;
    console.log( data );
}
 demo();