/************************
 *
 *
 *   HOW TO START TEST:
 *   - copy the three questions listed below on to their screen
 *   - remind them not to modify these three questions in any way 
 *
 *
 ************************/

/*  QUESTIONS START: DO NOT MODIFY  */
const question1 = "Create a function named `sum` that takes two numbers, and gives the sum of those two numbers. Example: sum(2, 3), sum('12', 4)";
const question2 = "Create a function named `equals` that tests for equality between two arguments. Example: equals(4, 4), equals('test', 'test')";
const question3 = "Create a function named `arrayInfo` that, when given an array of integers, returns an object containing three properties: `min` for the smallest number in the array, `max` for the largest number in the array, and `average` for the average of all numbers in the array. Example: `arrayInfo([10,2,1,8,9])` would return the object `{min: 1, max: 10, average: 6}`";
/*  QUESTIONS END: DO NOT MODIFY  */


function sum(a,b) {
  return parseInt(a, 10) + parseInt(b,10);
}


function equals (a,b) {
  return a === b;
}


function arrayInfo (arr) {
  return {
    min: Math.min(...arr),
    max: Math.max(...arr),
    average: (arr.reduce((a,b)=>a+b))/arr.length
  };
}


/************************
 *
 *
 *   HOW TO CHECK TEST:
 *   - when candidate is done, copy everything below this comment to the space below their code.
 *     Make sure this is the last thing on the page.
 *   - Press the 'Run' button on the top left of the CoderPad screen
 *   - The ouput will print on the ride side panel of the screen, copy everything between 'RESULTS START' and 'RESULTS END'
 *
 *
 ************************/

const _tc_questions = [
  {
    question: question1,
    tests: [
      {
        case: "is function",
        test: () => typeof sum === 'function',
      },
      {
        case: "adds number types correctly",
        test: () => {
          const result = sum(11, 10); 
          return _tc_isNumeric(result) && result === 21;
        }
      },
      { 
        case: "handles one or more inputs that are given as strings",
        test: () => {
          const resultA = sum("11", 10); 
          const resultB = sum(11, "10"); 
          const resultC = sum("11", "10"); 
          return (
            _tc_isNumeric(resultA) && _tc_isNumeric(resultB) && _tc_isNumeric(resultC)
            && resultA === 21 && resultB === 21 && resultC === 21
          );
        }
      }
    ]
  },
  {
    question: question2,
    tests: [
      {
        case: "is function",
        test: () => typeof equals === 'function',
      },
      {
        case: "returns a boolean",
        test: () => {
          const result = equals(4, 4);
          return typeof result  === "boolean"; 
        }
      },
      {
        case: "correctly identifies when two inputs of the same type are equal",
        test: () => equals(4, 4) 
      },
      {
        case: "correctly identifies when two inputs of the same type are not equal",
        test: () => equals(1, 4) 
      },
      {
        case: "uses strict equality comparison",
        test: () => !equals(2, "2") 
      },
      {
        case: "correctly checks for deep equality of objects",
        test: () => {
          const a = { d: 3, e: [1,2,3] }; 
          const b = { d: 3, e: [1,2,3] }; 
          return equals(a, b);
        } 
      },
    ]
  },
  {
    question: question3, 
    tests: [
      {
        case: "returns an object with the appropriately named properties",
        test: () => {
          const result = arrayInfo([1,2,3]);
          const isObject = result !== null && typeof result === 'object'; 
          return !!(result && result.min && result.max && result.average);
        }
      },
      {
        case: "returns the correct min",
        test: () => {
          const result = arrayInfo([8,2,1000,24,38,92]); 
          return result.min && result.min === 2; 
        }
      },
      {
        case: "returns the correct max",
        test: () => {
          const result = arrayInfo([8,2,1000,24,38,92]); 
          return result.max && result.max === 1000; 
        }
      },
      {
        case: "returns the correct average",
        test: () => {
          const result = arrayInfo([8,2,1000,24,38,92]);
          return result.average && result.average === 194; 
        }
      }
    ]
  }
];


function _tc_isNumeric (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
}



function _tc_grader (questions) {
  const report = questions.map(question => {
    let log = ""; 
    log += question.question + "\n";
    log += question.tests.map( test => {
      let result = " - ";
      result += test.test()? "[Passed]": "[Failed]";
      result += ": it " + test.case + "\n";
      return result;
    }).join("");

    return log + "\n\n";
  }).join("");

  let formattedReport = "";
  formattedReport += "/*******************/\n";
  formattedReport += "     RESULTS START   \n";
  formattedReport += "/*******************/\n";
  formattedReport += report;
  formattedReport += "/*******************/\n";
  formattedReport += "     RESULTS END     \n";
  formattedReport += "/*******************/\n";
  console.log( formattedReport );
}


_tc_grader(_tc_questions);
