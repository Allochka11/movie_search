import React from "react";
import './App.scss';
import {Header} from "./components/Header";
import {Home} from "./pages/Home";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Movie} from "./pages/Movie";
import {Alert} from "./components/Alert";
import {AlertState} from "./context/alert/alertState";
import {MovieState} from "./context/movie/movieState";

function App() {

    return (
        <MovieState>
            <AlertState>
                <BrowserRouter>
                    <Header/>
                    <div className="container pt-4">
                        <Switch>
                            <Route path="/" exact component={Home}/>
                            <Route path="/movie/:id" component={Movie}/>
                        </Switch>
                        <Alert/>
                    </div>
                </BrowserRouter>
            </AlertState>
        </MovieState>
    );
}
export default App;
