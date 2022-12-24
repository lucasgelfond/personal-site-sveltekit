<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,200;0,300;0,400;0,500;0,700;1,200;1,400&display=swap"
		rel="stylesheet" />
</svelte:head>

<main>
	<div class="container">
		<a href="/">about</a> • <a href="/writing">writing</a> •
		<a href="/technical">technical work</a>
		<br />
		<br />
		<h2>Substack</h2>
		<h3>June 2022 — August 2022</h3>
		<p>
			This summer and fall I worked as a software engineering intern at
			Substack, an internet publishing platform. As an embedded individual
			contributor on our growth product team I reported to our engineering
			manager and worked alongside five engineers, a designer, a product manager
			and a data analyst. I participated in all of our brainstorm/sprint
			planning/retro meetings, built engineering tickets from our Linear (PM
			software) queue, and ran A/B tests based on our company-wide ‘Experiment’
			framework. I learned (and contributed to) our internal frontend library
			(dubbed ‘Pencraft’), unit and end to end testing infrastructure, and my
			pull requests went through standard code review/CI/deployment. I also
			frequently reviewed others’ code. In order to design and properly measure
			growth experiments, I also worked with our data pipelines, contributing to
			our Airflow instance and analyzing our data through Snowflake/Periscope.
			<br />
			<br />

			I shipped ~50 bug/feature PRs and ~10 A/B tests, including a revamped
			reader recommendation digest ($389k ARR), offer for a free month before
			cancellation ($70k ARR), and prompt to send post as email ($36k ARR). My
			favorite/biggest project was
			<a
				href="https://twitter.com/gucaslelfond/status/1605338226314870784?cxt=HHwWgIDUvZCnp8csAAAA"
				>shipping support for LaTeX</a
			>, a language that one can use to typeset mathematical equations. Much of
			this is still private — please reach out if you want to see work from it!
		</p>
		<br />
		<h2>NYC Department of City Planning</h2>
		<h3>June 2021 — August 2021</h3>
		<p>
			Through Coding It Forward's <a
				href="https://blog.codingitforward.com/meet-the-2021-corps-members-new-york-ny-e67adb4ac14f"
				>Civic Innovation Corps</a
			>, I worked in DCP's
			<a
				href="https://www.nyc.gov/site/planning/planning-level/urban-design/urban-design-overview.page"
				>Urban Design Office</a>
			to make NYC’s “Dimensions of the City” into browser-based, animated, interactive
			3D tour. I led frontend development in React, Three.js, and Valtio, allowing
			users to move within a viewport while moving along points of interest on a
			3D tour.
		</p>
		<br />
		<h2>Environmental Defense Fund</h2>
		<h3>September 2020 - January 2021</h3>
		<p>
			A part of DevelopForGood, I was a product manager on a team building a
			hazard reporting app for the EDF. I led weekly frontend and backend
			standups for our eight student engineers/designers, wrote/updated
			documentation, and communicated regularly with our EDF contact.
		</p>
		<br />
		<h2>Other Projects</h2>
		<ul>
			<li>
				<a href="https://github.com/lucasgelfond?tab=repositories"
					>This website</a
				>, LOL, built with SvelteKit
			</li>
			<li>
				<a href="https://github.com/lucasgelfond/Providence-City-Center-Model"
					>Plan for a Providence City Center</a
				>, a historical replica of plans by Raymond Hood built in OpenSCAD
			</li>
			<li>
				<a href="https://github.com/lucasgelfond/eth-summer-project"
					>A middleman free token-based music service built during 2021 ETH
					Summer</a
				>, based on Scaffold-ETH
			</li>
			<li>
				I maintain the website for <a href="https://theindy.org/"
					>The College Hill Independent</a>
			</li>
		</ul>
	</div>
</main>

<style>
	main {
		text-align: left;
		padding: 1em;
		size: 16px;
		line-height: 24px;
		font-family: 'IBM Plex Mono', monospace;
		font-weight: 300;
	}
	.container {
		display: block;
		width: 80vw;
	}
	h3 {
		font-weight: 500;
	}
	a {
		color: #000000;
	}
	a:hover {
		color: #041e42;
	}
</style>
