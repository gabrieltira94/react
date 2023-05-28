interface Props {
  topic: string;
  componentUsed: string;
}

export default function TopicHeader(props: Props) {
  const { topic, componentUsed } = props;

  return (
    <p style={{ color: 'green', fontWeight: 800, fontStyle: "oblique" }}>
      Topic: {topic}. Component used: {componentUsed}.
    </p>
  );
}