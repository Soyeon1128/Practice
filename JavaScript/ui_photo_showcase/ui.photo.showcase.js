(function(global, _){
  'use strict';

  var container     = _.selector('.photo-showcase-container');
  var showcase      = _.selector('.photo-showcase', container);
  var showcase_view = _.selector('img', showcase);
  var indicators    = _.selectorAll('.photo-showcase-indicator', container);

  var setPhotoShowcase = function() {
    var indicator_img = _.selector('img', this);
    var index = indicator_img.src.split('=')[1];
    var path = showcase_view.src.split('=')[0] + '=' + index;
    showcase_view.src = path;
    return false;
  };

  for ( var i=0, l=indicators.length; i<l; ++i ) {
    var indicator = indicators.item(i);
    indicator.onclick = setPhotoShowcase;
  }

})(window, window.FDS);