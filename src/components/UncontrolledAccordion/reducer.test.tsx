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
    // 3 части теста
    // data - данные
    const state: StateType = {
        collapsed: true
    }
    // action
    const newState = reducer(state, {type: TOGGLE_CONSTANT})

    //expect - результат
    expect(newState.collapsed).toBe(false)
})

test("collapsed should be error", () => {
    // 3 части теста
    // data - данные
    const state: StateType = {
        collapsed: true
    }
    // action
    expect(() => {
        reducer(state, {type: "FAKETYPE"})
    }).toThrowError()


})
