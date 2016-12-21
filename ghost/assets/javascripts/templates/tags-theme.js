riot.tag2('chosen-multiple', '<select ref="select" multiple><yield></yield></select>', '', '', function(opts) {
		this.on( 'mount', function() {
			jQuery( this.refs.select ).chosen( opts.attr );
		});
});
riot.tag2('chosen', '<select ref="select"><yield></yield></select>', '', '', function(opts) {
		this.on( 'mount', function() {
			jQuery( this.refs.select ).chosen( opts.attr );
		});
});
riot.tag2('slider', '<div ref="slider" class="swiper-slider"><div class="swiper-wrapper"><yield></yield></div><div class="swiper-slider-controls"><button class="swiper-btn-prev" type="button">Anterior</button><button class="swiper-btn-next" type="button">Próximo</button></div></div>', '', '', function(opts) {
		this.on( 'mount', function() {
			this.slider = new Swiper( this.refs.slider, this.getAttr() );
		});

		this.getAttr = function() {
			return jQuery.extend({
				nextButton   : '.swiper-btn-next',
				prevButton   : '.swiper-btn-prev',
				spaceBetween : this.opts.space,
				initialSlide : this.opts.initial || 0
			}, this.opts.attr || {} );
		}.bind(this)
});
