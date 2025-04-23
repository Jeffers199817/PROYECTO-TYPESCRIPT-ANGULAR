/* interface AudioPlayer{
    audioValume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}


const audioPlayer: AudioPlayer = {
    audioValume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "erisk",
        year: 1983 
    }
}

const{audioValume:audio, songDuration:song, song:songAuthor , details} = audioPlayer;

console.log('audio: ' + audio);
console.log('song: ' + song);
console.log('song author: ' + songAuthor);

const { author } = details;

console.log('Author: ' + author); */


const [,,trunk='not found']: string[] = ['Goku', 'Vegeta'];

console.log('Personaje 3:', trunk);

export { };
