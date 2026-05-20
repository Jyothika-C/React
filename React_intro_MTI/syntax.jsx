      // map syntax
      <ol>
        {features.map((feature) => (
          <li>{feature}</li>
        ))}
      </ol>

// Events

export default function ClickMeButton() {
  return (
    <div>
      <h5>Intoduction to Events in React</h5>
      <button onClick={eventsIntro} >Click Me</button>
    </div>