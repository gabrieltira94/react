import { useWorkoutContext } from "@/contexts/WorkoutContext";

export default function InnerContext() {
  // const [day, setDay] = useState<Days>('Rest');
  const { day, setDay } = useWorkoutContext();

  return (
    <div style={{ border: '1px solid blue', margin: 20 }}>
      <h2>I am Inner Context</h2>

      <p>Today is {day}</p>

      <button onClick={() => setDay('Friday')}>Press to Friday!</button>
    </div>
  );
}