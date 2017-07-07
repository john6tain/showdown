let data = [];
data.push({ _id: setId(), name: 'cat-1', imageUrl: 'http://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg', description: 'kitty', votes: 0, authorId: 0 });
data.push({ _id: setId(), name: 'cat-2', imageUrl: 'https://www.bluecross.org.uk/sites/default/files/assets/images/124044lpr.jpg', description: 'kitty', votes: 0, authorId: 0 });

function setId() {
    return data.length + 1;
}

module.exports = {
    get: () => {
        return new Promise(resolve => {
            resolve(data);
        });
    }
};