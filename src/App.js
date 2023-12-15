
export default function App() {
  let a=["HTML","CSS","JS","REACT","ANGULER"]
  return (
    
    <div>
      <h1>FrontEnd Tech...</h1>
      {
        a.map((item,index)=><li key={index}>{item}</li>)
      }
    </div>
  )
}
