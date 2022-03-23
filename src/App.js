import './App.css';
import {useState} from 'react'
import Tabs from './components/Tabs/Tabs';


function App() {
  
  const tabsValues = [
    {name: 'Tap 1', content: 'Tap 1 content is showing here.'},
    {name: 'Tap 2', content: 'Tap 2 content is showing here.'},
    {name: 'Tap 3', content: 'Tap 3 content is showing here.'}
  ]


  const [tabs, setTabs] = useState(tabsValues)
  
  
  return (
    <div className="App">
      <Tabs tabs={tabs}/>  
    </div>
  );
}

export default App;
