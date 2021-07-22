function BlogItem(props) {
	return (
        <>
        <div className={props.className}>
            <a className="post" href={props.href}>
                <div className={`cover ${props.src ? null : `nophoto`}`} style={{backgroundImage: `url(${props.src})`}}>
                    <h2>{props.title}</h2>
                    <img className="profile" src={props.profile} />
                </div>
                <div className="body">
                    <div className="intro">{props.children}</div>
                    <div className="info row justify-content-between">
                        <div className="w-auto">{props.time}</div>
                        <div className="w-auto">read more <i className="fas fa-angle-right" aria-hidden="true"></i></div>
                    </div>
                </div>
            </a>
        </div>
        </>
	)
}

export default BlogItem;
