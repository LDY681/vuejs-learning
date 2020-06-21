var vm = new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameState: false,
        specAttackAvailable: false,
        gameLog: [],
    },
    methods: {
        startGame: function(){
            this.gameState = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.specAttackAvailable = false;
            this.gameLog = [];
        },
        attack: function(){
            let monsterDamage = getRandomInRange(0,20);
            this.playerHealth -= monsterDamage;
            this.gameLog.unshift({
                message: "[怪兽攻击]玩家受到怪兽的" + monsterDamage + "点伤害", 
                type: 'monsterAttack',
                color: 'red',
            });
            let playerDamage = getRandomInRange(0,25);
            this.monsterHealth -= playerDamage;
            this.gameLog.unshift({
                message: "[普通攻击]玩家对怪兽造成" + playerDamage + "点伤害", 
                type: 'playerAttack',
                color: 'brown',
            });
            this.specAttackAvailable = Math.round(Math.random())?false:true;
        },
        specAttack: function(){
            if (this.specAttackAvailable === true){
                let monsterDamage = getRandomInRange(0,20);
                this.playerHealth -= monsterDamage;
                this.gameLog.unshift({
                    message: "[怪兽攻击]玩家受到怪兽的" + monsterDamage + "点伤害", 
                    type: 'monsterAttack',
                    color: 'red',
                });
                let playerDamage = getRandomInRange(0,50);
                this.monsterHealth -= playerDamage;
                this.gameLog.unshift({
                    message: "[特殊攻击]玩家对怪兽造成" + playerDamage + "点伤害", 
                    type: 'playerSpecAttack',
                    color: 'purple',
                });
                this.specAttackAvailable = Math.round(Math.random())?false:true;
            }else{
                alert("您当前无法使用特殊攻击!");
            }
        },
        heal: function(){
            let playerHeal = getRandomInRange(0,50);
            this.playerHealth += playerHeal;
            this.gameLog.unshift({
                message: "[恢复]玩家恢复" + playerHeal + "点体力", 
                type: 'playerHeal',
                color: 'green',
            });
            let monsterDamage = getRandomInRange(0,20);
            this.playerHealth -= monsterDamage;
            this.gameLog.unshift({
                message: "[怪兽攻击]玩家受到怪兽的" + monsterDamage + "点伤害", 
                type: 'monsterAttack',
                color: 'red',
            });
            if (this.playerHealth > 100){
                this.playerHealth = 100;
            }
        },
    },
    watch: {
        playerHealth: function(){
            if (this.playerHealth <= 0){
                if (confirm("您输了!是否再来一局?")){
                    this.startGame();
                }else{
                    this.gameState = false;
                    this.gameLog = [];
                }
            }
        },
        monsterHealth: function(){
            if (this.monsterHealth <= 0){
                if (confirm("您赢了!是否再来一局?")){
                    this.startGame();
                }else{
                    this.gameState = false;
                    this.gameLog = [];
                }
            }
        }
    },
})

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  