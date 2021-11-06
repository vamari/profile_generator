const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question( `What's your name? Nicknames are also acceptable :)`, (answer) => {
   console.log("mariya");  

  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.question( ` What's an activity you like doing?`,(response) => { 
    //  console.log( "monkey", response);
       console.log("reading");
    console.log(`Thank you for your valuable feedback: ${answer}`);

    rl.question( ` What do you listen to while doing that?`,(response) => { 
      console.log("classical music");
      
      console.log(`Thank you for your valuable feedback: ${answer}`);

      rl.question( `Which meal is your favourite (eg: dinner, brunch, etc.)`,(response) => { 
        console.log("dinner");
       
        console.log(`Thank you for your valuable feedback: ${answer}`);

        rl.question( ` What's your favourite thing to eat for that meal?`,(response) => { 
          console.log("seafood salad");
         
          console.log(`Thank you for your valuable feedback: ${answer}`);

          rl.question( ` Which sport is your absolute favourite?`,(response) => { 
            console.log("hochey");
           
            console.log(`Thank you for your valuable feedback: ${answer}`);
            
            rl.question( ` What is your superpower? In a few words, tell us what you are amazing at!`,(response) => { 
              console.log("reading peoples' minds");
            
              console.log(`Thank you for your valuable feedback: ${answer}`);
          
              rl.close(); 
          
            });
          
          });
          
        });
            
      });     
    });      
        
  });         
        
});        
        
        
      // 
//
// 
// 
// 
// 
// 
