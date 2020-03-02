// TODO: write the methods getAge, addJoke and getRandomJoke

var chuck = {
    firstName: 'Chuck',
    lastName: 'Norris',
    birthDate: new Date('1940-03-10'),
    jokes:[
      'Chuck Norris counted to infinity... Twice.',
      'Chuck Norris is the only man to ever defeat a brick wall in a game of tennis',
    ],
    displayInfo: function() {
      console.log('My name is ' + this.firstName + ' ' + this.lastName + ' and I have ' + this.jokes.length + ' jokes!')
    },
    getAge: function() {
      // TODO
      // Hint: to get the current time, you can do: new Date()
      // Hint: to get the birthDate, you can do: this.birthDate
      // Hint: you can substract 2 dates and you get the number of milliseconds
        const today = new Date();

    
        return today.getUTCFullYear() - this.birthDate.getUTCFullYear();
   
    },
    addJoke: function(joke){
      // TODO (don't return anything)
        
        this.jokes.push(joke);
    },
    getRandomJoke: function() {
      // TODO
        
        return this.jokes[Math.floor(Math.random()*this.jokes.length)]
    },
  }
  
  chuck.displayInfo()
  
  console.log('getAge', chuck.getAge()) // Should return 79 if you are in 2019
  
  chuck.addJoke('Chuck Norris can divide by zero.')
  console.log('getRandomJoke', chuck.getRandomJoke())
  chuck.addJoke('Chuck Norris kills flies with his gun.')
  console.log('getRandomJoke', chuck.getRandomJoke())
  chuck.addJoke('Chuck Norris was once in a knife fight, and the knife lost.')
  console.log('getRandomJoke', chuck.getRandomJoke())
  
  chuck.displayInfo()