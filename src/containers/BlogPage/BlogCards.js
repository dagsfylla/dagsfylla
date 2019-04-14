import React, { Component } from 'react';
import differenceInCalendarDays from 'date-fns/difference_in_calendar_days'
import BlogCard from '../../components/BlogCard/index';


class BlogCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: this.props.posts.length
        }
    }

    render() {

        let { posts, filters, activeFilters, activeSort } = this.props;

        return (
            <div>
            {posts
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
            </div>
        )
    }



}

export default BlogCards;