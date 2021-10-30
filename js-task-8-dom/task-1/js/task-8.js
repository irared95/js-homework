const playList = [{
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song: "BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
    }
];

function renderItemSongs(playItem) {
    const ul = document.querySelector('.songs__list--js');
    const author = playItem.author;
    const song = playItem.song;
    const listItem = document.createElement('li');
    listItem.innerText = `author: ${author}, song: ${song}`;
    listItem.style.color = 'red';
    ul.append(listItem)
}

//функция, создали цикл он прошелся по масииву 
function renderListSongs(playList) {
    playList.forEach(playItem => {
        renderItemSongs(playItem);
    });
}
renderListSongs(playList)