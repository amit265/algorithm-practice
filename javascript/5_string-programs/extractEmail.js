// 37. Extract Email Addresses from a String

// Using Regular Expressions

const email = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;

{
  function extract(str) {
    return str.match(email);
  }

  const str = "My email address is amit@gmail.com";
  console.log(extract(str));
}

// Splitting and Filtering

{
  function extract(str) {
    const words = str.split(" ");
    const valid = words.filter((word) => {
      return email.test(word);
    });
    return valid;
  }

  const str = "my email is amitk.kumar414@gmail.com";
  console.log(extract(str));
}

// Using String Matching and Validation

{
  function isValid(str) {
    return email.test(str);
  }

  function extract(str) {
    const words = str.split(" ");
    const email = [];
    for (const word of words) {
      if (isValid(word)) {
        email.push(word);
      }
    }

    return email;
  }

  const str = "my email is amit@google.com";
  console.log(extract(str));
}




// Using a Custom Parser


{
    function extractEmails(text){
        const emails = [];
        const words = text.split(/\s+/);

        for(let word of words) {
            if(word.includes('@')) && word.includes(".") ) {

            }
 {}        }
    }
}