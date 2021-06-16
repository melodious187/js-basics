
const video = {
    title: 'Serenity',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(tag => {
            console.log(this.title, tag);

        });
    }
};

video.showTags();

// function playVideo(a, b) {
//     console.log(this);
// }


// playVideo.call({name: 'Andrew'}, 1, 2);
// playVideo.apply({name: 'Andrew'}, [1, 2]);
// const fn = playVideo.bind({name: 'Andrew'}) ();

// playVideo();



//  Dont use this approach
// const video = {
//     title: 'Serenity',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         const self = this;
//         this.tags.forEach(function(tag) {
//             console.log(self, tag);

//         }, );
//     }
// };

// video.showTags();
