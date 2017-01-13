<search-component>

	<div class="gh-wrapper gh-search-wrap">
		<div class="gh-container">
			<div class="gh-search">
				<input type="search" ref="term" onkeyup={ search }>
				<button onclick={ search }>search component</button>
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