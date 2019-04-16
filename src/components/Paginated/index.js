import React, { Component } from 'react';

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

/**
 * Helper method for creating a range of numbers
 * range(1, 5) => [1, 2, 3, 4, 5]
 */
const range = (from, to, step = 1) => {
    let i = from;
    const range = [];

    while (i <= to) {
        range.push(i);
        i += step;
    }
    return range;
};

class Paginated extends Component {
    constructor(props) {
        super(props);
        const { totalRecords = null, pageLimit = 10, pageNeighbours = 0 } = props;

        this.pageLimit = pageLimit;
        this.totalRecords = totalRecords ;

        // pageNeighbours can be: 0, 1 or 2
        this.pageNeighbours = Math.max(0, Math.min(pageNeighbours, 1));

        this.totalPages = Math.ceil(this.totalRecords / this.pageLimit);

        this.state = { currentPage: 1 };
    }

    componentDidMount() {
        this.gotoPage(1);
    }

    componentWillReceiveProps(props) {
        this.totalPages = Math.ceil(this.props.totalRecords / this.pageLimit);
    }

    gotoPage = page => {
        const { onPageChanged = f => f } = this.props;

        const currentPage = Math.max(0, Math.min(page, this.totalPages));

        const paginationData = {
            currentPage,
            totalPages: this.totalPages,
            pageLimit: this.pageLimit,
            totalRecords: this.totalRecords,
        };

        this.setState({ currentPage }, () => onPageChanged(paginationData));
    };

    handleClick = page => evt => {
        evt.preventDefault();
        this.gotoPage(page);
    };

    handleMoveLeft = evt => {
        evt.preventDefault();
        this.gotoPage(this.state.currentPage - this.pageNeighbours * 2 - 1);
    };

    handleMoveRight = evt => {
        evt.preventDefault();
        this.gotoPage(this.state.currentPage + this.pageNeighbours * 2 + 1);
    };

    fetchPageNumbers = () => {
        const totalPages = this.totalPages;
        const currentPage = this.state.currentPage;
        const pageNeighbours = this.pageNeighbours;

        const totalNumbers = this.pageNeighbours * 2 + 3;
        const totalBlocks = totalNumbers + 2;

        if (totalPages > totalBlocks) {
            const startPage = Math.max(2, currentPage - pageNeighbours);
            const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);

            let pages = range(startPage, endPage);

            const hasLeftSpill = startPage > 2;
            const hasRightSpill = totalPages - endPage > 1;
            const spillOffset = totalNumbers - (pages.length + 1);

            switch (true) {
                // handle: (1) < {5 6} [7] {8 9} (10)
                case hasLeftSpill && !hasRightSpill: {
                    const extraPages = range(startPage - spillOffset, startPage - 1);
                    pages = [LEFT_PAGE, ...extraPages, ...pages];
                    break;
                }

                // handle: (1) {2 3} [4] {5 6} > (10)
                case !hasLeftSpill && hasRightSpill: {
                    const extraPages = range(endPage + 1, endPage + spillOffset);
                    pages = [...pages, ...extraPages, RIGHT_PAGE];
                    break;
                }

                // handle: (1) < {4 5} [6] {7 8} > (10)
                case hasLeftSpill && hasRightSpill:
                default: {
                    pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
                    break;
                }
            }

            return [1, ...pages, totalPages];
        }

        return range(1, totalPages);
    };

    render() {
        if (!this.totalRecords || this.totalPages === 1) return null;

        const { currentPage } = this.state;
        const pages = this.fetchPageNumbers();

        return (
            <div>
                <nav>
                    <ul className="pagination">
                        {pages.map((page, index) => {
                            if (page === LEFT_PAGE)
                                return (
                                    <li key={index} className="page-item">
                                        {/*eslint-disable-next-line */}
                                        <a className="page-link" aria-label="Previous" onClick={this.handleMoveLeft}>
                                            <span aria-hidden="true">&laquo;</span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                    </li>
                                );

                            if (page === RIGHT_PAGE)
                                return (
                                    <li key={index} className="page-item">
                                        {/* eslint-disable-next-line*/}
                                        <a className="page-link" aria-label="Next" onClick={this.handleMoveRight}>
                                            <span aria-hidden="true">&raquo;</span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </li>
                                );

                            return (
                                <li key={index} className={`page-item${currentPage === page ? ' active' : ''}`}>
                                    {/* eslint-disable-next-line*/}
                                    <a className="page-link" onClick={this.handleClick(page)}>
                                        {page}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Paginated;
