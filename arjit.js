const music= new Audio('audio/1way.mp3');
// music.play();


//creating an array of music object
const songs=[
    {
        id: 1,
        songName:`On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster:"img/arjit/1.jpg.jpg"
        
    },
    {
        id: 2,
        songName:`Dil laga Liya <br>
        <div class="subtitle>Dil Hai Tumhara</div>`,
        poster:"img/img2.jpg"
    },
    {
        id: 3,
        songName:`Duniya<br>
        <div class="subtitle">Luka Chuppi</div>`,
        poster:"img/img3.jpg"
    },
    {
        id: 4,
        songName:`Lut Gaye <br>
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster:"img/img4.jpg"
    },
    {
        id: 5,
        songName:`Hamari Adhuri Kahani <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"img/img5.jpg"
    },
    {
        id: 6,
        songName:`Khariyat<br>
        <div class="subtitle">Chhichhore</div>`,
        poster:"img/img6.jpg"
    },
    {
        id: 7,
        songName:`Chura Ke Dil Mera <br>
        <div class="subtitle">Main Khiladi Tu Anari</div>`,
        poster:"img/img7.jpg"
    },
    {
        id: 8,
        songName:`Mera Dil Bhi Kitna Pagal <br>
        <div class="subtitle">Saajan</div>`,
        poster:"img/img8.jpg"
    },
    {
        id: 9,
        songName:`Hum Pyaar Hai Tumhare <br>
        <div class="subtitle">Haan Maine Bhi Pyaar Kiya Hai</div>`,
        poster:"img/img9.jpg"
    },
    {
        id: 10,
        songName:`Main Yahan Hoon <br>
        <div class="subtitle">Veer-Zara</div>`,
        poster:"img/img10.jpg"
    },
    {
        id: 11,
        songName:`Dil Toh Pagal Hai <br>
        <div class="subtitle">Udit Narayan</div>`,
        poster:"img/img11.jpg"
    },
    {
        id: 12,
        songName:`Main Nikla Gaddi Leke <br>
        <div class="subtitle">Gadar</div>`,
        poster:"img/img12.jpg"
    },
    {
        id: 13,
        songName:`Pal Pal Dil ke Paas <br>
        <div class="subtitle">Blackmail</div>`,
        poster:"img/img13.jpg"
    },
    {
        id: 14,
        songName:`O Mere Dil Ke Chain<br>
        <div class="subtitle">Kishore Kumar</div>`,
        poster:"img/img14.jpg"
    },
    {
        id: 15,
        songName:`Abhi Muje Mein <br>
        <div class="subtitle">Agneepath</div>`,
        poster:"img/img15.jpg"
    },
    {
        id: 16,
        songName:`Sandese Aate Hai <br>
        <div class="subtitle">Border</div>`,
        poster:"img/img16.jpg"
    },
    {
        id: 17,
        songName:`Filhall <br>
        <div class="subtitle">B Praak</div>`,
        poster:"img/img17.jpg"
    },
    {
        id: 18,
        songName:`Dil Tod Ke<br>
        <div class="subtitle">B Praak</div>`,
        poster:"img/img18.jpg"
    },
    {
        id: 19,
        songName:`Lahore <br>
        <div class="subtitle">Guru</div>`,
        poster:"img/img19.jpg"
    },
    {
        id: 20,
        songName:`High Rated Gabru <br>
        <div class="subtitle">Guru</div>`,
        poster:"img/img20.jpg"
    },
    {
        id: 21,
        songName:`Aashiq Banaya Aapne <br>
        <div class="subtitle">Neha Kakkar</div>`,
        poster:"img/img21.jpg"
    },
    {
        id: 22,
        songName:`Sunn Raha Hai <br>
        <div class="subtitle">Aashiqui</div>`,
        poster:"img/img22.jpg"
    },
    {
        id: 23,
        songName:`Jitni Dafa<br>
        <div class="subtitle">Parmanu</div>`,
        poster:"img/img23.jpg"
    },
    {
        id: 24,
        songName:`Aadat<br>
        <div class="subtitle">Kalyug</div>`,
        poster:"img/img24.jpg"
    },
    {
        id: 25,
        songName:`Woh Lamhe Woh Batein<br>
        <div class="subtitle">Atif Aslam</div>`,
        poster:"img/img25.jpg"
    },
    {
        id: 26,
        songName:`Dil Ke Armaan<br>
        <div class="subtitle">Nikaah</div>`,
        poster:"img/img26.jpg"
    },
    {
        id: 27,
        songName:`Bekhayali<br>
        <div class="subtitle">Kabir Singh</div>`,
        poster:"img/img27.jpg"
    },
    {
        id: 28,
        songName:`Bulleya<br>
        <div class="subtitle">Ae Dil Hai Mushkil</div>`,
        poster:"img/img28.jpg"
    },
    {
        id: 29,
        songName:`Milne Hai Mujhe Aayi<br>
        <div class="subtitle">Aashiqui</div>`,
        poster:"img/img29.jpg"
    },
    {
        id: 30,
        songName:`Dard Dilo ka<br>
        <div class="subtitle">Himesh Reshammiya</div>`,
        poster:"img/img30.jpg"
    },
    {
        id: 31,
        songName:`Galliyan<br>
        <div class="subtitle">Ek Villan</div>`,
        poster:"img/img31.jpg"
    },
    {
        id: 32,
        songName:`Shaamat<br>
        <div class="subtitle">Ek Villan</div>`,
        poster:"img/img32.jpg"
    },
    {
        id: 33,
        songName:`Sansoon Ko<br>
        <div class="subtitle">Zid</div>`,
        poster:"img/img33.jpg"
    },
    {
        id: 34,
        songName:`Aashiqui Aa gyi<br>
        <div class="subtitle">Radhe Shyam</div>`,
        poster:"img/img34.jpg"
    },
    {
        id: 35,
        songName:`Excuses<br>
        <div class="subtitle">Ap Dillon</div>`,
        poster:"img/img35.jpg"
    },
    {
        id: 36,
        songName:`Bhool Jane Ka<br>
        <div class="subtitle">Rahat Fateh Ali Khan </div>`,
        poster:"img/img36.jpg"
    },

]


