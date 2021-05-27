function Hello(props)
{
  return <div>Hello {props.name}</div>;
}

ReactDOM.render(
  <Hello name="Nikhil" />,
  document.getElementById("mountNode")
);

// This prints the output "Hello Nikhil" 
// Use jscomplete.com/playground to run the above code
