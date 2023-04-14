class Timer{ 
    constructor(durationInput, startButton, pauseButton, callbacks){
        this.durationInput =durationInput;
        this.startButton = startButton;
        //this.timeleft=30;
        this.pauseButton = pauseButton;
        if(callbacks){
            this.onStart =callbacks.onStart;
            this.onTick=callbacks.onTick;
            this.onComplete =callbacks.onComplete;
        }

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);

    }

        start = () => {
            if(this.onStart){
                this.onStart(this.timeRemaining);

            }
            //call the tick function
            this.tick();
          
            //this gives an interval of one second after the tick function has been called
           this.intervalId = setInterval(this.tick, 1000);
           
        };
        pause = () => {
            clearInterval(this.intervalId)

        }
  

        //this is the tick function that will be called
        tick =() =>{
            if(this.timeRemaining <= 0){
                this.pause();
                if(this.onComplete){
                   
                    this.onComplete();
                }
            } else {
              this.timeRemaining =this.timeRemaining -0.05;
              if(this.onTick){
                this.onTick(this.timeRemaining);
              }
            }
            };
            //this.timeLeft =this.timeleft--;
        
            //this.durationInput.value= this.timeLeft;
          //  this.durationInput.value = timeRemaining-1;
           // console.log('tick');
        //};
        get timeRemaining(){
            return parseFloat(this.durationInput.value);
        }
   set timeRemaining(time){
    this.durationInput.value = time.toFixed(2);
   }
    
   }
