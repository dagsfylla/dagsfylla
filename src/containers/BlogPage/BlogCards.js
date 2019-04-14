import React, { Component } from 'react';
import differenceInCalendarDays from 'date-fns/difference_in_calendar_days'
import BlogCard from '../../components/BlogCard/index';

import Paginated from '../../components/Paginated/index';

class BlogCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: this.props.posts.length,
            currentPosts: [],
            currentPage: null,
            totalPages: null,
        }
    }

    onPageChanged = data => {
        const { posts } = this.props;
        const { currentPage, totalPages, pageLimit } = data;

        const offset = (currentPage - 1) * pageLimit;
        const currentPosts = posts.slice(offset, offset + pageLimit);

        this.setState({ currentPage, currentPosts, totalPages });
    };

    render() {

        let { posts, filters, activeFilters, activeSort } = this.props;

        let { currentPosts, currentPage, totalPages } = this.state;
        const totalPosts = posts.length;

        return (
            <div>
                <h2>
                    <strong className="text-secondary">{totalPosts}</strong> Posts
                </h2>

                { currentPage && (
                    <span className="current-page d-inline-block h-100 pl-4 text-secondary">
                  Page <span className="font-weight-bold">{ currentPage }</span> / <span className="font-weight-bold">{ totalPages }</span>
                </span>
                ) }
            {currentPosts
                .filter(o => activeFilters.includes(o.type) || !(activeFilters.some(r=> filters.type.includes(r))))
                    .sort((a,b) => {
                        if (activeSort.includes("Populært")) {
                            return (b.votes - a.votes)
                        } else if (activeSort.includes("Eldst")){
                            return (differenceInCalendarDays(
                                new Date(),
                                new Date(b.date.split('-'))
                            )) - differenceInCalendarDays(
                                new Date(),
                                new Date(a.date.split('-'))
                            )
                        } else if (activeSort.includes("Nyeste")){
                            return (differenceInCalendarDays(
                                new Date(),
                                new Date(a.date.split('-'))
                            )) - differenceInCalendarDays(
                                new Date(),
                                new Date(b.date.split('-'))
                            )
                        }
                        return a - b;
                    })
                    .map((post, i) => (
                        <BlogCard post={post} filters={filters} key={i} />
                    ))}
                <Paginated totalRecords={totalPosts} pageLimit={10} pageNeighbours={1} onPageChanged={this.onPageChanged} />
            </div>
        )
    }



}

export default BlogCards;