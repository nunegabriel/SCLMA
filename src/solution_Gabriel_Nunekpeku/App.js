import bar from './bar.png';
import React from 'react'; 
import './App.css';

function App() {
  
  return (
    <div className='container'>
      <div className='left'>
        <div className='course'>
          COURSE
        </div>
        <div className='js'>
          Javascript<br></br> fundamentals
        </div>

        <div className="chapters">
          View all Chapters
         </div>
        


      </div>

      <div className="right">
        <div className='top'>
          <div className='chapter4'>CHAPTER 4</div>
          <div>
          <img src={bar} alt="bar" />
          <div className='status'>6/9 challenges</div>
          </div>
        </div>
      
        <div className='callback'>
          Callbacks and closures
        </div>
        <div className='btnf'>
          <button className='btn'>Continue</button>
        </div>
      </div>

    
    </div>
  );
}

export default App;
