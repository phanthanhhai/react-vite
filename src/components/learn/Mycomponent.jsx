import './style.css';
const Mycomponent = () => {
    // const Phanhai = "H16"; //string
    //const Phanhai = 16; //number
    // const Phanhai = true; //boolean
    // const Phanhai = [1,2,3]; 
    const Phanhai = {
        name: "Phan Hai",
        age: 16
    }; //object
    return (
        //fragment<></>
        <>
            <div>{JSON.stringify(Phanhai)} Phan Hai update</div>
            <div>{console.log("ERIC")}</div>
            <div className="child"
                style={
                    { borderRadius: "10px" }
                }>child</div>
        </>
    );
}
//component = html + css + js
export default Mycomponent;