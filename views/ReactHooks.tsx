import ExerciseCounter from "@/components/ExerciseCounter";
import TopicHeader from "@/components/TopicHeader";
import MainContext from "./Context/MainContext";
import MainUseEffect from "./useEffect/MainUseEffect";

export default function ReactHooksView() {
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
        topic="useContext hook"
      />

      <MainContext />

      <hr />

      <TopicHeader
        componentUsed="MainUseEffect.tsx"
        topic="useEffect hook"
      />

      <MainUseEffect />

      <hr />

    </>
  );
}
