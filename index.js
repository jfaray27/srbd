let clickNumber= 0;

document.querySelector('.tombol').addEventListener('click',()=>{
  clickNumber++;
  if(clickNumber<=1){
    switchImage();
    showPoem();
    displayLeaves();
    console.log(clickNumber);
  } else {
    clickNumber= 0;
    document.querySelector('#div1').remove();
    document.querySelector('#audio1').remove();
    document.querySelector('.set').remove();
    reverseImage();
    
    console.log(clickNumber);
  }
});


const switchImage = ()=>{
  document.querySelector('.ribbon-knot').remove()

  const tombol = document.querySelector('.tombol');

  const img = document.createElement('img')

  img.setAttribute('class','ribbon');

  img.setAttribute('src','pict/ribbon.png')

  tombol.append(img);
}

const reverseImage= ()=>{
  document.querySelector('.ribbon').remove()

  const tombol = document.querySelector('.tombol');

  const img = document.createElement('img')

  img.setAttribute('class','ribbon-knot');

  img.setAttribute('src','pict/ribbon-knot.png')

  tombol.append(img);
}

const showPoem = ()=>{
  playMusic();
  const penampung = document.querySelector('.penampung')
  const div = document.createElement('div');
  div.innerHTML= '<pre>Ah it\'s the time of the year again<br/>Time in which marks your life journey<br/>It\'s a gift from God upon someone<br/>Which gives him the pleasure of having you in this world<br/>For another year<br/><br/>For you who touch one\'s life<br/>Bring him light to brush his sorrow under the dark pit<br/>Bring him tranquility in his time of lost<br/><br/>The sunflower of his in the field of roses<br/>Let this be a time to remember<br/>Of all joy and mourn you have borne so far in life<br/>Thus falter not in the pursuit of a better life<br/>For his prayers from faraway soil always be with you<br/><span><br/>Happy Birthday, Milady!<br/>May your beauty and greatness be the everlasting one!<br/><br/><br/>Sincerely,<br/>A fool<br/></span></pre>';

  div.setAttribute('id','div1')

  penampung.append(div);
  
}

const playMusic = () => {
  const button = document.querySelector('.tombol')

  const audio = document.createElement('audio')

  audio.setAttribute('src','rooftopbgm.mp3')

  audio.setAttribute('id','audio1')

  audio.setAttribute('loop','true')

  audio.setAttribute('autoplay','true')

  button.append(audio)
}

const displayLeaves = () => {
  const section = document.querySelector('.section');
  const div = document.createElement('div');
  div.innerHTML='<div><img src="leaves1.png"></div><div><img src="leaves2.png"></div><div><img src="leaves3.png"></div><div><img src="leaves4.png"></div><div><img src="leaves1.png"></div><div><img src="leaves2.png"></div><div><img src="leaves3.png"></div><div><img src="leaves4.png"></div>';

  div.setAttribute('class','set');

  section.append(div);

}