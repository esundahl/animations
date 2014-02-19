
var collections = [
  {repo: 'attention-seekers', label: 'Attention seeking animations'},
  {repo: 'bouncing-entrances', label: 'Bouncing entrance animations'},
  {repo: 'bouncing-exits', label: 'Bouncing exit animations'},
  {repo: 'fading-entrances', label: 'Fading entrance animations'},
  {repo: 'fading-exits', label: 'Fading exit animations'},
  {repo: 'flippers', label: 'Flipper Animations'},
  {repo: 'light-speed', label: 'Light speed animations'},
  {repo: 'rotating-entrances', label: 'Rotating entrance animations'},
  {repo: 'rotating-exits', label: 'Rotating exit animations'},
  {repo: 'specials', label: 'Special animations'}
]

collections.forEach(function(coll){
  var config = require('./components/esundahl-' + coll.repo + '/component.json')
  console.log('### [' + coll.label + '](https://github.com/esundahl/' + coll.repo + ')')
  console.log()
  console.log('    $ component install esundahl/' + coll.repo)
  console.log()
  console.log('This collection contains the individual animations:')
  console.log()
  for (var dep in config.dependencies){
    var animation = dep.split('/')[1]
    console.log('* [' + animation + '](https://github.com/esundahl/' + dep + ')')
  }
  console.log()
})