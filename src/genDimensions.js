export default (N) => {
    const res = [];
    for (let i = 0; i < N; i++) {
        const subArray = [];
        for (let j = 0; j < N; j++) {
            subArray.push(Math.round(Math.random()));
        }
        res.push(subArray);
    }
    return res;
}