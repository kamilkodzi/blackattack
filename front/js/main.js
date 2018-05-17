const ranking = new Ranking('#numbers-ranking');
ranking.init();


const random = new RandomNumbers('#numbers-random');
setInterval(()=>random.init(), 1000);
