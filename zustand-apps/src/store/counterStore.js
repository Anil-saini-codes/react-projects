import {create} from "zustand"

const useCounterStore= create((set)=> ({
    count:0,
    increment:()=>set((state)=>({count:state.count+1})),
    decrement:()=>set((state)=>({count:state.count-1})),
    reset:()=>set({count:0}),
    incrementBy:(value)=>set((state)=>({count:state.count+value})),
}))

export default useCounterStore;