
// let post = {
//     title: 'Title',
//     body: 'body',
//     author: 'Author',
//     views: 1840,
//     comments: [
//         { author: 'Auth1', body: 'Body1'},
//         { author: 'Auth2', body: 'Body2'}
//     ],
//     isLive: true
// };

let post = new PrePost('BlogPost Title', 'BlogPost Body', 'Andrew');
console.log(post);

// Constructor Function
function PrePost(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

// console.log(post);

// console.log(PrePost);


