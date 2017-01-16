<message-text>

	<div class="gh-message-wrap { active: opts.active }">
		<div class="gh-message">{ opts.text } <button class="gh-btn-copy { active: message.tooltipActive }" data-clipboard-text={ opts.text } onclick={ showTooltip } onmouseleave={ hideTooltip }>Copy!</button></div>
	</div>

	<script>
		this.message = {
			tooltipActive: false
		}

		this.on( 'mount', function() {
			new Clipboard( this.root.querySelector( '.gh-btn-copy' ) );
		})

		showTooltip(e) {
			this.message.tooltipActive = true;
		}

		hideTooltip(e) {
			this.message.tooltipActive = false;
		}
	</script>

</message-text>