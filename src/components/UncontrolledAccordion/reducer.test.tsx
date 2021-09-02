import {reducer, StateType, TOGGLE_CONSTANT} from "./reducer";

test("collapsed should be true", () => {
    // 3 части теста
    // data - данные
    const state: StateType = {
        collapsed: false
    }
    // action
    const newState = reducer(state, {type: TOGGLE_CONSTANT})

    //expect - результат
    expect(newState.collapsed).toBe(true)
})

test("collapsed should be false", () => {

    const state: StateType = {
        collapsed: true
    }

    const newState = reducer(state, {type: TOGGLE_CONSTANT})

    expect(newState.collapsed).toBe(false)
})

test("collapsed should be error", () => {

    const state: StateType = {
        collapsed: true
    }

    expect(() => {
        reducer(state, {type: "FAKETYPE"})
    }).toThrowError()

})
