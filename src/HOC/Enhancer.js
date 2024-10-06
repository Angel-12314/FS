const Enhancer = (Component) => {
    return (props) => {
        console.log(props)
        return (
        <div>
            <Component {...props} />
            <h3>I was added by Enhancer</h3>
            <sub>Property of component 1</sub>
        </div>
        )
    }
}

export default Enhancer;