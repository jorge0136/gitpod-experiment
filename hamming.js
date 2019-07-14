export const compute = (leftStrand, rightStrand) => {

  // Handle most simple case.
  if (leftStrand === rightStrand) {
    return 0;

  // Handle disallowed input.
  } else if (leftStrand === '') {
      throw new Error('left strand must not be empty');

  } else if (rightStrand === '') {
      throw new Error('right strand must not be empty');

  } else if (leftStrand.length !== rightStrand.length) {
      throw new Error('left and right strands must be of equal length');
  }

  // CS terms: Make character-wise comparision possible by splitting each string into a char array.
  // DNA terms: Split single strands into their individual nucleobases.
  let leftStrandNucleobaseArray = leftStrand.split('');
  let rightStrandNucleobaseArray = rightStrand.split('');

  // Only safe to assume because of `if` blocks above.
  let strandLength = leftStrand.length;
  let hammingDistance = 0;

  for (var i = 0; i < strandLength; i++){
    if (leftStrandNucleobaseArray[i] === rightStrandNucleobaseArray[i]) {
        continue;
    } else {
      hammingDistance++; // Add one to distance if they do not match.
    }
  }
  return hammingDistance;
};
