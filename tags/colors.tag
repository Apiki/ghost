<colors>
	<h2 class="gh-title">
		COLORS
	</h2>

	<div class="gh-color-list">
		<div class="gh-color" each={ variations, color in colors }>
			<div class="gh-label">{ color }</div>

			<ul>
				<li each={ value, name in variations }>
					<div class="gh-color-background" style="background: { value }"></div>

					<div class="gh-color-info">
						<div class="gh-color-hex">{ value }</div>

						<div class="gh-color-name">{ name }</div>
					</div>
				</li>
			</ul>
		</div>
	</div>

	<script>
		this.on( 'mount', function() {
			this.initData();
		});

		initData() {
			this.colors = $( this.root ).sassToJs( { pseudoEl: ':before', cssProperty: 'content' } );
			this.update();
		}
	</script>
</colors>