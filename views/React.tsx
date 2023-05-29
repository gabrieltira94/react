import ExerciseCounter from "@/components/ExerciseCounter";
import TopicHeader from "@/components/TopicHeader";
import MainContext from "./Context/MainContext";

export default function ReactView() {
  return (
    <>
      <h3>React Page</h3 >

      <hr />
      <TopicHeader
        componentUsed="ExerciseCounter.tsx"
        topic="useState hook"
      />

      <ExerciseCounter muscle="Back" />

      <hr />
      <TopicHeader
        componentUsed="WorkoutContext.tsx"
        topic="This shows how React Context works"
      />

      <MainContext />

      <hr />

    </>
  );
}