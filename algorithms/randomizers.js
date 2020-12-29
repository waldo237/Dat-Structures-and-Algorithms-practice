

function randomize() {
    for (let i = 0; i < 100; i++) {
        // console.log('from 1 to 99', Math.floor(Math.random() * 100));
        // console.log('5 to 30 =>', Math.round(Math.random()*25)+5);
        console.log('-100 to -90 =>', Math.ceil(Math.random()*10)-100);
    }
}

randomize();