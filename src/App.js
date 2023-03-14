import "./index.css";

var images = {
  owl: 'https://images.unsplash.com/photo-1543549790-8b5f4a028cfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  bear: 'https://images.unsplash.com/photo-1568162603664-fcd658421851?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1081&q=80',
  dolphin: 'https://images.unsplash.com/photo-1570481662006-a3a1374699e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
  cat: 'https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
}

function App() {
  return (
    <div className="App">
      <nav></nav>
      <h1>Animal Info</h1>
      <h2>Learn more about some of these animals!</h2>
    <div className="AnimalSelection">
     <div className="Owls"><img src={images.owl} alt='owl'></img></div>
     <div className="grizzlyBears"><img src={images.bear} alt='bear'></img></div>
     <div className="dolphins"><img src={images.dolphin} alt='dolphin'></img></div>
     <div className="cats"><img src={images.cat} alt='cat'></img></div>
    </div>
    </div>
  );
}

export default App;