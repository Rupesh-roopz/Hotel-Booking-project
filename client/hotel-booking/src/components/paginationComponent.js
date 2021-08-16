function Pagination (props) {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div className="container-fluid ">
            <nav className="nav-wrapper">
                <ul className='pagination'>
                    {pageNumbers.map(number => (
                        <li key={number} className='page-item paginationList'>
                            <a onClick={() => props.paginate(number)} className='page-link'>
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>

    )
}

export default Pagination
