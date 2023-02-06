import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

beforeEach(()=> render(<App/>))

describe("App component render correctly", () => {
  test("App render correctly", () => {
    const r = render(<App/>)
    expect(r).toBeDefined();
  })
  test("the name is shown", () => {
    const name = "Radio App"
    const el = screen.getByText(name);
    expect(el).toBeInTheDocument()
  })
});

describe("Should be able to search radio by name", () => {
  test("App should have a placeholder name in the input", () => {
    const placeholderText = "search radio"
    const input = screen.getByPlaceholderText(placeholderText)
    expect(input).toBeInTheDocument();
  })
  test("App should have a button to search", () => {
    const buttonText = "Search"
    const button = screen.getByText(buttonText)
    expect(button).toBeInTheDocument();
  })
  test("When we click on the button, it is executed only once", () => {
    const mockFn = jest.fn()
    const buttonText = "Search"
    const button = screen.getByText(buttonText)
    button.addEventListener("click", mockFn)
    fireEvent.click(button)
    expect(mockFn).toHaveBeenCalledTimes(1)  
  })
})

describe("Radio station list", () => {
  test("radio station list should exist", () => {
    const list = screen.getByLabelText("station-list")
    expect(list).toBeInTheDocument()
  })
  test("The radio station list should be started empty", () => {
    const list = screen.getByLabelText("station-list")
    const childrenCount = list.childElementCount
    expect(childrenCount).toBe(0)
  })
  test("When a valid search is made it must show at least one result.", () => {
    const placeholderText = "search radio"
    const input = screen.getByPlaceholderText(placeholderText)
    const buttonText = "Search"
    const button = screen.getByText(buttonText)
    fireEvent.change(input, { target: { value: "Country" }})
    fireEvent.click(button)
    const list = screen.getByLabelText("station-list")
    const childrenCount = list.childElementCount
    expect(childrenCount).toBeGreaterThanOrEqual(1)
  })
})