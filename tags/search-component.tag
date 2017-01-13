<search-component>

	<div class="gh-wrapper gh-search-wrap">
		<div class="gh-container">
			<div class="gh-search">
				<div class="label">Search Components</div>
				<input type="search" placeholder="ex: btn, form, table..." ref="term" onsearch={ search } onkeyup={ search }/>
			</div>
		</div>
	</div>

	<script>
		search(e) {
			var container = $( '.gh-components' );
			var filter    = this.refs.term.value;

			if ( ! filter ) {
				container.isotope({ filter: '*' });
				return;
			}

			container.isotope({
				filter: '[data-filter*='+ filter +']'
			});
		}
	</script>

</search-component>