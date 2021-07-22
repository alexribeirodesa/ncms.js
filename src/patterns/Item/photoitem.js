function PhotoItem(props) {
	return (
        <div className={props.className}>
            <a href={props.href}>
                <div className="item">
                    <img src={props.src} />
                </div>
            </a>
        </div>
	)
}

export default PhotoItem;
