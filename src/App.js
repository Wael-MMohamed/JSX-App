import aot from './aot.jpg';
import './style.css';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
            <h1 className="title-red">Wael Mohamed</h1>
            <br />
            <img src={aot} alt="srcImage" style={{width:400, height:200}}/>
            <br />
            <img src="/mikasa.jpg" alt="publicImage" style={{width:400, height:400}}/>
          </div>
          <video width="320" height="240" controls>
          <source src="myVideo.mp4" type="video/mp4" />
          </video>
        </div>
      <div className="col-sm-2"></div>  
      </div>   
    </div>
  );
}

export default App;
