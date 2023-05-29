import { createContext, useContext } from 'react';

export type Days = 'Monday' | 'Tuesday' | 'Friday' | 'Rest';
interface IWorkoutContext {
  day: Days;
  setDay: (day: Days) => void;
}

export const WorkoutContext = createContext<IWorkoutContext>({
  day: 'Rest',
  setDay: day => { }, // Logic for this setter happenes when WorkoutContext.Provider is initialized
});

export const useWorkoutContext = () => useContext(WorkoutContext);
