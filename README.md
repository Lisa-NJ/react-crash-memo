**# Getting Started with Create React App**

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

**## Available Scripts**

In the project directory, you can run:

**###** **`npm start`**

Runs the app in the development mode.\

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

**###** **`npm run server   `**

Runs the json-server to provide a back-end server.\

**# Data Flow Diagram** 

```
npm run start 👇		
    
    useEffect    
(0)----------> fetchData  -------->   setData               Edit 
   |    |                                |                 / 
   |    |                     useEffect  |                /
   | db.json<-- fetchSetData <------- Home/data ----> ReactDOM.render          
   |             |                    /                   \
   |=false       |=false             /                    List
   |            /                   /                       \
submittingStatus <-----------------|                        Item  
                       =true       |                            
                                   |
                                   |
 Edit/Add 👇                       |
                                   |
(1)---> Edit/onClick ---> setData -|
                                   |
 Item/Del 👇                       |
                                   |
(2)---> Item/onClick ---> setData--|
```

**# Use of Hooks** 

**useState**：

Define a state for every <input> element in the component Edit, and data in the component Home.

In Edit, each state variable is bound with one input element in such a way called two way binding.

```react
const [note, setNote] = useState("");  //1. Define the state variable

//4. reset the state variable - note, then trigger another render.
function noteChange(e) {
        setNote(e.target.value);
    }

//2. Show the state as value when rendered
<input type="text" value={note} onChange={noteChange} /> 
//3. noteChange is called when a user changes the value
```

In Home, how it works is shown in the above diagram.

**useEffect**：

This hook is used in these situations:

- When the app is run, it is used to fetch data from back-end by calling API;
- When the state variables the hook depends are changed, it is called to put changed information to the backend by calling API;
- Before next render happens, do some cleaning operations by calling the function put in "return".

**useRef**：

useRef is used to determine if some operations are to be done or not. It does not trigger another render, unlike useState.

**# Use of UUID** 
uuid is used to generate unique Id for an item.