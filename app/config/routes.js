var React = require('react');

// Include the Router
var Router = require('react-router');
var Route = Router.Route;

//  Include the IndexRoute (catch-all route)
var IndexRoute	= Router.IndexRoute;
var IndexRedirect = Router.IndexRedirect;

// Reference the high-level components
var Main = require('../components/Main');
var Saved = require('../components/Children/Saved'); 
var Search = require('../components/Children/Search'); 
//var GrandChild1 = require('../components/Children/Grandchildren/GrandChild1');
//var GrandChild2 = require('../components/Children/Grandchildren/GrandChild2');

// Export the Routes
module.exports = (

	/*High level component is the Main component*/
	<Route path='/' component={Main}>
		<IndexRedirect to="/Search"/>
		<Route path='Saved' component={Saved} >
		<Route path='Search' component={Search} >
	</Route>

);