Array.from(document.getElementsByClassName('songItem')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src=songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;

});
let masterPlay=document.getElementById('masterPlay');
let wave=document.getElementById('wave');

masterPlay.addEventListener('click',()=>{
    if(music.paused || music.currentTime<=0)
    {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-circle-fill');
    }
    else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});


const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('playListplay')).forEach((el)=>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}



const makeAllBackground=()=>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background='rgb(105,105,105,.0)';
    })
}

let index = 0;
let poster_play=document.getElementById('poster_play');
let download_music=document.getElementById('download_music');
let title=document.getElementById('title');


Array.from(document.getElementsByClassName('playListplay')).forEach((e)=>{
    e.addEventListener('click', (el)=>{
        // console.log(el)
        index = el.target.id;
        console.log(index);
        // const music= new Audio(`audio/audio${index}.mp3`);
         music.src = `audio/audio${index}.mp3`;
         poster_play.src=`img/img${index}.jpg`
         music.play();
         masterPlay.classList.remove('bi-play-fill');
         masterPlay.classList.add('bi-pause-fill');
         download_music.href= `audio/audio${index}.mp3`;

         let songTitles =songs.filter((els)=>{
            return els.id == index;
         });

         songTitles.forEach((elss)=>{
            let {songName}=elss;
            title.innerHTML=songName;
            download_music.setAttribute('download',songName);
         });

         makeAllBackground();
         Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105,105,105,.1)";

         makeAllPlays();
         el.target.classList.remove('bi-play-circle-fill');
         el.target.classList.add('bi-pause-circle-fill');
         wave.classList.add('active1');


    });
})


let currentStart= document.getElementById('currentStart');
let currentEnd= document.getElementById('currentEnd');
let seek=document.getElementById('seek');
let bar2=document.getElementById('bar2');
let dot=document.getElementsByClassName('dot')[0];


music.addEventListener('timeupdate',()=>{
    let music_curr=music.currentTime;
    let music_dur=music.duration;
    // console.log(music_curr);

    let min1= Math.floor(music_dur / 60);
    let sec1=Math.floor(music_dur % 60);

    if(sec1<10)
    {
        sec1=`0${sec1}`;
    }

    currentEnd.innerText=`${min1}:${sec1}`;

    let min2= Math.floor(music_curr/60);
    let sec2=Math.floor(music_curr % 60);

    if(sec2<10)
    {
        sec2=`0${sec2}`;
    }

    currentStart.innerText=`${min2}:${sec2}`;

    let progressBar = parseInt((music_curr/music_dur)*100);
    seek.value=progressBar;
    // console.log(seek.value);

    let seekbar=seek.value;
    bar2.style.width=`${seekbar}%`;
    dot.style.left=`${seekbar}%`;
});

seek.addEventListener('change',()=>{
    music.currentTime=seek.value * music.duration/100;
});

let volume_icon=document.getElementById('volume_icon');
let vol=document.getElementById('vol');
let vol_bar=document.getElementsByClassName('vol_bar')[0];
let vol_dot=document.getElementById('vol_dot');


