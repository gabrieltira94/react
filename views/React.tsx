import ExerciseCounter from "@/components/ExerciseCounter";
import TopicHeader from "@/components/TopicHeader";

export default function ReactView() {
  return (
    <>
      <h3>React Page</h3 >

      <hr />
      <TopicHeader
        componentUsed="ExerciseCounter"
        topic="useState hook"
      />

      <ExerciseCounter muscle="Back" />

      <hr />
    </>
  );
}