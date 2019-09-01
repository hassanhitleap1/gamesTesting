Vue.component('oprationplus', {
    data: function () {
      return {
        isHide:false,
        firstNumber:1,
        secoundNumber:1,
        chooses:[],
        courectNumber:"----------------------",
        imageCorrect:false,
        tryanswer:0
      }
    },
    template: `
    <div class="row">
                <div class="col-md-2 ">
                    <img src="images/board.png" />
                    <div class="number"> {{firstNumberComputed}}</div>
                </div>    
                <div class="col-md-2">
                        <img src="images/board.png" />
                        <div class="number"> -</div>
                </div>
                <div class="col-md-2">
                        <img src="images/board.png" />
                        <div class="number"> {{secoundNumberComputed}}</div>
                    
                </div>
                <div class="col-md-2 opration">
                        <img src="images/board.png" />
                        <div class="number"> =</div>
                </div>
                <div class="col-md-2" @click="isHide=!isHide">
                        <img src="images/board.png" />
                        <div v-if="imageCorrect && (tryanswer > 0)" class="fas fa-check number"></div>
                        <div v-else-if="(tryanswer> 0)" class="fas fa-times number" ></div>
                        <div  v-if="isHide" class="number">
                            <button type="button" class="btn btn-outline-dark" v-for="choose in choosesArray" @click="getResult(choose)" >{{choose}}</button>
                        </div> 
                </div> 
            </div>`,
            computed: {
                firstNumberComputed:function(){
                    var min=1; 
                    var max=10;  
                    this.firstNumber = 
                    Math.floor(Math.random() * (+max - +min)) + +min; 
                    return this.firstNumber ;
                },
                secoundNumberComputed:function(){
                    var min=1; 
                    var max=this.firstNumber;  
                    this.secoundNumber = 
                    Math.floor(Math.random() * (+max - +min)) + +min; 
                    return this.secoundNumber ;
                },
                choosesArray :function(){
                    var min=0; 
                    var max=10;  
                    var courectNumber;
                    var postionCorrectAnswer;
    
                    let index = 0;
                    while (index < 3) {
                        randnumber=Math.floor(Math.random() * (+max - +min)) + +min; 
                        if(! this.chooses.includes(randnumber)){
                            this.chooses.push(randnumber); 
                            index++;
                        } 
                    }
                    postionCorrectAnswer= Math.floor(Math.random() * (+2 - +0)) + +0; 
                    this.courectNumber=this.firstNumber-this.secoundNumber;
                    if(! this.chooses.includes(this.courectNumber)){
                        this.chooses[postionCorrectAnswer]=this.courectNumber;
                    } 
                    return  this.chooses;
                }
            },
            methods: {
                getResult(value){    
                    this.tryanswer++;
                    this.isHide = !this.isHide
                    var audiocrrecr = new Audio("sound/yahoo.wav");
                    var audioincrrecr = new Audio("sound/downgrading.wav");                
                    if(value==this.courectNumber)
                    {
                        this.imageCorrect=true;
                        audiocrrecr.play();
                    }
                    else
                    {
                        this.imageCorrect = false;
                        audioincrrecr.play();
                    }
                    
                },
           
            },    
  });