vol.addEventListener('change',()=>{
    if(vol.value == 0)
    {
        //to mute the song
        volume_icon.classList.remove('bi-volume-up-fill');
        volume_icon.classList.remove('bi-volume-down-fill');
        volume_icon.classList.add('bi-volume-mute-fill');
    }
    if(vol.value>0)
    {
        volume_icon.classList.remove('bi-volume-up-fill');
        volume_icon.classList.add('bi-volume-down-fill');
        volume_icon.classList.remove('bi-volume-mute-fill');
    }
    if(vol.value>50)
    {
        volume_icon.classList.add('bi-volume-up-fill');
        volume_icon.classList.remove('bi-volume-down-fill');
        volume_icon.classList.remove('bi-volume-mute-fill');
    }

    let vol_a=vol.value;
    vol_bar.style.width=`${vol_a}%`;
    vol_dot.style.left=`${vol_a}%`;
    music.volume=vol_a/100;
});


let back=document.getElementById('back');
let next=document.getElementById('next');

back.addEventListener('click',()=>{
    index -=1;

    if(index<1) //to play songs after song1
    {
        index=Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/audio${index}.mp3`;
         poster_play.src=`img/img${index}.jpg`
         music.play();
         masterPlay.classList.remove('bi-play-fill');
         masterPlay.classList.add('bi-pause-fill');

         let songTitles =songs.filter((els)=>{
            return els.id == index;
         });

         songTitles.forEach((elss)=>{
            let {songName}=elss;
            title.innerHTML=songName;


         });

         makeAllBackground();
         Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105,105,105,.1)";

         makeAllPlays();
         el.target.classList.remove('bi-play-circle-fill');
         el.target.classList.add('bi-pause-circle-fill');
         wave.classList.add('active1');
});

next.addEventListener('click',()=>{
    index ++;
    if(index >Array.from(document.getElementsByClassName('songItem')).length)
    {
        index=1;
    }
    music.src = `audio/audio${index}.mp3`;
    poster_play.src=`img/img${index}.jpg`
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles =songs.filter((els)=>{
       return els.id == index;
    });

    songTitles.forEach((elss)=>{
       let {songName}=elss;
       title.innerHTML=songName;


    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105,105,105,.1)";

    makeAllPlays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
});











let pop_song_left=document.getElementById('pop_song_left');
let pop_song_right=document.getElementById('pop_song_right');
let pop_song=document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft+=330;
});
pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft-=330;
});

let pop_art_left=document.getElementById('pop_art_left');
let pop_art_right=document.getElementById('pop_art_right');
let item=document.getElementsByClassName('item')[0];


pop_art_right.addEventListener('click',()=>{
    item.scrollLeft+=330;
});
pop_art_left.addEventListener('click',()=>{
    item.scrollLeft-=330;
});


let shuffle=document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click',()=>{
    let a = shuffle.innerHTML;

    switch(a)
    { 
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML='repeat';
            break;

        case "repeat": 
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML='random';   
        break;

        case "random":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML='next'; 
            break;

    }
});




const next_music=()=>{
    if(index==songs.length)
    {
        index=1;
    }
    else{
        index++;
    }
    music.src = `audio/audio${index}.mp3`;
    poster_play.src=`img/img${index}.jpg`
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles =songs.filter((els)=>{
       return els.id == index;
    });

    songTitles.forEach((elss)=>{
       let {songName}=elss;
       title.innerHTML=songName;


    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105,105,105,.1)";

    makeAllPlays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}


const repeat_music=()=>{
    index;
    music.src = `audio/audio${index}.mp3`;
    poster_play.src=`img/img${index}.jpg`
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles =songs.filter((els)=>{
       return els.id == index;
    });

    songTitles.forEach((elss)=>{
       let {songName}=elss;
       title.innerHTML=songName;


    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105,105,105,.1)";

    makeAllPlays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}


const random_music=()=>{
    if(index==songs.length)
    {
        index=1;
    }
    else{
        index=Math.floor((Math.random()* songs.length)+1);
    }
    music.src = `audio/audio${index}.mp3`;
    poster_play.src=`img/img${index}.jpg`
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles =songs.filter((els)=>{
       return els.id == index;
    });

    songTitles.forEach((elss)=>{
       let {songName}=elss;
       title.innerHTML=songName;


    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105,105,105,.1)";

    makeAllPlays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}

music.addEventListener('ended',()=>{
    let b=shuffle.innerHTML;
    switch(b)
    {
        case 'repeat':
            repeat_music();
            break;
        case 'next':
            next_music();
            break;   
            
            case 'random':
                random_music();
                break; 
    }
   
})