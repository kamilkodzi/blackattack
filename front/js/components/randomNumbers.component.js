function RandomNumbers(selector) {
  Component.call(this, selector);
  this.numbers = [];
}

RandomNumbers.prototype = Object.create(Component.prototype);
RandomNumbers.constructor = RandomNumbers;

RandomNumbers.prototype.init = function() {
  const self = this;
// Orginal route 'http://localhost:3000/numbers'
  axios.get('https://frontend-recruitment-task-kamilkodzi.c9users.io/random-numbers')
    .then(function(response) {
      self.numbers = response.data.data.map(function(number) {
        return {
          id: number
        }
      });

      self.render();
    })
    .catch(function(error) {
      console.error(error);
    });
};