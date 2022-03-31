import './App.css';
import styles from './App.module.css'
import Header from './component/header';
import DayList from './component/DayList';
import Day from './component/Day';
import EmptyPage from './component/EmptyPage';
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
        <Route>
          <EmptyPage></EmptyPage>
        </Route>
      </Switch>
    </div>
    </BrowserRouter>

  );
}

export default App;
