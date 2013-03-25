var demos = document.querySelectorAll('.demo');
var animated = document.querySelectorAll('.example');

Array.prototype.forEach.call(demos, function(demo) {
  demo.addEventListener('click', function(e) {
    var self = this;
    e.preventDefault();
    Array.prototype.forEach.call(animated, function(anim) {
      var asdf = self.getAttribute('href');
      asdf = asdf.slice(1);
      removeAnimationClasses(anim);
      anim.classList.add(asdf);
    });
  });
});


/**
 * Removes all classes except for .animated
 * @param  {el} el [dom element]
 * @return {Void}
 * @api private 
 */

function removeAnimationClasses (el) {
  for (var i = el.classList.length - 1; i >= 0; i--){
    if (el.classList[i] !== 'animated') {
      el.classList.remove(el.classList[i]);
    };
  };
}