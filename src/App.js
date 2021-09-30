
import React, { useState } from 'react'
import Navbar from './Navbar'
import News from './News'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';


const App = (props) => {
  let size = 15;
  let apikey = "f61f08e7a74540b7a90bb08534cb993d"
  const [progress, setProgress] = useState(10)


  return (
    <>
      <Router>

        <Navbar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}

        />
        <Switch>

          <Route exact path="/"> <News setProgress={setProgress} apikey={apikey} key="general" size={size} country="in" category="general" /></Route>
          <Route exact path="/sports"> <News setProgress={setProgress} apikey={apikey} key="sports" size={size} country="in" category="sports" /></Route>
          <Route exact path="/business"> <News setProgress={setProgress} apikey={apikey} key="business" size={size} country="in" category="business" /></Route>
          <Route exact path="/entertainment"> <News setProgress={setProgress} apikey={apikey} key="entertainment" size={size} country="in" category="entertainment" /></Route>
          <Route exact path="/health"> <News setProgress={setProgress} apikey={apikey} key="health" size={size} country="in" category="health" /></Route>
          <Route exact path="/science"> <News setProgress={setProgress} apikey={apikey} key="science" size={size} country="in" category="science" /></Route>
          <Route exact path="/technology"> <News setProgress={setProgress} apikey={apikey} key="technology" size={size} country="in" category="technology" /></Route>
        </Switch>
      </Router>
    </>
  )
}
export default App;


