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
    table=[];
    axios.get('http://localhost:3000/numbers')
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
    self.clearUl();
    table.sort(compareSecondColumn);
    self.render(table);
  }

};

Ranking.prototype.render = function(sortedArray) {
  const container = this.getDOMElement();
  if(sortedArray){
    sortedArray.forEach(function(number){
    const listElement = document.createElement('li');
    listElement.classList.add('list-group-item');
    listElement.innerHTML = Number(number[0]);
    container.appendChild(listElement);
    });
  }else{
    this.numbers.forEach(function(number) {
    const listElement = document.createElement('li');
    listElement.classList.add('list-group-item');
    listElement.innerHTML = number.id;
    table.push([[number.id],0]);
    container.appendChild(listElement);
    });
  }
};