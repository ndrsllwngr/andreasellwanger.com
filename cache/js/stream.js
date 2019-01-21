var M = { debug: false };

M.stage = {
	canvas: undefined,
	context: undefined,
	size: {
		width: undefined,
		height: undefined
	},
	pixelRatio: window.devicePixelRatio || 1,
	params: {
		canvas: {
			id: 'stream',
			clearColor: '#ffffff'
		},
		context: {
			type: '2d'
		}
	},
	build: function() {
		this.canvas = document.getElementById( this.params.canvas.id );
		this.context = this.canvas.getContext( this.params.context.type );
	},
	clear: function() {
		this.context.clearRect( 0, 0, this.canvas.width, this.canvas.height );
	}
};

M.streamlet = function( x, y, length, weight, color ) {
	this.x = x;
	this.y = y;
	this.length = length;
	this.weight = weight;
	this.color = color;

	this.render = function() {
		M.stage.context.beginPath();
      	M.stage.context.moveTo( this.x, this.y );
      	M.stage.context.lineTo( this.x + this.length, this.y );
      	M.stage.context.lineWidth = this.weight;

      	M.stage.context.strokeStyle = this.color;
      	M.stage.context.stroke();
	};
};

M.stream = {
	streamlets: undefined,
	params: {
		streamlets: {
			color: '#a31f34',
			weight: 2,
			speed: 0.3,
			minLength: 10,
			maxLength: 40,
			populationSpeed: 0.005
		}
	},
	add: function() {
		var last =  this.streamlets.last();
		var x = last.x + last.length;
		var y = returnRandomIntBetween( this.params.streamlets.weight, M.stage.size.height - this.params.streamlets.weight )
		var length = returnRandomIntBetween( this.params.streamlets.minLength, this.params.streamlets.maxLength );

		var streamlet = new M.streamlet( x, y, length, this.params.streamlets.weight, this.params.streamlets.color );

		this.streamlets.push( streamlet );
	},
	regulate: function() {
		if( this.length() < M.stage.size.width ) {
			this.add();
			M.stream.regulate();
		}

		for( var z = 0; z < this.streamlets.length; z++ ) {
			var streamlet = this.streamlets[ z ];
			if( ( streamlet.x + streamlet.length ) < 0 ) this.streamlets.splice( z, 1 );
		}
	},
	update: function() {
		for( var z = 0; z < this.streamlets.length; z++ ) {
			var streamlet = this.streamlets[ z ];
			streamlet.x -= M.stream.params.streamlets.speed;

			streamlet.render();
		}

		this.regulate();
	},
	build: function() {
		this.streamlets = [ new M.streamlet( 0, M.stage.canvas.height / 2, 12, this.params.streamlets.weight, this.params.streamlets.color ) ];

		this.regulate();
	},
	length: function() {
		var streamlet = this.streamlets.last();
		return streamlet.x + streamlet.length;
	}
};

M.events = {
	resize: function() {
		M.stage.canvas.width = M.stage.canvas.offsetWidth;
		M.stage.canvas.height = M.stage.canvas.offsetHeight;

		M.stage.canvas.scaleForPixelRatio( false );

		M.stage.size.width = M.stage.canvas.offsetWidth;
		M.stage.size.height = M.stage.canvas.offsetHeight;
	},
	build: function() {
		this.resize();

		window.addEventListener( 'resize', M.events.resize, false );
	}
};

M.animation = {
	frame: undefined,
	start: function() {
		this.step();
	},
	stop: function() {
		cancelRequestAnimFrame( this.frame );
		this.frame = undefined;
	},
	step: function() {
		this.frame = requestAnimationFrame( this.step.bind( this ) );

		M.stage.clear();
		M.stream.update();
	}
};

(function() {
	M.stage.build();

	M.events.build();

	M.stream.build();

	M.animation.start();
})();
