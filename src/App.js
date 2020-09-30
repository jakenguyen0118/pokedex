import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import './App.css'
import Pokedex from './Components/Pokedex'
import MyTeam from './Components/MyTeam'

function App() {
	return (
		<div className='App'>
			<nav>
				<Link to='/'>PokéDex</Link>
				<Link to='/team'>My Team</Link>
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
