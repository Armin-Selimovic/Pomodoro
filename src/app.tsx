import React, { useState } from "react";

export default function App(){
	return (
		<div className="container">
			<TopBar />
			<main className="main">
				<Login />
			</main>
			<Footer />
		</div>
	);
}

// ---------------- Top Bar ----------------
function TopBar(){
	const [open, setOpen] = useState(false);

	return (
		<header className="topbar">
			{/* Meni */}
			<div style={{position:"relative"}}>

				<button className="Meni" aria-label="Menu" onClick={()=>setOpen(!open)}>
					<span className="bar" />
					<span className="bar" />
					<span className="bar" />
				</button>

				{open && (
					<nav className="dropdown">
						<MenuItem label="Overview" onClick={()=>setOpen(false)} />
						<MenuItem label="Settings" onClick={()=>setOpen(false)} />
						<MenuItem label="About" onClick={()=>setOpen(false)} />
					</nav>
				)}
			</div>

			<p style={{opacity:.9,fontSize:".9rem"}}>Welcome to Pomodoro</p>

			<div className="spacer">sp</div>
		</header>
	);
}

function MenuItem({label, onClick}:{label:string; onClick?:()=>void}){
	return (
		<button className="menu-item" onClick={onClick}>{label}</button>
	);
}

// --------------- Login ---------------
function Login(){
	const [tab, setTab] = useState<"login"|"signup">("login");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");

	function onSubmit(e: React.FormEvent){
		e.preventDefault();
		alert(`(placeholder) ${tab} with email ${email}`);
	}

	return (
		<div className="card">
			{/* Tabs */}
			<div className="tabs">
				<button className={`tab ${tab==='login' ? 'tab-active' : ''}`} onClick={()=>setTab('login')}>Login</button>
				<button className={`tab ${tab==='signup' ? 'tab-active' : ''}`} onClick={()=>setTab('signup')}>Create account</button>
			</div>

			{/* Simple form */}
			<form className="form" onSubmit={onSubmit}>
				{tab==='signup' && (
					<label className="label">Name
						<input className="input" value={name} onChange={(e)=>setName(e.target.value)} />
					</label>
				)}
				<label className="label">Email
					<input type="email" className="input" value={email} onChange={(e)=>setEmail(e.target.value)} />
				</label>
				<label className="label">Password
					<input type="password" className="input" value={password} onChange={(e)=>setPassword(e.target.value)} />
				</label>
				<button className="button-primary">{tab==='login' ? 'Login' : 'Create account'}</button>
			</form>

			<p style={{opacity:.8,fontSize:".75rem",marginTop:".75rem"}}>If you're just testing the site use - email: test@gmail.com, password: test.</p>
		</div>
	);
}

// ---------------- Footer ----------------
function Footer(){
	return <footer className="footer">© 2025 Armin Selimović • Graz, Austria</footer>;
}
