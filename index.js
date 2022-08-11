const App = () => {
	return (
		<div className="app" >
			
			<Main />
		</div>
	)
}
const App_style = <style>
	background : "23252C"
</style>
// here is going our only child cimpo

const image = <img src="img.png" alt="logo"  className="images" />
const Main = () => {
	return (
		<div  className="Main" >
			{image}
			<Main_child />
			<Footer/>
		</div>
	)
}

// foolow component 

const Main_child = () => {
	return (
		<div className="Main_child">
			<div className="Title-paragraph">
				<h3> Malo </h3>
				<p> Frontend Developer </p>
				<p> laurasmith.website </p>
			</div>
			<div type="text" placeholder="Email" className='email_input'/> <div/><i  className="fa-solid fa-envelope"><span className="SPan">Email</span></i>
			<div className="paragraph">
				<h3> About </h3>
				<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. In odit illum commodi cum necessitatibus nihil ipsam consequuntur deserunt veritatis repudiandae?</p>
				<h3>Interest</h3>
				<p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. A nemo quisquam quia necessitatibus, magnam explicabo consequuntur deleniti odio debitis cum? </p>
			</div>
			<div className="paragraph">
				
				<p> Frontend Developer </p>
				<p> laurasmith.website </p>
			</div>
		</div>
	)
}
const Footer = () => {
	 return (
	<footer className="footer">
		<div className="foote">
			<i class="fa-brands fa-twitter"></i>
			<i class="fa-brands fa-facebook"></i>
			<i class="fa-brands fa-instagram"></i>
			<i class="fa-brands fa-linkedin-in"></i>
			<i class="fa-brands fa-github"></i>
		</div>
	</footer>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)