import React, { createContext, useReducer } from 'react';

const INITIAL_STATE = {
  exercises: [
    {
      name: 'Squats with bar',
      isFinished: false,
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
      isFinished: false,
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
      isFinished: false,
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
      isFinished: false,
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
      isFinished: false,
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

export const CURRENT_WORKOUT_ACTION_TYPES = {
  SET_EXERCISE_LIST: 'SET_EXERCISE_LIST',
};

const currentWorkoutReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CURRENT_WORKOUT_ACTION_TYPES.SET_EXERCISE_LIST:
      return {
        ...state,
        exercises: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in currentWorkoutReducer`);
  }
};

export const CurrentWorkoutProvider = ({ children }) => {
  const [state, dispatch] = useReducer(currentWorkoutReducer, INITIAL_STATE);
  const { exercises } = state;

  const updateExerciseList = (newExerciseList) => {
    dispatch({ type: 'SET_EXERCISE_LIST', payload: newExerciseList });
  };

  const setExerciseStatus = (exercise, isFinished) => {
    const newExercises = exercises.map((e) => {
      if (e.name === exercise.name) {
        return {
          ...e,
          isFinished,
        };
      }
      return e;
    });
    updateExerciseList(newExercises);
  };

  const value = {
    exercises,
    setExerciseStatus,
  };
  return <CurrentWorkoutContext.Provider value={value}>{children}</CurrentWorkoutContext.Provider>;
};
