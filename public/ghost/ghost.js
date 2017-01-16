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
riot.tag2('icons', '<h2 class="gh-title"> ICONS </h2><ul><li each="{icon in icons}" onclick="{showInfo}"><i class="{prefix + icon.properties.name} {active: icon.active}" data-name="{prefix + icon.properties.name}"></i></li></ul><message-text active="{item.active}" text="{item.name}"></message-text>', '', '', function(opts) {
		this.item = {};

		this.showInfo = function(e) {
			if ( e.item.icon.active ) {
				e.item.icon.active = false;
				return;
			}

			this.inactiveItems();
			e.item.icon.active = true;
			this.setMessage( e.item );
		}.bind(this)

		this.setMessage = function(item) {
			this.item = item.icon;
			this.item.name = this.prefix + item.icon.properties.name;
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
			var self = this;

			$.getJSON( 'assets/fonts/selection.json', function(data) {
				self.icons  = data.icons;
				self.prefix = data.preferences.fontPref.prefix;

				self.update();
			});
		}.bind(this)
});
riot.tag2('message-text', '<div class="gh-message-wrap {active: opts.active}"><div class="gh-message">{opts.text} <button class="gh-btn-copy {active: message.tooltipActive}" data-clipboard-text="{opts.text}" onclick="{showTooltip}" onmouseleave="{hideTooltip}">Copy!</button></div></div>', '', '', function(opts) {
		this.message = {
			tooltipActive: false
		}

		this.on( 'mount', function() {
			new Clipboard( this.root.querySelector( '.gh-btn-copy' ) );
		})

		this.showTooltip = function(e) {
			this.message.tooltipActive = true;
		}.bind(this)

		this.hideTooltip = function(e) {
			this.message.tooltipActive = false;
		}.bind(this)
});
riot.tag2('search-component', '<div class="gh-wrapper gh-search-wrap"><div class="gh-container"><div class="gh-search"><div class="label">Search Components</div><input type="search" placeholder="ex: btn, form, table..." ref="term" onsearch="{search}" onkeyup="{search}"></div></div></div>', '', '', function(opts) {
		this.search = function(e) {
			var container = $( '.gh-components' );
			var filter    = this.refs.term.value;

			if ( ! filter ) {
				container.isotope({ filter: '*' });
				return;
			}

			container.isotope({
				filter: '[data-filter*='+ filter +']'
			});
		}.bind(this)
});
;jQuery(function($) {
	$( '.gh-components' ).isotope({
		itemSelector: '.gh-box',
		percentPosition: true,
		masonry: {
			gutter: '.gh-gutter',
		}
	});
});;jQuery(function($) {
	riot.mount( '*' );
});