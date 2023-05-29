import { Splits } from "@/misc/Data";
import { WorkoutArray } from "@/misc/ArrayData";

export const filterWorkout = (split: Splits, days: number[]) => {
  return WorkoutArray.filter(workout => days.includes(workout.day) && split === workout.muscle);
};