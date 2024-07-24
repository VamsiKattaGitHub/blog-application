import React from 'react'
import { useParams } from 'react-router-dom'

const BollywoodInfo = () => {
  const { bollywoodId } = useParams();
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const getInfo = async ()=>{
    const response =  await(fetch("https://bl0gbackend.onrender.com/bollywood"))
    const data = await(response.json());
    const foundInfo = data.find(item => item.id === bollywoodId || data.indexOf(item) + 1 === parseInt(bollywoodId));
    setInfo(foundInfo);
    setLoading(false);
  }
  useEffect(() => {
    getInfo();
  }, [bollywoodId]);
 
  return (
    <div>
    {loading ? (
      "Loading..."
    ) : (
      !info ? (
        "Data Not Found"
      ) : (
        <div>
          <h1>{info.title}</h1>
          <p>{info.description}</p>
          {/* Add other details you want to show */}
        </div>
      )
    )}
  </div>
  )
}

export default BollywoodInfo
