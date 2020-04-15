window.addEventListener('load', init);

function init() {
  var scene = document.getElementById('scene');
  var parallaxInstance = new Parallax(scene);
}

var choreographer = new Choreographer({
  animations: [
    {
      range: [-1, window.innerHeight * 4],
      selector: '#lines',
      type: 'scale',
      style: 'opacity',
      from: 0.2,
      to: 1
    }
  ]
})

window.addEventListener('scroll', function() {
  choreographer.runAnimationsAt(window.pageYOffset)
})