import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { memberCard, memberPortrait, memberInformation, name, title, memberContact, memberContactEntry, memberContactIcon, memberContactLink } from './member-circle.module.css'
import emailImage from '../images/email.svg'
import twitterImage from '../images/twitter.svg'
import facebookImage from '../images/facebook.svg'
import instagramImage from '../images/instagram.svg'
import linkedInImage from '../images/linkedin.svg'
import githubImage from '../images/github.png'
import websiteImage from '../images/link.png'
import placeholderPortrait from '../images/placeholderperson.png';

export default class MemberCircle extends React.Component { 

    state = { showDescription: false } 

    clickShowMore = () => {
        this.setState({showDescription: true}); 
    } 
    clickHide = () => {
        this.setState({showDescription: false}); 
    }

    render() {
        const { data } = this.props;

        const contact = [
            { alt: "Email", link: data.email, icon: emailImage },
            { alt: "Facebook", link: data.facebookLink, icon: facebookImage },
            { alt: "Instagram", link: data.instagramLink, icon: instagramImage },
            { alt: "Twitter", link: data.twitterLink, icon: twitterImage },
            { alt: "LinkedIn", link: data.linkedInLink, icon: linkedInImage },
            { alt: "GitHub", link: data.githubLink, icon: githubImage },
            { alt: "Website", link: data.websiteLink, icon: websiteImage }
        ]

        return(
            <div className={memberCard}>
                {data.photo === null ? 
                    <div className={memberPortrait}>
                        <img src={placeholderPortrait} alt={`Placeholder portrait of ${data.title}`}/>
                    </div>
                    :  
                    <GatsbyImage className={memberPortrait} image={data.photo.gatsbyImageData} alt={`Portrait of ${data.title}`}/>
                }
                <div className={memberInformation}>
                    <span className={name}>{data.name}</span>
                    <span className={title}>{data.title}</span>
                    <div className={memberContact}>
                        {
                            contact.map(x => { return(
                                x.link && 
                                <div className={memberContactEntry} key={data.name+" "+x.alt}>
                                    <a className={memberContactLink} href={x.alt !== "Email" ? x.link : `mailto:${x.link}`} target="_blank" rel="noopener noreferrer">
                                        <img className={memberContactIcon} src={x.icon} alt={`${x.alt} Icon`}/>
                                    </a>
                                </div> 
                            )})
                        } 
                    </div>
                </div>
            </div>
        )
    }
}
