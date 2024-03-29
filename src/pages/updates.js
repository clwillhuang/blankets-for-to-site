import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import HeaderImage from '../components/header-image'
import SquareGrid from '../components/layouts/square-grid'

class Updates extends React.Component {
	render() {
		const imgFluid = get(this, 'props.data.updateHeader.nodes[0].image.gatsbyImageData')
		const headerTitle = 'Updates'
		const headerSubtitle = ''
		
        const content = [ 
			{
                title: "Check upcoming events",
                link: "/events",
                description: "Browse upcoming and recent events organized by us.",
                gatsbyImageData: get(this, 'props.data.eventsHeader.nodes[0].image.gatsbyImageData'),
            },
            {
                title: "Read our blog",
                link: "/blog",
                description: "Read about past initiatives, current news and educational content from us.",
                gatsbyImageData: get(this, 'props.data.blogHeader.nodes[0].image.gatsbyImageData'),
            },
            {
                title: "Listen to our official podcast",
                link: "/podcasts",
                description: "Learn about homelessness in Toronto and how our organization was founded.",
                gatsbyImageData: get(this, 'props.data.podcastsHeader.nodes[0].image.gatsbyImageData'),
            },
            {
                title: "Follow on social media",
                link: "/contact",
                description: "Follow us on social media for the quickest way to access announcements and news.",
                gatsbyImageData: get(this, 'props.data.contactHeader.nodes[0].image.gatsbyImageData'),
            }
        ]

		return (
			<Layout location={this.props.location}>
				<SEO title='Keep updated with Blankets for T.O.'
					description='Keep up to date with Blankets for T.O. by reading our blog, listening our podcasts, and following our social media.'
                    doNotCrawl/>
				<div className="white-background">
					<HeaderImage imgFluid={imgFluid} headerTitle={headerTitle} headerSubtitle={headerSubtitle}/>
                    <div className="wrapper">
                        <div className='richText'>
                            <p>
                                Looking for information on Blankets for T.O. and homelessness? Looking for news on our recent initiatives and donations? Look no further than our blog, podcasts, and social media feeds!
                            </p>
                        </div>
                        <SquareGrid content={content}/>
                    </div>			
                </div> 
			</Layout>
		)
	}
}

export default Updates

export const updateQuery = graphql`
	query UpdateQuery {
        site {
			siteMetadata {
				title
			}
		}
		eventsHeader : allContentfulHeaderImage(filter: {pageName: {eq: "Events"}}, limit: 1) {
			nodes {
				image {
					gatsbyImageData(
						layout: FULL_WIDTH
						placeholder: BLURRED
					)
				}
			}
		}
		updateHeader : allContentfulHeaderImage(filter: {pageName: {eq: "About"}}, limit: 1) {
			nodes {
				image {
					gatsbyImageData(
						layout: FULL_WIDTH
						placeholder: BLURRED
					)
				}
			}
		}
        podcastsHeader : allContentfulHeaderImage(filter: {pageName: {eq: "Podcasts"}}, limit: 1) {
			nodes {
				image {
					gatsbyImageData(
						layout: FULL_WIDTH
						placeholder: BLURRED
					)
				}
			}
		}
        blogHeader : allContentfulHeaderImage(filter: {pageName: {eq: "About"}}, limit: 1) {
			nodes {
				image {
					gatsbyImageData(
						layout: FULL_WIDTH
						placeholder: BLURRED
					)
				}
			}
		}
        contactHeader : allContentfulHeaderImage(filter: {pageName: {eq: "Positions"}}, limit: 1) {
			nodes {
				image {
					gatsbyImageData(
						layout: FULL_WIDTH
						placeholder: BLURRED
					)
				}
			}
		}
	}
`
