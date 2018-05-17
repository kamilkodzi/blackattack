function RandomNumbers(selector) {
  Component.call(this, selector);
  this.numbers = [];
}

RandomNumbers.prototype = Object.create(Component.prototype);
RandomNumbers.constructor = RandomNumbers;

RandomNumbers.prototype.init = function(inLoop) {
  const start = new Date().getTime();
  let end;
  const self = this;
// Orginal route 'http://localhost:3000/numbers'
  axios.get('https://frontend-recruitment-task-kamilkodzi.c9users.io/random-numbers')
    .then(function(response) {
      self.numbers = response.data.data.map(function(number) {
        return {
          id: number
        }
      });
      self.clearUl();
      self.render();
      
      
    })
    .then(function(){end = new Date().getTime()})
    .then(function(){if(inLoop===true){setTimeout(function(){self.init(true)},5000-(end-start))}})
    .then(function(){ranking.init()})
    .catch(function(error) {
      console.error(error);
    });
};

RandomNumbers.prototype.render = function() {
  const container = this.getDOMElement();
  
  this.numbers.forEach(function(number) {
      const listElement = document.createElement('li');
      listElement.classList.add('list-group-item');
      listElement.innerHTML = number.id;

      container.appendChild(listElement);
  });

};

