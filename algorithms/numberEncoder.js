

class Encoder {
    constructor() {
        // an array with with the aphabet and number
      this.DICTIONARY = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789".split('');
    }

    encodeId(num) {
      let parsedNum =   Number.parseInt(num);
        if(!Number.isInteger(parsedNum)) throw new Error("the input was not a number") ;
        const base = this.DICTIONARY.length;
        let enconded = "";
        if (parsedNum === 0) {
            return this.DICTIONARY[0];
        }
        while (parsedNum > 0) {
            enconded += this.DICTIONARY[parsedNum % base];
            parsedNum = Math.floor(parsedNum / base);
        }
        return this.reverseWord(enconded);
    }

    reverseWord(str) {
        let reversed = "";
        for (let i = str.length - 1; i >= 0; i--) {
            reversed += str.charAt(i);
        }
        return reversed;
    }
    decodeId(id) {
        const base = this.DICTIONARY.length;
        let decoded = 0;
        for (let i = 0; i < id.split("").length; i++) {
            decoded = decoded * base + this.DICTIONARY.indexOf(id.charAt(i));
        }
        return decoded;
    }
}

const encoder = new Encoder();

console.log(encoder.encodeId(11231230));
console.log(encoder.decodeId('S4UF'));

exports.Encoder = Encoder;