import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

//describe allows to run multiple tests
describe("ProfileStatus component", () => {
	test("Status from props should be in state", () => {
		const component = create(<ProfileStatus status="I run my test" />);
		const instance = component.getInstance();
		expect(instance.state.status).toBe("I run my test");
	});
	test("<Span> should be displayed after creation", () => {
		const component = create(<ProfileStatus status="I run my test" />);
		const root = component.root;
		let span = root.findByType("span");
		expect(span.length).not.toBeNull();
	});
	test("<Span> with a correct status should be displayed after creation", () => {
		const component = create(<ProfileStatus status="I run my test" />);
		const root = component.root;
		let span = root.findByType("span");
		expect(span.children[0]).toBe("I run my test");
	});
	test("<input> shouldn't be displayed after creation", () => {
		const component = create(<ProfileStatus status="I run my test" />);
		const root = component.root;
		expect(() => {
			let input = root.findByType("input");
		}).toThrow();
	});
	test("<input> should be displayed in editMode instead of <span>", () => {
		const component = create(<ProfileStatus status="I run my test" />);
		const root = component.root;
		let span = root.findByType("span");
		span.props.onDoubleClick();
		let input = root.findByType("input");
		expect(input.props.value).toBe("I run my test");
	});
	test("callback should be called", () => {
		const mockCallback = jest.fn()
		const component = create(<ProfileStatus status="I run my test" updateStatus={mockCallback} />);
		const instance = component.getInstance();
		instance.deactivateEditMode()
		expect(mockCallback.mock.calls.length).toBe(1);
	});
});
