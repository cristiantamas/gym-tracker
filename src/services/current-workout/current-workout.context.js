import React, { createContext, useReducer } from 'react';

const INITIAL_STATE = {
  exercises: [
    {
      name: 'Squats with bar',
      sets: [
        {
          reps: 8,
          weight: 20,
        },
        {
          reps: 8,
          weight: 25,
        },
        {
          reps: 8,
          weight: 25,
        },
      ],
    },
    {
      name: 'Romanian Deadlift',
      sets: [
        {
          reps: 8,
          weight: 40,
        },
        {
          reps: 8,
          weight: 40,
        },
        {
          reps: 8,
          weight: 50,
        },
      ],
    },
    {
      name: 'Pushups',
      sets: [
        {
          reps: 9,
        },
        {
          reps: 9,
        },
        {
          reps: 8,
        },
      ],
    },
    {
      name: 'TRX Rows',
      sets: [
        {
          reps: 8,
        },
        {
          reps: 8,
        },
        {
          reps: 8,
        },
      ],
    },
    {
      name: 'Military Press',
      sets: [
        {
          reps: 8,
          weight: 5,
        },
        {
          reps: 8,
          weight: 5,
        },
        {
          reps: 8,
          weight: 10,
        },
      ],
    },
  ],
};

export const CurrentWorkoutContext = React.createContext({
  exerciseList: [],
});

const currentWorkoutReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      throw new Error(`Unhandled type ${type} in currentWorkoutReducer`);
  }
};

export const CurrentWorkoutProvider = ({ children }) => {
  const [state, dispatch] = useReducer(currentWorkoutReducer, INITIAL_STATE);
  const { exercises } = state;
  const value = {
    exercises,
  };
  return <CurrentWorkoutContext.Provider value={value}>{children}</CurrentWorkoutContext.Provider>;
};
