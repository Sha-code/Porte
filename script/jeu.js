const app = {
    x: 0,
    init() {
      app.x = Math.floor(Math.random() * 1000) + 1;
      const button = document.getElementById('buttonValid');
      button.addEventListener('click', app.handleClick);
      const message = document.getElementById('message');
      message.textContent = '';
      document.getElementById('answer').value = '';
    },
  
    handleClick(e) {
      let answer = document.getElementById('answer').value;
      document.getElementById('answer').value = '';
      answer = Number(answer);
      const message = document.getElementById('message');
      message.textContent = '';
      if (!isNaN(answer) && Number.isInteger(answer) && answer >= 1 && answer <= 1000) {
        app.isValidAnswer(answer);
      } else {
        const messageP = document.createElement('p');
        messageP.textContent = 'You did not respect rules, tou have to choose a number(interger) between 1 and 1000.';
        message.appendChild(messageP);
      }
    },
  
    isValidAnswer(userAnswer) {
      const message = document.getElementById('message');
      message.textContent = '';
      const messageP = document.createElement('p');
      const buttonAgain = document.createElement('button');
      const buttonSurprise = document.createElement('button');
      if (userAnswer < app.x) {
        messageP.textContent = 'Try again, the number is bigger !';
        message.appendChild(messageP);
        return false;
      } if (userAnswer > app.x) {
        messageP.textContent = 'Try again, the number is smaller !';
        message.appendChild(messageP);
        return false;
      }
      messageP.textContent = `Congratulation ! You find the good one (${userAnswer}) ! 👏`;
      message.appendChild(messageP);
      buttonAgain.textContent = 'Play gain ?!';
      buttonAgain.addEventListener('click', app.init);
      message.appendChild(buttonAgain);
      buttonSurprise.textContent = 'Surprise !!!';
      buttonSurprise.addEventListener('click', app.surprise);
      message.appendChild(buttonSurprise);
      return true;
    },
    surprise() {
      window.location.replace('colordraw/index.html');
    },
  
  };
  
  document.addEventListener('DOMContentLoaded', app.init);