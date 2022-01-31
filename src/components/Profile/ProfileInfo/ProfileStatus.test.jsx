import React from "react";
import {act, create} from 'react-test-renderer'
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("after creation <span> should be displayed with correct status", () => {
            const component = create(<ProfileStatus status={'Ho-ho-ho'} />)
            const root = component.root
            let span = root.findByType('span')
            expect(span.length).not.toBeNull()
    })

    test("after creation <input> shouldn't be displayed", () => {
        const component = create(<ProfileStatus status={'Ho-ho-ho'} />)
        const root = component.root
        expect(() => {
            let input = root.findByType('input')
        }).toThrow()
    })

    test("after creation <span> should contains correct status", () => {
        const component = create(<ProfileStatus status={'Ho-ho-ho'} />)
        const root = component.root
        let span = root.findByType('span')
        expect(span.children[0]).toBe('Ho-ho-ho');
    })

    test("<input> should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status={'Ho-ho-ho'} />)
        const root = component.root
        act(() => {
            let span = root.findByType('span')
            span.props.onDoubleClick();
        })
        let input = root.findByType('input')
        expect(input.props.value).toBe('Ho-ho-ho')
    })

    test("callback should be called", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status={'Ho-ho-ho'} updateStatus={mockCallback}/>)
        const root = component.root
        act(() => {
            let span = root.findByType('span')
            span.props.onDoubleClick()
        })
        act(() => {
            let input = root.findByType('input')
            input.props.onBlur()
        })
        expect(mockCallback.mock.calls.length).toBe(1)
    })
})