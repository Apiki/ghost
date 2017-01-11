riot.tag2('colors', '<h2 class="gh-title"> COLORS </h2><div class="gh-color-list"><div class="gh-color" each="{variations, color in colors}"><div class="gh-label">{color}</div><ul><li each="{value, name in variations}"><div class="gh-color-background" riot-style="background: {value}"></div><div class="gh-color-info"><div class="gh-color-hex">{value}</div><div class="gh-color-name">{name}</div></div></li></ul></div></div>', '', '', function(opts) {
		this.on( 'mount', function() {
			this.initData();
		});

		this.initData = function() {
			this.colors = $( this.root ).sassToJs( { pseudoEl: ':before', cssProperty: 'content' } );
			this.update();
		}.bind(this)
});
riot.tag2('fonts', '<h2 class="gh-title"> FONTS </h2><div class="gh-fonts-list"><div class="gh-font" each="{variations, font in fonts}"><strong>{font}</strong><div class="gh-font-info {\'gh-\' + value}" each="{value, name in variations}"><strong>{name}</strong><span>{value}</span></div></div></div>', '', '', function(opts) {
	this.on( 'mount', function() {
		this.initData();
	});

	this.initData = function() {
		this.fonts = $( this.root ).sassToJs( { pseudoEl: ':before', cssProperty: 'content' } );
		this.update();
	}.bind(this)
});
riot.tag2('icons', '<ul><li each="{icon in icons}" onclick="{showInfo}"><i class="{prefix + icon.properties.name} {active: icon.active}" data-name="{prefix + icon.properties.name}"></i></li></ul><div class="gh-message-wrap {active: message.active}"><div class="gh-message">{message.name} <button class="btn" data-clipboard-text="{message.name}">Copy!</button></div></div>', '', '', function(opts) {
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

			new Clipboard( this.root.querySelector( 'button' ) );
		});

		this.initData = function() {
			$.getJSON( 'assets/fonts/selection.json', function(data) {
				self.icons  = data.icons;
				self.prefix = data.preferences.fontPref.prefix;

				self.update();
			});
		}.bind(this)
});
;jQuery(function($) {
	$( '.gh-components' ).masonry({
		gutter: '.gh-gutter',
		itemSelector: '.gh-box',
		percentPosition: true
	});
});;jQuery(function($) {
	riot.mount( '*' );
});