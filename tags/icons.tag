<icons>
	<ul>
		<li each={ icon in icons } onclick={ showInfo }>
			<i class="{ prefix + icon.properties.name } { active: icon.active }" data-name={ prefix + icon.properties.name }></i>
		</li>
	</ul>

	<div class="gh-message-wrap { active: message.active }">
		<div class="gh-message">{ message.name } <button class="gh-btn-copy" data-clipboard-text={ message.name }>Copy!</button></div>
	</div>

	<script>
		var self = this;

		this.message = {};

		showInfo(e) {
			if ( e.item.icon.active ) {
				e.item.icon.active  = false;
				this.message.active = false;
				return;
			}

			this.inactiveItems();

			e.item.icon.active  = true;
			this.message.active = true;
			this.message.name   = this.prefix + e.item.icon.properties.name;
		}

		inactiveItems() {
			this.icons.forEach(function(item) {
				item.active = false;
			});
		}

		this.on( 'mount', function() {
			this.initData();
			this.addEventsClipboard();
		});

		addEventsClipboard() {
			var btn = this.root.querySelector( 'button' );

			new Clipboard( btn );

			btn.addEventListener( 'click', function() {
				this.classList.add( 'active' );
			});

			btn.addEventListener( 'mouseleave', function() {
				this.classList.remove( 'active' );
			});
		}

		initData() {
			$.getJSON( 'assets/fonts/selection.json', function(data) {
				self.icons  = data.icons;
				self.prefix = data.preferences.fontPref.prefix;

				self.update();
			});
		}
	</script>
</icons>