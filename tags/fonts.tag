<fonts>
	<h2 class="gh-title">
		FONTS
	</h2>

	<div class="gh-fonts-list">
		<div class="gh-font" each={ variations, font in fonts }>
			<strong>{ font }</strong>

			<div class="gh-font-info { 'gh-' + value }" each={ value, name in variations }>
				<strong>{ name }</strong><span>{ value }</span>
			</div>
		</div>
	</div>

<script>
	this.on( 'mount', function() {
		this.initData();
	});

	initData() {
		this.fonts = $( this.root ).sassToJs( { pseudoEl: ':before', cssProperty: 'content' } );
		this.update();
	}
</script>
</fonts>