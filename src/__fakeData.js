let data = [];
data.push({ _id: setId(), name: 'cat-' + setId(), imageUrl: 'http://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg', description: 'kitty' + setId(), votes: setId(), authorId: 0 });
data.push({ _id: setId(), name: 'cat-' + setId(), imageUrl: 'http://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg', description: 'kitty' + setId(), votes: setId(), authorId: 0 });
data.push({ _id: setId(), name: 'cat-' + setId(), imageUrl: 'http://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg', description: 'kitty' + setId(), votes: setId(), authorId: 0 });
data.push({ _id: setId(), name: 'cat-' + setId(), imageUrl: 'http://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg', description: 'kitty' + setId(), votes: setId(), authorId: 0 });
data.push({ _id: setId(), name: 'cat-' + setId(), imageUrl: 'http://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg', description: 'kitty' + setId(), votes: setId(), authorId: 0 });
data.push({ _id: setId(), name: 'cat-' + setId(), imageUrl: 'http://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg', description: 'kitty' + setId(), votes: setId(), authorId: 0 });
data.push({ _id: setId(), name: 'cat-' + setId(), imageUrl: 'http://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg', description: 'kitty' + setId(), votes: setId(), authorId: 0 });
data.push({ _id: setId(), name: 'cat-' + setId(), imageUrl: 'http://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg', description: 'kitty' + setId(), votes: setId(), authorId: 0 });
data.push({ _id: setId(), name: 'cat-' + setId(), imageUrl: 'http://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg', description: 'kitty' + setId(), votes: setId(), authorId: 0 });
data.push({ _id: setId(), name: 'cat-' + setId(), imageUrl: 'http://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg', description: 'kitty' + setId(), votes: setId(), authorId: 0 });
data.push({ _id: setId(), name: 'cat-' + setId(), imageUrl: 'http://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg', description: 'kitty' + setId(), votes: setId(), authorId: 0 });
data.push({ _id: setId(), name: 'cat-' + setId(), imageUrl: 'http://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg', description: 'kitty' + setId(), votes: setId(), authorId: 0 });
data.push({ _id: setId(), name: 'cat-' + setId(), imageUrl: 'http://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg', description: 'kitty' + setId(), votes: setId(), authorId: 0 });
data.push({ _id: setId(), name: 'cat-' + setId(), imageUrl: 'http://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg', description: 'kitty' + setId(), votes: setId(), authorId: 0 });

function setId() {
    return data.length + 1;
}

function sorter(a,b){
    return parseInt(b.votes, 10) - parseInt(a.votes, 10)
}

module.exports = {
    get: () => {
        return new Promise(resolve => {
            resolve(data);
        })
    },

    getTopTen: () => {
        let cats = data
        console.log(data)
        let sortedCats = cats.sort(sorter)
        console.log(data)
        let topTenCats = sortedCats.splice(0,10)
        console.log(data)

        return new Promise(resolve => {
            resolve(topTenCats);
        })

    }
};