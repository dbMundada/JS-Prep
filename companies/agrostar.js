// Fluid Layout
// Responsive - MediaQuery
// Responsive - Flexbox

// Primitive Data Types:
Number
String
Boolean
Undefined
Null
Symbol

// Complex Data Types
function
Object

// undefined
1. typeof undefined === 'undefined'
2. undefined means value of variable not yet defined.
3. undefined is primitive data type.

// null
1. null means empty or non-existent value which used to indicate 'no-value'
2. typeof null ==== 'Object'
3. null is primitive type and not object.

var // function scope
let // block scope
const // if not going to change

1. Imperative function
test();
function test() {}

2. Declarative Function
test();
var test = function () {}
test = test.bind(this);
var test = () =>  {
  // context
}

3. IIEF
(function () {
  // context -> Global Scope
})();


var a = 20;
var b = 30;
Math.max(a, b);

var arr = [1, 2, 5, 10, 6];
arr.reduce((accm , item) => Math.max(accm, item), arr[0]);

//----------------------------------------------------------------------------------------
Write a function in javascript that takes in an array of object and group them by key passed.

   Example:

   Object passed:

   [
       {
           employeeId: “2001”,
           designation: “Developer”,
           experience: “4 years”
       },
       {
           employeeId: “2002”,
           designation: “QA”,
           experience: “3 years”
       }
           {
           employeeId: “2003,
           designation: “Developer”,
           experience: “3 years”
       }
   ]

   Key Passed: “designation”

   Expected Output:

   {
       “Developer”: [
           {
               employeeId: “2001”,
               designation: “Developer”,
               experience: “4 years”
           },
           {
               employeeId: “2003,
               designation: “Developer”,
               experience: “3 years”
           }
       ],
       “QA”: [
           {
               employeeId: “2002”,
               designation: “QA”,
               experience: “3 years”
           }
       ]
   }
function groupByKey(inputArr, key) {
  return inputArr.reduce((accm, item) => {
    let tmpVal = item[key];

    if (accm[tmpVal]) {
      accm[tmpVal].push(item);
    } else {
      accm[tmpVal] = [item];
    }
  }, {});
}

call -> fn.call(context, ar1, ar2)
apply -> fn.apply(context, [ar1, ar2])
bind -> fn = fn.bind(context)


componentWillMount() //
render()
componentDidMount() //

static getDerivedStateFromProps() // class method , this not available
shouldComponentUpdate()
render()
getSnapshotBeforeUpdate()
componentDidUpdate()

componentWillUnmount()

state -> setState({}, fnCall)
props ->


// Domain Specific language
JSX -> html tags + sugarcoating with react syntax

PureComponent // Stateless

const pureComp = (props) => {
  // React Hooks to overcome Stateful Components
  const [hasError, setErrors] = useState(null);
  const [planets, setPlanets] = useState({});

  useEffect(() =>
    fetch("https://swapi.co/api/planets/4/")
      .then(res => res.json())
      .then(res => this.setState({ planets: res }))
      .catch(() => this.setState({ hasErrors: true }))
  );

  return (
    // JSX
  );
};

// Stateful
class CompWithState extends React.Component {
  state = {

  };

  render() {

  }
}
