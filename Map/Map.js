const dates = ["2008/02/21", "2007/10/11", "2022/08/26"];
const formattedDates = dates.map(formatDates);

console.log(dates);
console.log("////////////////////////////////////////////");
console.log(formattedDates);


function formatDates(element) {
    const parts = element.split("/");
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
}