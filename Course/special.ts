// void
function logToConsole(): void {
    console.log("Hello World");
    return;
}

// Array
let fruits: string[];
fruits = ['apple', "pear", `watermelon`, "lettters".toUpperCase(), (( ) => 'information')(), null, undefined];

let food: Array<string>;
food = ['pizza', 'burger'];

let genericArray: Array<string | number | boolean>;
genericArray = ['pizza', 12, true];

// Tuple
let cooordinates: [number, number, number];
cooordinates = [ 12, 13, 14];

let genTuple: [number, string, boolean];
genTuple = [12, 'generic', true];

// Objects
let user = {
    firstName: 'Sidd',
    lastName: 'Ajmera',
    username: 'SiddAjmera',
    getUserName: (): string => username
}

// Enum
enum DaysOfTheWeek {
    MONDAY = "monday",
    TUESDAY = "tuesday",
    WEDNESDAY = "wednesday"
}

let dayToday: DaysOfTheWeek;
dayToday = DaysOfTheWeek.MONDAY;
dayToday = DaysOfTheWeek.TUESDAY;

// any
// With this data type, you won't get much intellisense
let authorizedUser: any = {
    firstName: "Sidd",
    lastName: "Ajmera",
    username: "SiddAjmera"
};