function App() {
  return (
    <button onClick={async () => {
      const response = await fetch('/health');
      const data = await response.json();
      console.log(data);
    }}>
      Click Me
    </button>
  )
}

export default App