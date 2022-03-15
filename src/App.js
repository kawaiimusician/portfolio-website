import './App.css';
import Banner from './components/banner';
import Bio from './components/bio';
import Projects from './components/projects';
import Spacer from './components/spacer';
import Title from './components/title';

function App() {
  return (
    <div className="App">
      <Banner />
      <Spacer />
      <Bio />
      <Spacer />
      <Title />
      <Projects />

    </div>
  );
}

export default App;
