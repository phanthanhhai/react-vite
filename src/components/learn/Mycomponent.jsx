import './style.css';
const Mycomponent = () => {
    return (
        //fragment<></>
        <>
            <div>Phan Hai update</div>
            <div className="child"
                style={{ borderRadius: "10px" }}>child</div>
        </>
    );
}
//component = html + css + js
export default Mycomponent;