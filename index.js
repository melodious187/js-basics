let pic;
picture = isLandscape(800, 600);
console.log("The picture is: ", pic);

function isLandscape(width, height) {
    if (width > height ) pic = 'Landscape';
    else pic = 'Portrait';
    return pic;
}

