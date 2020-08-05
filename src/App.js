import React, {useState} from 'react';
import './App.css';
import {HeartIcon} from './HeartBeatComponents'
import {ChromePicker} from 'react-color'


function App() {
  const [amplitude, setAmplitude] = useState(25);
  const [degree, setDegree] = useState(90);
  const [hexColor, setHexColor] = useState('#006600');
  const [hues, setHues] = useState(0);
  const [beats, setBeats] = useState(0);

  const beatsPerMinute = beats <= 0 ? 0 : 60 / beats;
  const huesPerMinute = hues <= 0 ? 0 : 60 / hues;
  const amplitudePercentage = 1 - (amplitude / 100);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <HeartIcon beatRate={beatsPerMinute} hueRate={huesPerMinute} height={"90vh"} width={"80vw"}
                     fillColor={hexColor} amplitude={amplitudePercentage} degree={degree}/>
        </div>
        <div>
          <input type="number" placeholder="次/分钟" value={beats}
                 onChange={e => setBeats(e.target.value)}/>
          <span className='Unit'>  次/分钟 (频率) </span>
          <button onClick={() => setBeats(0)}>心跳频率清零</button>
          <input type="range" min="1" max="100" value={amplitude}
                 onInput={(e) => setAmplitude(e.target.value)} onChange={(e) => setAmplitude(e.target.value)}/>
          <span className='Unit'>振幅: {amplitude}%</span>
        </div>
        <div>
          <input type="number" placeholder="次/分钟" value={hues}
                 onChange={e => setHues(e.target.value)}/>
          <span className='Unit'>  次/分钟 (颜色轮转频率) </span>
          <button onClick={() => setHues(0)}>颜色轮转清零</button>
          <ChromePicker className="ColorPicker" color={hexColor} onChangeComplete={(color) => setHexColor(color.hex)}/>
          <input type="range" min="1" max="360" value={degree}
                 onInput={(e) => setDegree(e.target.value)} onChange={(e) => setDegree(e.target.value)}/>
          <span className='Unit'>色域: {degree}度</span>

        </div>
      </header>
    </div>
  );
}

export default App;
