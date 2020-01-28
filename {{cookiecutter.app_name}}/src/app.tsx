import * as React from "react";
import HomePage from "./container/HomePage/HomePageRoot";
import './app.scss';

export interface AppProps {}

const App: React.SFC<AppProps> = props => <HomePage />;

export { App };
