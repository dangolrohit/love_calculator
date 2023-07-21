function calculateLovePercentage() {
    const yourName = document.getElementById("yourName").value.toUpperCase().replace(/[^A-Z]/g, "");
    const partnerName = document.getElementById("partnerName").value.toUpperCase().replace(/[^A-Z]/g, "");

    const countLetters = (name) => {
        const letterCounts = {};
        const letters = name.split("");

        letters.forEach((letter) => {
            letterCounts[letter] = letterCounts[letter] ? letterCounts[letter] + 1 : 1;
        });

        return Object.values(letterCounts).join("");
    };

    const shortenNumber = (number) => {
        const result = [];
        const length = number.length;
        for (let i = 0; i < Math.ceil(length / 2); i++) {
            const left = parseInt(number[i]);
            const right = parseInt(number[length - 1 - i]);
            result.push(left + right);
        }
        return result.join("");
    };

    const calculateFinalResult = (number) => {
        while (number.length > 2) {
            number = shortenNumber(number);
        }
        return number;
    };

    const yourNameCount = countLetters(yourName);
    const partnerNameCount = countLetters(partnerName);

    const combinedCounts = yourNameCount + partnerNameCount;
    const finalResult = calculateFinalResult(combinedCounts);

    return finalResult;
}

function displayLovePercentage() {
    const lovePercentage = calculateLovePercentage();
    document.getElementById("display").value = lovePercentage + "%";
}