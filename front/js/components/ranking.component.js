function Ranking(selector) {
  Component.call(this, selector);
  this.numbers = [];
}

Ranking.prototype = Object.create(Component.prototype);
Ranking.constructor = Ranking;

Ranking.prototype.init = function() {
  const self = this;
  
  if(table===undefined){
    // First initialize
    table={};
    // Orginal route 'http://localhost:3000/numbers'
    axios.get('https://frontend-recruitment-task-kamilkodzi.c9users.io/numbers')
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
    
  }else{
    // next initialize
    console.log('in right place');
    
  }
  
  


};

Ranking.prototype.render = function() {
  const container = this.getDOMElement();

  this.numbers.forEach(function(number) {
      const listElement = document.createElement('li');
      listElement.classList.add('list-group-item');
      listElement.innerHTML = number.id;
      table[number.id]=0;
      container.appendChild(listElement);
  });
};