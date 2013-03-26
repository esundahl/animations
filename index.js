

/**
 * Animation Demo Functionality
 */

var demos = document.querySelectorAll('.demo');
var animated = document.querySelectorAll('.example');

Array.prototype.forEach.call(demos, function(demo) {
  demo.addEventListener('click', function(e) {
    var self = this;
    e.preventDefault();
    Array.prototype.forEach.call(animated, function(anim) {
      var asdf = self.getAttribute('href');
      asdf = asdf.slice(1);
      for (var i = anim.classList.length - 1; i >= 0; i--){
        if (anim.classList[i] !== 'animated') {
          anim.classList.remove(anim.classList[i]);
        };
      };
      anim.classList.add(asdf);
    });
  });
});