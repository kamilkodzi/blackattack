const ranking = new Ranking('#numbers-ranking');
ranking.init();


const random = new RandomNumbers('#numbers-random');
random.init();


const randomLoop = function(){
    setTimeout(function(){
       random.init();
    },2000);
    // callback(randomLoop());
    randomLoop();
};
// setInterval(()=>{
//     // random.clearUl();
//     random.init();
// }, 2000);

