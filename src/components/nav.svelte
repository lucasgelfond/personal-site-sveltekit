<div class="nav">
	<a href="/">about</a> <span class="nav-divider">•</span>
	<a href="/writing">writing</a>
	<span class="nav-divider">•</span>
	<a href="/technical">technical work</a> <br />
</div>
<br class="nav-divider" />

<style>
	@media all and (max-width: 600px) {
		.nav {
			flex-direction: column;
		}
		.nav-divider {
			display: none;
		}
	}
	@media all and (min-width: 601px) {
		.nav {
			flex-direction: row;
			gap: 6px;
		}
	}

	.nav {
		display: flex;
	}

	a {
		color: #000000;
		text-decoration: underline;
	}
	a:hover {
		color: #041e42;
	}
</style>
