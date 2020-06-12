new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameState: false,
        specAttackAvailable: false,
    },
    methods: {
        startGame: function(){
            this.gameState = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.specAttackAvailable = false;
        },
        attack: function(){
            this.playerHealth -= getRandomInRange(0,20);
            this.monsterHealth -= getRandomInRange(0,25);
            this.specAttackAvailable = Math.round(Math.random())?false:true;
        },
        specAttack: function(){
            if (this.specAttackAvailable === 1){
                this.playerHealth -= getRandomInRange(0,20);
                this.monsterHealth -= getRandomInRange(0,50);
            }else{
                alert("您当前无法使用特殊攻击!");
            }
        },
        heal: function(){
            this.playerHealth += getRandomInRange(0,50) -= getRandomInRange(0,20);
        }
    },
})

function getRandomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }
  