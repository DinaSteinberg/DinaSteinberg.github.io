import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Intro from './intro';
import Projects from './projects';
import Experience from './experience';
import Education from './education';
import Skills from './skills';
import Other from './other';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Intro />
        <Projects />
        <Education />
        <Skills />
        <Other />
      </header>
    </div>
  );
}

export default App;
