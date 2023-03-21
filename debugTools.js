module.exports.stopWatch = () => {
    let startDate;
    let elapsedSeconds;
    let stopDate;
    const start = () => {
        startDate = new Date();
        console.log('Start at: ', startDate);
    }
    const stop = () => {
        stopDate = new Date();
        console.log('Stop at: ', stopDate);
    }

    const getElapsedSeconds = () => {
        elapsedSeconds = (stopDate - startDate) / 1000;
        console.log('Elapsed seconds: ', elapsedSeconds);
        return elapsedSeconds;
    }
    return { start, stop, getElapsedSeconds };
}