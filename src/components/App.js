import React from 'react';
import PropTypes from 'prop-types';
import HomePage from './home/homePage';
import AboutPage from './about/aboutPage';
import CoursePage from './course/coursePage';
import{
  BrowserRouter as Router,
  Route,
  Link
 }from 'react-router-dom';
import Header from './header/header';
 
class App extends React.Component {
    render() {
        return (
          <div>
            <Header />
          <div className="cotainer-fluid">
            {/* <p>Header here</p> */}
            {/* {this.props.children} */}
          </div>
        <Router>
        <div>
          <Route exact path="/1" component={AboutPage}/>
          <Route exact path="/12" component={HomePage}/>
          <Route exact path="/123" component={CoursePage}/>
        </div>
        </Router>
        </div>
        );
    }
}


// App.propTypes = {
//     children: PropTypes.object.isRequired
// };

export default App;
