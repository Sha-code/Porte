var app = {
    x : 0,
    init: function() {
        app.x = Math.floor(Math.random() * 1000) + 1 
        let button = document.getElementById('buttonValid');
        button.addEventListener("click", app.handleClick);  
        let message = document.getElementById('message');
        message.textContent='';
        document.getElementById('answer').value = '';
    
    },

    handleClick: function(e){
        let answer = document.getElementById('answer').value;
        document.getElementById('answer').value = '';
        answer = Number(answer);
        let message = document.getElementById('message');
        message.textContent='';
        if ( !isNaN(answer) && Number.isInteger(answer) && answer >= 1 && answer <= 1000) {
            app.isValidAnswer(answer);
        } else {
            let messageP = document.createElement('p');
            messageP.textContent = 'You did not respect rules, tou have to choose a number(interger) between 1 and 1000.';
            message.appendChild(messageP);

        }
    },

    isValidAnswer: function (userAnswer) {
        let message = document.getElementById('message');
        message.textContent='';
        let messageP = document.createElement('p');
        let buttonAgain = document.createElement('button');
        let buttonSurprise = document.createElement('button');
            if (userAnswer < app.x) {
                messageP.textContent = 'Try again, the number is bigger !';
                message.appendChild(messageP);
                return false;
            } else if (userAnswer > app.x) {
                messageP.textContent = 'Try again, the number is smaller !';
                message.appendChild(messageP);
                return false
            } else {
                messageP.textContent = 'Congratulation ! You find the good one (' + userAnswer + ') ! 👏';
                message.appendChild(messageP);
                buttonAgain.textContent = 'Play gain ?!';
                buttonAgain.addEventListener("click", app.init); 
                message.appendChild(buttonAgain)
                buttonSurprise.textContent = 'Surprise !!!'
                buttonSurprise.addEventListener("click" , app.surprise);
                message.appendChild(buttonSurprise);
                return true;
            } 
    },
     surprise: function () {
        window.location.replace('surprise.html');
     }

  };
  
  document.addEventListener('DOMContentLoaded', app.init);
