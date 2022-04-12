import Header from "./components/Header/Header";
import PhotoGrid from "./components/PhotoGrid/PhotoGrid";

function App() {
  return (
    <>
      <Header></Header>
      <PhotoGrid></PhotoGrid>
    </>
  );
}

export default App;

//conditional

// const [myData, setMyData] = useState(null);

// useEffect(()=>{
//   fetch("https://jsonplaceholder.typicode.com/photos")
//   .then(res => {
//     return res.json()
//   })
//   .then((data) =>{
//     setMyData(data);
//   })
// }, []);

// console.log(myData)

// return (
//     <div className = "hello">
//        <PhotoGrid></PhotoGrid>
//       <div id="result">
//         {
//           myData && myData.slice(0, 20).map( data => {
//             return(

//               <div className="box">
//               <img src ={data.url}></img>

//               {data.title}

//               </div>

//             )

//           })
//         }

//       </div>

//     </div>

// );
