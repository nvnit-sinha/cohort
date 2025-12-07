const reels = [
  {
    ismuted: true,    
    username: "john_doe",
    likecount: 1200,
    isliked: true,
    caption: "Sunset vibes 🌅",
    commentcount: 45,
    video: "videos/video1.mp4",
    userprofile: "https://images.unsplash.com/photo-1631208700519-72597dcf7d4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHB8ZW58MHx8MHx8fDA%3D",
    sharecount: 12,
    isfollowed: true
  },
  {
    ismuted: true,
    username: "emily_arts",
    likecount: 5400,
    isliked: false,
    caption: "My latest painting 🎨",
    commentcount: 120,
    video: "videos/video2.mp4",
    userprofile: "https://images.unsplash.com/photo-1665574435997-b0d77cede9ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRwfGVufDB8fDB8fHww",
    sharecount: 50,
    isfollowed: false
  },
  {
    ismuted: true,
    username: "travel_with_mia",
    likecount: 9800,
    isliked: true,
    caption: "Exploring Bali 🌴",
    commentcount: 300,
    video: "videos/video3.mp4",
    userprofile: "https://images.unsplash.com/photo-1665574435997-b0d77cede9ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRwfGVufDB8fDB8fHww",
    sharecount: 200,
    isfollowed: true
  },
  {
    ismuted: true,
    username: "tech_guru",
    likecount: 2300,
    isliked: false,
    caption: "Top 5 gadgets of 2025 🔥",
    commentcount: 87,
    video: "videos/video4.mp4",
    userprofile: "https://images.unsplash.com/photo-1764620390134-1b409475e0db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    sharecount: 34,
    isfollowed: false
  },
  {
    ismuted: true,
    username: "fit_with_anna",
    likecount: 7600,
    isliked: true,
    caption: "Quick morning workout 💪",
    commentcount: 190,
    video: "videos/video5.mp4",
    userprofile: "https://images.unsplash.com/photo-1764593154804-e7646a005ce0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",
    sharecount: 150,
    isfollowed: true
  },
  {
    ismuted: true,
    username: "chef_mario",
    likecount: 4500,
    isliked: false,
    caption: "Making homemade pasta 🍝",
    commentcount: 110,
    video: "videos/video6.mp4",
    userprofile: "https://images.unsplash.com/photo-1764592358977-a181a6e71af4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    sharecount: 60,
    isfollowed: false
  },
  {
    ismuted: true,
    username: "street_style",
    likecount: 8800,
    isliked: true,
    caption: "Urban fashion trends 👟",
    commentcount: 240,
    video: "videos/video7.mp4",
    userprofile: "https://plus.unsplash.com/premium_photo-1764422452491-401371a1e7f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    sharecount: 170,
    isfollowed: true
  },
  {
    ismuted: true,
    username: "pet_corner",
    likecount: 15000,
    isliked: false,
    caption: "Cute puppy moments 🐶",
    commentcount: 520,
    video: "videos/video8.mp4",
    userprofile: "https://images.unsplash.com/photo-1763757321139-e7e4de128cd9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    sharecount: 300,
    isfollowed: false
  },
  {
    ismuted: true,
    username: "music_by_lily",
    likecount: 6700,
    isliked: true,
    caption: "Acoustic cover 🎵",
    commentcount: 210,
    video: "videos/video9.mp4",
    userprofile: "https://plus.unsplash.com/premium_photo-1764422452491-401371a1e7f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    sharecount: 90,
    isfollowed: true
  },
  {
    ismuted: true,
    username: "carreviews",
    likecount: 4200,
    isliked: false,
    caption: "2025 electric SUV review ⚡",
    commentcount: 160,
    video: "videos/video10.mp4",
    userprofile: "https://images.unsplash.com/photo-1764046697690-03c6533e13d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",
    sharecount: 80,
    isfollowed: false
  }
];

let likeCnt = document.querySelector("#like-count");
let allReels = document.querySelector(".all-reels");

function addData(){
  let sum = '';
  reels.forEach((elem, idx)=>{
    sum = sum + `<div class="reel">
                    <video autoplay loop ${!elem.ismuted?'':'muted'} src="${elem.video}"></video>
                    <div class="mute" id=${idx}>
                    ${elem.ismuted?'<i class="ri-volume-mute-fill"></i>':'<i class="ri-volume-up-line"></i>'}
                    </div>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userprofile}" alt="">
                            <h4>${elem.username}</h4>
                            <button class="follow" id=${idx}>${elem.isfollowed?"Unfollow":"Follow"}</button>
                        </div>
                        <h3>${elem.caption}</h3>
                    </div>
                    <div class="right">
                        <div id=${idx} class="like">
                            <h4 class="like-icon icon">${elem.isliked?'<i style="color:red" class="ri-heart-fill"></i>':'<i class="ri-heart-line"></i>'}</h4>
                            <h6 id="like-count">${elem.likecount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="icon comment-icon"><i class="ri-chat-3-line"></i></h4>
                            <h6>${elem.commentcount}</h6>
                        </div>
                        <div class="share">
                            <h4 class="icon share-icon"><i class="ri-share-forward-line"></i></h4>
                            <h6>${elem.sharecount}</h6>
                        </div>
                        <div class="menu">
                            <h4 class="icon menu-icon"><i class="ri-more-2-line"></i></h4>
                        </div>
                    </div>
                </div> `
})

  allReels.innerHTML = sum;
}

addData();

allReels.addEventListener('click',(dets)=>{
  if(dets.target.className == 'like'){
    if(!reels[dets.target.id].isliked){
      reels[dets.target.id].likecount++;
      reels[dets.target.id].isliked = true;
    }else{
      reels[dets.target.id].likecount--;
      reels[dets.target.id].isliked = false;
    }
    addData();
  }
  if(dets.target.className == 'follow'){
    if(!reels[dets.target.id].isfollowed){
      reels[dets.target.id].isfollowed = true;
    }else{
      reels[dets.target.id].isfollowed = false;
    }
    addData();
  }

  if(dets.target.className == 'mute'){
    if(!reels[dets.target.id].ismuted){
      reels[dets.target.id].ismuted = true;
    }else{
      reels[dets.target.id].ismuted = false;
    }
    addData();
  }
  
})

