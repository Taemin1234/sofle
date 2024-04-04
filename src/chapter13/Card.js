function Card(props) {
    const {title, backgroundColor, children} = props;

    return (
        <div style={{margin :8, padding:8, borderRadius:8, boxShadow:'0px 0px 4px grey', backgroundColor: backgroundColor || 'white',}}>
            {/* title과 background 부분이 specialization */}
            {title && <h1>{title}</h1>}
            {/* 여기가 containment 부분 */}
            {children}
        </div>
    )
}

export default Card;

