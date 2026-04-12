// 14. JavaScript | Encode/Decode a string to Base64

// 1. btoa() Method

// window.btoa( String )

function encodeStr() {
  console.log(btoa(str1));
}

const str1 = "This is amit";
encodeStr();

// 2. atob() Method

//window.atob( String )
function decodeStr() {
  console.log(atob(str2));
}

const str2 = "VGhpcyBpcyBhbWl0";
decodeStr();
