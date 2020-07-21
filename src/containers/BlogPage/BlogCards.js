import React, { Component } from 'react';
import differenceInCalendarDays from 'date-fns/difference_in_calendar_days';
import BlogCard from '../../components/BlogCard/index';

import Paginated from '../../components/Paginated/index';

class BlogCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPosts: [],
            currentPage: null,
            totalPages: null,
            pageLimit: 10,
        };
    }

    componentDidUpdate(prevProps, prevState) {
        const { posts } = this.props;
        const { pageLimit } = this.state;
        const totalPages = Math.ceil(posts.length / pageLimit);

        if (prevProps.posts !== posts) {
            const currentPage = 1;
            const currentPosts = posts.slice(0, pageLimit);

            this.setState({
                currentPage,
                currentPosts,
                totalPages,
            });
        }
    }

    onPageChanged = data => {
        const { posts } = this.props;
        const { currentPage, pageLimit } = data;
        const totalPages = Math.ceil(posts.length / pageLimit);

        const offset = (currentPage - 1) * pageLimit;
        const currentPosts = posts.slice(offset, offset + pageLimit);

        this.setState({ currentPage, currentPosts, totalPages });
    };

    render() {
        let { posts, filters, activeFilters, activeSort } = this.props;

        let { currentPosts, currentPage, totalPages, pageLimit } = this.state;

        const totalPosts = posts.length;

        return (
            <div>
                <h2>
                    <strong>{totalPosts}</strong> Innlegg
                </h2>

                {currentPage && (
                    <span>
                        Side <span>{currentPage}</span> / <span>{totalPages}</span>
                    </span>
                )}
                {currentPosts
                    .filter(o => activeFilters.includes(o.type) || !activeFilters.some(r => filters.type.includes(r)))
                    .sort((a, b) => {
                        if (activeSort.includes('Populært')) {
                            return b.votes - a.votes;
                        } else if (activeSort.includes('Eldst')) {
                            return (
                                differenceInCalendarDays(new Date(), new Date(b.date.split('-'))) -
                                differenceInCalendarDays(new Date(), new Date(a.date.split('-')))
                            );
                        } else if (activeSort.includes('Nyeste')) {
                            return (
                                differenceInCalendarDays(new Date(), new Date(a.date.split('-'))) -
                                differenceInCalendarDays(new Date(), new Date(b.date.split('-')))
                            );
                        }
                        return a - b;
                    })
                    .map((post, i) => (
                        <BlogCard post={post} filters={filters} key={i} />
                    ))}
                <Paginated
                    totalRecords={totalPosts}
                    pageLimit={pageLimit}
                    pageNeighbours={1}
                    onPageChanged={this.onPageChanged}
                />
            </div>
        );
    }
}

export default BlogCards;
