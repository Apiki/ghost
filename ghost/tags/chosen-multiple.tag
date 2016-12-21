<chosen-multiple>

	<select ref="select" multiple>
		<yield/>
	</select>

	<script>
		this.on( 'mount', function() {
			jQuery( this.refs.select ).chosen( opts.attr );
		});
	</script>

</chosen-multiple>