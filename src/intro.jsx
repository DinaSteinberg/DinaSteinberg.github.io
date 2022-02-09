import Typist from "react-typist";

export default () => {
    return <div style={{color: "white", marginBottom: '10px', height: '850px'}}>
        <div style={{height: '300px'}} />
        <h1>Dina Steinberg</h1>
        <Typist>
            <span>Problem Solver. </span>
            <Typist.Delay ms={500} />
            <span>Designer. </span>
            <Typist.Delay ms={500} />
            <span>Chocolate enthusiast. </span>
        </Typist>
    </div>
}