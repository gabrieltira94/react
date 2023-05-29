import ExerciseCounter from "@/components/ExerciseCounter";
import TopicHeader from "@/components/TopicHeader";
import MainContext from "./useContext/MainContext";
import MainUseEffect from "./useEffect/MainUseEffect";
import MainUseMemo from "./useMemo/MainUseMemo";
import MainUseRef from "./useRef/MainUseRef";
import MainForwardRef from "./forwardRef/MainForwardRef";
import MainMemo from "./memo/MainMemo";

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
      <TopicHeader
        componentUsed="MainUseMemo.tsx"
        topic="useMemo hook"
      />
      <MainUseMemo />

      <hr />
      <TopicHeader
        componentUsed="MainUseRef.tsx"
        topic="useRef hook"
      />
      <MainUseRef />

      <hr />
      <TopicHeader
        componentUsed="MainForwardRef.tsx"
        topic="forwardRef"
      />
      <MainForwardRef />

      <hr />
      <TopicHeader
        componentUsed="MainMemo.tsx"
        topic="memo"
      />
      <MainMemo />

    </>
  );
}
