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
  div.innerHTML= '<pre>Ah it\'s the time of the year again</br>Time in which marks your life journey</br>A wonderful gift from God upon someone</br>A delight to him of having you in this world</br>For another year<br/><br/>You who are brougth by fate<br/>Touch his life amongst billions in existance<br/>Bring him light to brush his sorrow under the dark pit</br>Bring him tranquility in his time of lost</br>Put him in his firm stance once more</br>Such is the work of fate</br>Intertwine the seemingly impossible destiny</br><br/>You are the sunflower in the field of roses</br>Catch the eyes of his who witness in awe </br>Before the beauty and uniqueness of your own</br>Enough to move the still world of his</br>Rid of all the bland taste in his life</br></br>Oh the bright star amongst the sea of clouds</br>Let this be a time to remember</br>Of all joy and mourn you have borne so far in life</br>Thus falter not in the pursuit of the peak of greatness</br>For it will be worth your sweat and tears</br>And thus afraid not of what the future holds</br>For his prayers from faraway soil always be with you<br/><span><br/>Happy Birthday, Milady!<br/>May your beauty and greatness be the everlasting one!<br/><br/><br/>Sincerely,<br/>A fool<br/></span></pre>';

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