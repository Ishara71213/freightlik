export const Logo=(props)=>{
    return (
       <>
        <svg id="a412eb53-be14-4243-8bd1-d52d329a6592" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 816.34 218.8" width={props.width}>
            <title>logo</title>
           
                <text transform="translate(0 133.75)" fontSize="157.35" fill={props.color? props.color: "#fff" }  fontFamily="Mont-Bold, Mont" fontWeight="700" letterSpacing="-0.01em">f<tspan x="64.51" y="0" letterSpacing="-0.02em">r</tspan>
                <tspan x="125.88" y="0">eig</tspan>
                <tspan x="372.93" y="0" letterSpacing="-0.01em">h</tspan>
                <tspan x="472.37" y="0" letterSpacing="0em">tlik</tspan>
                </text><text transform="translate(401.91 195.31)" fontSize="76" fill={props.color? props.color: "#fff" } fontFamily="Mont-Bold, Mont" fontWeight="700">
                <tspan letterSpacing="-0.02em">{props.subLine}</tspan>
                {/* <tspan x="103.66" y="0">t</tspan>
                <tspan x="136.34" y="0" letter-spacing="-0.01em">w</tspan>
                <tspan x="200.18" y="0" letter-spacing="0em">or</tspan>
                <tspan x="280.74" y="0" letter-spacing="-0.01em">k</tspan>
                <tspan x="323.53" y="0">s</tspan> */}
                </text><polygon points="804.35 89.77 780.37 89.77 768.38 110.54 780.37 131.31 804.35 131.31 816.34 110.54 804.35 89.77" fill={props.dotColor}/>

        </svg>
      </>
   )
}