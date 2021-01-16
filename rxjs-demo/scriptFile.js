const clicks = Rx.Observable.fromEvent(document, 'click')
    .throttleTime(1000)
    .map((data) => {
        return data.clientY;
    })
    .subscribe((yCoordinate) => {
        console.log('Y-coordinate: ' + yCoordinate)
    });

let observer = {
    next: function (value) {
        console.log(value);
    },
    error: function (value) {
        console.error('Error: ' + value);
    },
    complete: function (value) {
        console.log('Completed.');
    }
}

const observable = new Rx.Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
    }, 1000);
});

console.log('just before subscribe');
observable.subscribe({
    next(x) {
        console.log('got value ' + x);
    },
    error(err) {
        console.error('something wrong occurred: ' + err);
    },
    complete() {
        console.log('done');
    }
});
console.log('just after subscribe');

// // An observable does not have to be asynchronous
// Rx.Observable.create((obs) => {
//     obs.next('A value');
//     //obs.error('Error');
//     //obs.complete('Complete');
//     obs.next('A second value');
// }).subscribe(observer);

// // An asynchronous observable
// let subscription = Rx.Observable.create((obs) => {
//     setTimeout(() => {
//         obs.next('Async observable at work.');
//         obs.complete();
//     }, 1000);
// }).subscribe(observer);

// setTimeout(() => {
//     console.log('Unbsubscribing.');
//     subscription.unsubscribe();
//     clicks.unsubscribe();
// }, 3000);