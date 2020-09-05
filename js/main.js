
// music button start
const music = document.querySelector("audio");
      const element = document.getElementById("rota");
      const play = document.getElementById("play");
      const artist = document.getElementById("artist");
      const title = document.getElementById("title");
      const prev = document.getElementById("prev");
      const next = document.getElementById("next");

      const songs =[{
        name: "music1",
        title: "Lotus Lane",
        artist: "The Loyalist",    
          },
      {
      name:"music2",
        title: "Sappheiros",
        artist: "Kishor Kumar",
      },
      {
      name:"music3",
        title: "Walking Firiri",
        artist: "Lata Mangeskar",
      }
      ];
      let isPlaying = false;

      //for play function
      const playMusic = ()=>{
        isPlaying = true;
        music.play();
        play.classList.replace("fa-play", "fa-pause");
        element.classList.add("anime");
      };
      
      //for pause function
      const pauseMusic = ()=>{
        isPlaying = false;
        music.pause();
        play.classList.replace("fa-pause","fa-play");
        element.classList.remove("anime");
      };

      play.addEventListener('click',()=>{
        if(isPlaying){
          pauseMusic();
        }else{
          playMusic();
        }
        // isPlaying ?  pauseMusic() : playMusic() ;
      });

      // changes music data option

      const loadSong = (songs)=>{
        title.textContent =songs.title;
        artist.textContent =songs.artist;
        music.src="music/"+songs.name+".mp3";
        rota.src="images/"+songs.name+".jpg";
      };
      // loadSong(songs[1]);
      songIndex=0;
      const nextSong=()=>{
        songIndex = (songIndex + 1) % songs.length;
        loadSong(songs[songIndex]);
        playMusic();
      };
      const prevSong=()=>{
        songIndex = (songIndex - 1 + songs.length)%songs.length;
        loadSong(songs[songIndex]);
        playMusic();
      };

      next.addEventListener("click", nextSong);
      prev.addEventListener("click", prevSong)


// music button end
