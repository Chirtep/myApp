import * as ReactDOM from "react-dom";
import MainApp from "./App";
import {act} from "@testing-library/react";

it('renders without crashing', () => {
  act(() => {
    const div = document.createElement('div')
    ReactDOM.render(<MainApp/>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})