import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import './App.css'
import Pokedex from './Components/Pokedex'
import MyTeam from './Components/MyTeam'

function App() {
	return (
		<div className='App'>
			<nav>
				<Link to='/'>
					<h1>PokéDex</h1>
				</Link>
				<Link to='/team'>
					<h1>My Team</h1>
				</Link>
			</nav>

			<main>
				<Switch>
					<Route path='/' exact={true} component={Pokedex} />
					{/* <Route path='/myteam' exact={true} component={MyTeam} />  */}
				</Switch>
			</main>
		</div>
	)
}

export default App
