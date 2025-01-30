# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug involving an infinite loop within the `useEffect` hook.  The bug arises from improperly managing state updates within the effect's callback, leading to continuous re-renders and performance degradation.

## Bug Description

The provided `MyComponent` uses `useState` to manage a counter.  The `useEffect` hook, intended to log the counter value, incorrectly causes an infinite loop because it lacks the proper dependency array, causing an update to the `count` variable inside the effect, leading to continuous triggering of the effect itself.

## Solution

The solution involves correctly specifying the dependency array for the `useEffect` hook.  By only including `count` in the array, the effect will only run when the value of `count` changes.