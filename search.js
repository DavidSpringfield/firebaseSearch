const db = require('./admin').firestore();

module.exports.searchAdvisors = async (searchKey) => {
    let filteredResults = [];
    searchKey = searchKey.trim().toLowerCase();
    if (!searchKey)
        return [];
    const snapshot = await db.collection('users').where('advisor', '!=', null).get();
    const results = snapshot.docs.map(doc => doc.data());
    let searchKeys = searchKey.split(' ');
    searchKeys.forEach(key => {
        if (key.length < 2) return;
        const localResults = results.filter(data =>
            data?.firstName?.toLowerCase()?.includes(key) ||
            data?.lastName?.toLowerCase()?.includes(key) ||
            data?.advisor?.bio?.toLowerCase()?.includes(key) ||
            data?.advisor?.headline?.toLowerCase()?.includes(key));
        localResults.forEach(r => filteredResults.push(r));
        filteredResults = [...new Set(filteredResults)];
    });
    return filteredResults;
};
