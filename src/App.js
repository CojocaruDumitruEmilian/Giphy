import './App.css';
import {useState} from 'react';

let API_KEY="W9jcirSvdPizTIMjF5Tea3HyFv5VOFmN"
let parent=document.querySelector("parent");




function App() {
  var [valuee, setValue] = useState('');


  function handleOnClick(event){
    event.preventDefault();
    let url=`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=3&q=`
    let str = document.querySelector(".input-label").value.trim();
    url = url.concat(str);
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(content => {
      console.log(content.data);
     console.log(content.data[0])
      let fig = document.createElement("figure");
      let fig1 = document.createElement("figure");
      let img = document.createElement("img");
      let img1 = document.createElement("img");
      let fc = document.createElement("figcaption");
      let fc1 = document.createElement("figcaption");
      img.src = content.data[0].images.downsized.url;
      img1.src = content.data[1].images.downsized.url;
      img.alt = content.data[0].title;
      img1.alt = content.data[1].title;
      fc.textContent = content.data[0].title;
      fc1.textContent = content.data[1].title;
      fc.style.color="white";
      fc1.style.color="white";
      fig.appendChild(img);
      fig.appendChild(fc);
      fig1.appendChild(img1);
      fig1.appendChild(fc1);
      let out = document.querySelector(".out");
      //out.insertAdjacentElement("afterbegin", fig);
     // out.insertAdjacentElement("afterbegin", fig1);
      //fig.classList.add(".out");
     // fig1.classList.add(".out");
     out.appendChild(fig)
     out.appendChild(fig1)
      //parent.appendChild(out);


      const mybr = document.createElement("br");
      const para = document.createElement("p")
      const mybr1 = document.createElement("br");
      para.classList.add("child");
      //para.innerText = img.src;
      para.innerText = fc.textContent;
      document.querySelector(".grid").appendChild(para)
      document.querySelector(".grid").appendChild(mybr)
      document.querySelector(".grid").appendChild(mybr1)

    })
    .catch(err => {
      console.error(err);
    });

    setValue("");


  }

  
  function handleChange(event) {
    setValue(event.target.value)
  }

  function handleHistory(){
document.querySelector(".grid").classList.toggle("grid1");
  }

  return (
    <div className="app">
   <div className="header">
   <p className="text">Giphy</p>
   <form className="submit-form">
  <label>
    <input type="text" className="input-label" value={valuee} onChange={handleChange} name="name" />
    
  </label>

</form>

<input type="submit"  className="submit-button" onClick={handleOnClick} value="Submit" />
      <button className="button2" onClick={handleHistory}>History</button>
      <button className="button1">Trending</button>

   </div>
   
   
   <div className="out"></div>
   
   <div className="grid">
    <div className="child"></div>
   </div>
   
   </div>
  );
}

export default App;
