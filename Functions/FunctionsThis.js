
// method -> obj
// fucntion -> global (window, global)

const video = {
    title: 'Serenity',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this, tag);

        }, this);
    }

    // play (){
    //     console.log(this);
    
};

// function Video(title) {
//     this.title = title;
//     console.log(this);
// }

// const v = new Video('Serenity');

video.showTags();