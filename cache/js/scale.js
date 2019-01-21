Array.prototype.last = function() {
    return this[ this.length - 1 ];
}

HTMLCanvasElement.prototype.scaleForPixelRatio = function( style ) { 
    var ctx = this.getContext( '2d' );

    var devicePixelRatio = window.devicePixelRatio || 1;
    var backingStoreRatio = ctx.webkitBackingStorePixelRatio ||
        ctx.mozBackingStorePixelRatio ||
        ctx.msBackingStorePixelRatio ||
        ctx.oBackingStorePixelRatio ||
        ctx.backingStorePixelRatio || 1;
    var ratio = devicePixelRatio / backingStoreRatio;
    
    if ( devicePixelRatio !== backingStoreRatio ) {
        var oldWidth = this.width;
        var oldHeight = this.height;

        this.width = Math.round( oldWidth * ratio );
        this.height = Math.round( oldHeight * ratio );

        if( style ) {
            this.style.width = oldWidth + 'px';
            this.style.height = oldHeight + 'px';
        }

        ctx.scale( ratio, ratio );
    }
}

function returnRandomIntBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}