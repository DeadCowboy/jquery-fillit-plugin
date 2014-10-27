/**
 * @title FillIt
 * @description FillIt is a simple plugin for jQuery that proportionately fills a container element by sizing up the child element.
 * @version 0.0.1
 * @author Richard Nelson
 * @github https://github.com/DeadCowboy
 */

(function( $ ) {

	$.fn.fillit = function( command ) {
		
		// ----- PRIVATE VARS ----- //

		// ----- PRIVATE FUNCTIONS ----- //
		var processElement = function( $elem ) {
			console.log( "processElement" );

			// Vars
			var naturalWidth;
			var naturalHeight;

			// Get Natural Dimensions from Data
			if ( $elem.data( "natural-width" ) && $elem.data( "natural-height" ) ) {

				console.info( "Getting image dimensions from data..." );

				naturalWidth = parseInt( $elem.data( "natural-width" ) );
				naturalHeight = parseInt( $elem.data( "natural-height" ) );

				fillContainer( $elem, naturalWidth, naturalHeight );

			// Get Natural Dimensions from Attributes
			} else if ( $elem[0].naturalWidth && $elem[0].naturalHeight ) {

				console.info( "Getting image dimensions from element attribute natural..." );

				naturalWidth = $elem[0].naturalWidth;
				naturalHeight = $elem[0].naturalHeight;

				setDimensions( $elem, naturalWidth, naturalHeight );
				fillContainer( $elem, naturalWidth, naturalHeight );

			// Get Natural Dimensions from Image
			} else {

				var img = new Image();

				img.onload = function() {

					// Modern Browsers
					if ( img.naturalWidth && img.naturalHeight ) {

						console.info( "Getting image dimensions from image object natural..." );

						naturalWidth = img.naturalWidth;
						naturalHeight = img.naturalHeight;

					// IE8
					} else {

						console.info( "Getting image dimensions from image object legacy..." );

						naturalWidth = img.width;
						naturalHeight = img.height;

					}

					setDimensions( $elem, naturalWidth, naturalHeight );
					fillContainer( $elem, naturalWidth, naturalHeight );

				}

				img.src = $elem.attr( "src" );

			}

		};

		var setDimensions = function( $elem, naturalWidth, naturalHeight ) {
			console.log( "setDimensions" );

			// Set Element Data
			$elem.data( "natural-width", naturalWidth );
			$elem.data( "natural-height", naturalHeight );

		};

		var fillContainer = function( $elem, naturalWidth, naturalHeight ) {
			console.log( "fillContainer" );

			// Vars
			var containerWidth = $elem.parent().width();
			var containerHeight = $elem.parent().height();

			console.info( "Container Dimensions: " + containerWidth, containerHeight );
			console.info( "Image Dimensions: " + naturalWidth, naturalHeight );

			var nWidth;
			var nHeight;
			var nX;
			var nY;

			// Fill Width, Crop Height
			if ( naturalWidth / naturalHeight < containerWidth / containerHeight ) {

				nWidth = containerWidth;
				nHeight = containerWidth * naturalHeight / naturalWidth;

				nX = 0;
				nY = -( nHeight - containerHeight ) / 2;

			// Fill Height, Crop Width
			} else {

				nWidth = containerHeight * naturalWidth / naturalHeight;
				nHeight = containerHeight;
				
				nX = -( nWidth - containerWidth ) / 2;
				nY = 0;
				
			}

			// Set CSS
			$elem.css( {
				position: "absolute",
				width: nWidth,
				height: nHeight,
				left: nX,
				top: nY			
			} );

		};

		var destroy = function( $elem ) {
			console.log( "destroy" );

			// Set CSS
			$elem.css( {
				position: "",
				width: "",
				height: "",
				left: "",
				top: ""			
			} );

		};

		// ----- CALL ----- //
		if ( command === "destroy" )
			destroy( this );
		else 
			processElement( this );

		// ----- RETURN ----- //
		return this;

	}

}( jQuery ));

