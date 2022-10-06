const resolvedPromise = () =>
    new Promise((myResolve, myReject) => {
        setTimeout(myResolve({ message: "delayed success!" }), 500);
    });

const rejectPromise = () =>
    new Promise((myResolve, myReject) => {
        setTimeout(myReject({ error: "delayed exception!" }), 500);
    });

resolvedPromise().then((msg) => console.log(msg));
rejectPromise().catch((msg) => console.error(msg));