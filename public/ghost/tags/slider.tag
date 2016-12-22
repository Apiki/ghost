<slider>

	<div ref="slider" class="swiper-slider">
		<div class="swiper-wrapper">
			<yield/>
		</div>

		<div class="swiper-slider-controls">
			<button class="swiper-btn-prev" type="button">Anterior</button>
			<button class="swiper-btn-next" type="button">Próximo</button>
		</div>
	</div>

	<script>
		this.on( 'mount', function() {
			this.slider = new Swiper( this.refs.slider, this.getAttr() );
		});

		getAttr() {
			return jQuery.extend({
				nextButton   : '.swiper-btn-next',
				prevButton   : '.swiper-btn-prev',
				spaceBetween : this.opts.space,
				initialSlide : this.opts.initial || 0
			}, this.opts.attr || {} );
		}
	</script>

</slider>