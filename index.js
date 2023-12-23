// code your solution here
const record = [
    { year: "2019", result: "W" },
    { year: "2020", result: "L" },
    { year: "2021", result: "W" },
    { year: "2022", result: "W" },
    { year: "2023", result: "L" },
];

function superbowlWin(records) {
    // Use the find method to search for a "W" in the records
    const winningRecord = records.find(record => record.result === "W");

    return winningRecord ? winningRecord.year : undefined;
}

const winningYear = superbowlWin(record);
console.log(winningYear); 
