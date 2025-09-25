
let times=0;



const syncDb=()=>{
    times++;
  console.log('Tick multiplo de 5', times);

  return times;
}

module.exports={ syncDb };