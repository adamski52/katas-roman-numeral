(function(globals) {
    "use strict";

    var inputElement,
        resultElement;

    globals.onload = function() {
        inputElement = document.getElementById("romanNumerals");
        resultElement = document.getElementById("arabic");

        function updateResult(value) {
            resultElement.innerHTML = new RomanNumeral(value).toArabic();
        }

        updateResult("");

        inputElement.onkeyup = function() {
            updateResult(this.value);
        };
    };
})(window);
