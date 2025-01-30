```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render but only when count changes
    console.log('Count:', count);
  }, [count]); // Only re-run if 'count' changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Click me</button>
    </div>
  );
}
```