import React from "react";
import './App.scss';
import {Header} from "./components/Header";
import {Home} from "./pages/Home";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {About} from "./pages/About";
import {Movie} from "./pages/Movie";
import {Alert} from "./components/Alert";
import {AlertState} from "./context/alert/alertState";


function App() {
    return (
        <AlertState>
            <BrowserRouter>
                <Header/>
                <div className="container pt-4">
                    <Alert alert={{text: 'Test'}}/>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/about" exact component={About}/>
                        <Route path="/movie/:name" exact component={Movie}/>
                    </Switch>

                </div>

            </BrowserRouter>
        </AlertState>


    );
}

export default App;
