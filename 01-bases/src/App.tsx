import "./App.css";
import { FormPage } from "./components/FormPage";
//import { UserPage } from "./components/UserPage";
//import { LoginPage } from "./components/LoginPage";
import { AuthProvider } from "./context/AuthContext";
//import { Counter } from "./components/Counter";
//import { BasicFunctions } from "./typescript/03-BasicFunctions";
//import { ObjectLiteral } from "./typescript/02-ObjectLiteral";
//import { BasicTypes } from "./typescript/01-BasicTypes";

function App() {
  return (
    <AuthProvider>
      <div className="flex justify-center items-center h-svh">
        <h1 className="text-4xl mb-5">React+TS</h1>
        {/* <BasicTypes></BasicTypes> */}
        {/* <ObjectLiteral></ObjectLiteral> */}
        {/* <BasicFunctions></BasicFunctions> */}
        {/* <Counter></Counter> */}
        {/* <LoginPage></LoginPage> */}
        {/* <UserPage></UserPage> */}
        <FormPage></FormPage>
      </div>
    </AuthProvider>
  );
}

export default App;
