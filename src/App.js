import './App.css';
import styles from './App.module.css'
import Header from './component/header';
import DayList from './component/DayList.tsx';
import Day from './component/Day.tsx';
import CreateWord from './component/CreateWord.tsx';
import EmptyPage from './component/EmptyPage';
import CreateDay from './component/CreateDay';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <DayList></DayList>
        </Route>
        <Route path='/day/:day'>  {/* :day를 통해 1이라는 변수를 추출 가능 */}
          <Day></Day>
        </Route>
        <Route path='/create_word'> 
          <CreateWord></CreateWord>
        </Route>
        <Route path='/create_day'> 
          <CreateDay></CreateDay>
        </Route>
        <Route>
          <EmptyPage></EmptyPage>
        </Route>
      </Switch>
    </div>
    </BrowserRouter>

  );
}

export default App;
