// import { screen, render } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
// // import userEvent from "@testing-library/user-event";
// import InputIcon from "..";

// describe('Button "Enviar":', () => {
// 	const title = 'Should "enviar button" component';

// 	it(`${title} be rendered`, () => {
// 		render(<InputIcon type="button" color="green" value="enviar" />);
// 		const btnSendEl = screen.queryByText("enviar");

// 		expect(btnSendEl).toBeInTheDocument();
// 	});

// 	it(`${title} has the property "color"`, () => {
// 		render(<InputIcon type="button" color="green" value="enviar" />);
// 		const btnSendEl = screen.queryByText("enviar");

// 		expect(btnSendEl).toHaveAttribute("color");
// 	});

// 	it(`${title} hasn't the property`, () => {
// 		render(<InputIcon type="button" value="enviar" />);
// 		const btnSendEl = screen.queryByText("enviar");

// 		expect(btnSendEl).not.toHaveAttribute("color");
// 	});

// 	// it(`${title} starts disabled`, () => {
// 	// 	render(<App />);

// 	// 	const btnSendEl = screen.queryByTestId("btn-send");

// 	// 	expect(btnSendEl).toBeInTheDocument();
// 	// 	expect(btnSendEl).toBeDisabled();
// 	// });

// 	// it(`${title} become disabled when the input value is empty`, () => {
// 	// 	render(<App />);

// 	// 	const btnSendEl = screen.queryByTestId("btn-send");
// 	// 	const inputValueEl = screen.queryByTestId("input-value");

// 	// 	expect(btnSendEl).toBeInTheDocument();
// 	// 	expect(inputValueEl).toBeInTheDocument();
// 	// 	expect(btnSendEl).toHaveAttribute("disabled"); // btn start disabled

// 	// 	//The "user" types something:
// 	// 	userEvent.type(inputValueEl, "abc");
// 	// 	expect(inputValueEl).toHaveValue("abc");
// 	// 	expect(btnSendEl).not.toBeDisabled();

// 	// 	//The "user" clear the field:
// 	// 	userEvent.type(inputValueEl, "{selectall}{del}");
// 	// 	expect(inputValueEl).toBeEmptyDOMElement();
// 	// 	expect(btnSendEl).toBeDisabled();
// 	// });
// });

// // describe("Items list:", () => {
// // 	const title = "Should the items list component";

// // 	it(`${title} be rendered`, () => {
// // 		render(<App />);

// // 		const ulItemsEl = screen.queryByTestId("items-list");
// // 		expect(ulItemsEl).toBeInTheDocument();
// // 	});

// // 	it(`${title} be empty`, () => {
// // 		render(<App />);

// // 		const ulItemsEl = screen.queryByTestId("items-list");
// // 		expect(ulItemsEl).toBeEmptyDOMElement();
// // 	});

// // 	it(`${title}, if "input field" has only "blank spaces", keeps empty"`, () => {
// // 		render(<App />);

// // 		const inputValueEl = screen.queryByTestId("input-value");
// // 		const ulItemsEl = screen.queryByTestId("items-list");
// // 		const btnSendEl = screen.queryByTestId("btn-send");
// // 		const previousItems = screen.queryAllByRole("listitem");

// // 		expect(ulItemsEl).toBeEmptyDOMElement();
// // 		expect(previousItems).toHaveLength(0);

// // 		//The "user" types a invalid value:
// // 		const INVALID_VALUE = "       ";
// // 		userEvent.type(inputValueEl, INVALID_VALUE);
// // 		expect(inputValueEl).toHaveValue(INVALID_VALUE);

// // 		userEvent.click(btnSendEl);

// // 		//The list should keeps empty:
// // 		const currentItems = screen.queryAllByRole("listitem");
// // 		expect(currentItems).toHaveLength(0);
// // 	});

// // 	it(`${title}, if "input field" has a valid value, push it into itself"`, () => {
// // 		render(<App />);

// // 		const inputValueEl = screen.queryByTestId("input-value");
// // 		const ulItemsEl = screen.queryByTestId("items-list");
// // 		const btnSendEl = screen.queryByTestId("btn-send");
// // 		const previousItems = screen.queryAllByRole("listitem");

// // 		expect(ulItemsEl).toBeEmptyDOMElement();
// // 		expect(previousItems).toHaveLength(0);

// // 		//The "user" types a valid value:
// // 		const VALID_VALUE = "abc def";
// // 		userEvent.type(inputValueEl, VALID_VALUE);
// // 		expect(inputValueEl).toHaveValue(VALID_VALUE);

// // 		userEvent.click(btnSendEl);

// // 		//The list should keeps empty:
// // 		const currentItems = screen.queryAllByRole("listitem");
// // 		expect(currentItems).toHaveLength(1);
// // 	});
// // });
