let table;

const ranking = new Ranking('#numbers-ranking');
ranking.init();

const random = new RandomNumbers('#numbers-random');
// If we run init with true param it will loop every 2 seconds
setTimeout(function(){random.init(true)},2000);

