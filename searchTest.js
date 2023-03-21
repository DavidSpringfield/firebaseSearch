const search = require('./search');
const debugTools = require('./debugTools');


async function makeSearch(searchTerm) {
    const stopwatch = debugTools.stopWatch();
    stopwatch.start();
    const results = await search.searchAdvisors(searchTerm);
    console.log('COUNT: ', results.length);
    if (results.length == 0)
        console.log('No results found');
    stopwatch.stop();
    stopwatch.getElapsedSeconds();
    return results;
}

function printResults(results) {
    results.forEach(r => {
        console.log(r.firstName + ' ' + r.lastName);
        // console.log(r.lastName);
        // console.log(r.advisor.headline);
        // console.log(r.advisor.bio);
        // console.log('---------------------------');
    });
}

makeSearch('ernest devops').then((results) => {
    printResults(results);
    console.log('search completed');

});
