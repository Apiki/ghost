<chosen>

	<select ref="select">
		<yield/>
	</select>

	<script>
		this.on( 'mount', function() {
			jQuery( this.refs.select ).chosen( opts.attr );
		});
	</script>

</chosen>