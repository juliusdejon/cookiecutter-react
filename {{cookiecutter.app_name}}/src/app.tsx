import * as React from "react";
import HomePage from "./container/HomePage/HomePage";
import './app.scss';

export interface AppProps {}

const App: React.SFC<AppProps> = props => <HomePage />;

export { App };
