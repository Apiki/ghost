<icons>
	<h2 class="gh-title">
		ICONS
	</h2>

	<ul>
		<li each={ icon in icons } onclick={ showInfo }>
			<i class="{ prefix + icon.properties.name } { active: icon.active }" data-name={ prefix + icon.properties.name }></i>
		</li>
	</ul>

	<message-text active={ item.active } text={ item.name }></message-text>

	<script>
		this.item = {};

		showInfo(e) {
			if ( e.item.icon.active ) {
				e.item.icon.active = false;
				return;
			}

			this.inactiveItems();
			e.item.icon.active = true;
			this.setMessage( e.item );
		}

		setMessage(item) {
			this.item = item.icon;
			this.item.name = this.prefix + item.icon.properties.name;
		}

		inactiveItems() {
			this.icons.forEach(function(item) {
				item.active = false;
			});
		}

		this.on( 'mount', function() {
			this.initData();
		});

		initData() {
			var self = this;

			$.getJSON( 'assets/fonts/selection.json', function(data) {
				self.icons  = data.icons;
				self.prefix = data.preferences.fontPref.prefix;

				self.update();
			});
		}
	</script>
</icons>