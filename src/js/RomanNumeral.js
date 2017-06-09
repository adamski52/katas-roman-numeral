if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
        value: function(predicate) {
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }

            var o = Object(this);

            var len = o.length >>> 0;

            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }

            var thisArg = arguments[1];

            var k = 0;

            while (k < len) {
                var kValue = o[k];
                if (predicate.call(thisArg, kValue, k, o)) {
                    return kValue;
                }
                k++;
            }

            return undefined;
        }
    });
}



function RomanNumeral(value) {
    this._value = value;
}

RomanNumeral.BASES = [{
    roman: "M",
    arabic: 1000
}, {
    roman: "C",
    arabic: 100
}, {
    roman: "L",
    arabic: 50
}, {
    roman: "X",
    arabic: 10
}, {
    roman: "V",
    arabic: 5
}, {
    roman: "I",
    arabic: 1
}];

RomanNumeral.prototype.getArabicDigit = function(romanDigit) {
    var value = RomanNumeral.BASES.find(function(digit) {
        return digit.roman === romanDigit;
    });

    if(value) {
        return value.arabic;
    }

    return 0;
};

RomanNumeral.prototype.toArabic = function() {
    var romans = this._value.split(""),
        values = [],
        sum = 0;

    if(romans.length <= 0) {
        return 0;
    }

    var self = this;
    romans.forEach(function(letter) {
        values.push(self.getArabicDigit(letter));
    });

    for(var i = 0; i < values.length-1; i++) {
        if(values[i] < values[i+1]) {
            values[i] *= -1;
        }

        sum += values[i];
    }

    sum += values[values.length-1];

    return sum;
};