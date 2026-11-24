
      // Operations: Object Access, Invocation
      console.log("What's your name?");

      // Operations: On Event, process for new data when it arrives.
      process.stdin.on('data', function(data) {

          // Operations: naming the new variable , name
          // turn new data into a string and remove white spaces
          const name = data.toString().trim();
          
          // Operations: print to console a set string " Hellow
          // with the element string variable value
          console.log(`Hello, ${name}!`);

      });