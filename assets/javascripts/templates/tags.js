riot.tag2('icons', '<ul><li each="{icon in icons}" onclick="{showInfo}"><i class="{prefix + icon.properties.name} {active: icon.active}" data-name="{prefix + icon.properties.name}"></i></li></ul><div class="gh-message-wrap {active: message.active}"><div class="gh-message">{message.name}</div></div>', '', '', function(opts) {
		var self = this;

		this.message = {};

		this.showInfo = function(e) {
			if ( e.item.icon.active ) {
				e.item.icon.active  = false;
				this.message.active = false;
				return;
			}

			this.inactiveItems();

			e.item.icon.active  = true;
			this.message.active = true;
			this.message.name   = this.prefix + e.item.icon.properties.name;
		}.bind(this)

		this.inactiveItems = function() {
			this.icons.forEach(function(item) {
				item.active = false;
			});
		}.bind(this)

		this.on( 'mount', function() {
			this.initData();
		});

		this.initData = function() {
			$.getJSON( 'assets/fonts/selection.json', function(data) {
				self.icons  = data.icons;
				self.prefix = data.preferences.fontPref.prefix;

				self.update();
			});
		}.bind(this)
});
