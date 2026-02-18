// 27. Split an Array into Chunks

// 1. Using slice() Method 

{
  let a = [10, 20, 30, 40, 50, 60, 70];
  let chunk = 4;

  let a1 = a.slice(0, chunk);
  let a2 = a.slice(chunk, chunk + a.length);

  console.log("Array 1 :" + a1 + "\nArray 2: " + a2);
}

// 2. Using splice() Method

{
  let a = [10, 20, 30, 40, 50, 60, 70, 80];

  let chunk = 2;

  // Spliced arrays into 4 chunks
  let a1 = a.splice(0, chunk);
  let a2 = a.splice(0, chunk);
  let a3 = a.splice(0, chunk);
  let a4 = a.splice(0, chunk);

  // Display Output
  console.log("Array 1:", a1);
  console.log("Array 2:", a2);
  console.log("Array 3:", a3);
  console.log("Array 4:", a4);
}

// 4. Using JavaScript for Loop

{
  // Given array
  let a = [10, 20, 30, 40, 50, 60, 70, 80];

  // Size of chunk
  let chunkSize = 2;

  // Initialize the output array
  let chunks = [];

  // Loop to split array into chunks
  for (let i = 0; i < a.length; i += chunkSize) {
    let chunk = [];

    // Iterate for the size of chunk
    for (let j = i; j < i + chunkSize && j < a.length; j++) {
      chunk.push(a[j]);
    }

    // push the chunk to output array
    chunks.push(chunk);
  }

  // Display Output
  console.log("Chunks:", chunks);
}

// 5. Using reduce() with slice() Method

{
  // Given array
  let a = [10, 20, 30, 40, 50, 60, 70, 80];

  // Size of chunk
  let chunkSize = 2;

  // Split the array into chunks using reduce
  let chunks = a.reduce((acc, _, index) => {
    // Create chunk using array.slice()
    // and push into the accumulator
    acc.push(a.slice(index, index + chunkSize));

    return acc;
  }, []);

  // Display Output
  console.log("Chunks:", chunks);
}
