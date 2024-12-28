class NonIntegerError extends Error {}
class OutOfRangeError extends Error {}

function zeriuni(n) {
    if (!Number.isInteger(n)) {
        throw new NonIntegerError();
    }

    if (n < 0 || n > 255) {
        throw new OutOfRangeError();
    }

    let binaryString = n.toString(2).padStart(8, '0');
    let bitArray = binaryString.split('').map(Number);
    return bitArray;
}
