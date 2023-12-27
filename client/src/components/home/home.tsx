
//const HomeContext = createContext([]);
    
const Home:React.FC = () =>{
   // const [misdemeanours, setMisdemeanours] = useState<MisdemeanourResponse>([]);
  
    //const addMisdemeanour = (newMisdemeanour:Misdemeanour) => {
      //setMisdemeanours((prevMisdemeanours) => [...prevMisdemeanours, newMisdemeanour]);
    //};

    return (
       // <HomeContext.Provider value={{misdemeanours,addMisdemeanour}}>
       <div className='content'>
            <h2 className='subtitle'>Welcome to the home of the Justice Department of Fakelandia.</h2>
            <p>Here you can browse a list of recent misdemeanours committed by our citizens, or you can cofess to your own misdemeanour.</p>    
       </div>
       // </HomeContext.Provider>
    )
}

export default Home;