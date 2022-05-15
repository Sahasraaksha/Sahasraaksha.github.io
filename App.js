// import logo from './logo.svg';
import './story.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import {Switch} from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';
// import Solution from './components/Solution';
// import Contact from './components/Contact';
// import Team from './components/Team';
// import WhyUs from './components/WhyUs';
// import Help from './components/Help';
// import Features from './components/Features';
import Page from './components/Page';
import LogoNavbar from './components/layout/LogoNavbar';
// import './Resources/sahasraakshaLogo.png';

const App = () => {
	return (<>
		<div className="App">
			<Router>
				<LogoNavbar />
				<Routes>
					{/* <Route exact path='/' element={<><p>hello....Welcome to Sahasraaksha home page</p></>}/> */}
					<Route exact path='/' element={<Page />} />
					{/* <Route exact path='/home' element={<Home />} /> */}
					{/* <Route exact path='/about' element={<About />} /> */}
					{/* <Route exact path='/solution' element={<Solution />} /> */}
					{/* <Route exact path='/contact' element={<Contact />} /> */}
					{/* <Route exact path='/team' element={<Team />} /> */}
					{/* <Route exact path='/why-us' element={<WhyUs />} /> */}
					{/* <Route exact path='/help' element={<Help />} /> */}
					{/* <Route exact path='/features' element={<Features />} /> */}
					{/* <Route exact path='/' element={<><p>hello....Welcome to Sahasraaksha home page</p></>}/> */}

				</Routes>
			</Router>
		</div>
	</>);
}

export default App;
