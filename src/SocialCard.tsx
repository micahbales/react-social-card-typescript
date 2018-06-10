import * as React from 'react';
import './SocialCard.css';

interface IProps {
    username: string;
    avatarImgUrl: string;
}

class SocialCard extends React.Component<IProps> {
    public render() {
        return (
            <div className="social-card">
                <div className="avatar-img">
                    <a href={`http://www.twitter.com/${this.props.username}`} className="avatar-img__link">
                        <img src={this.props.avatarImgUrl} className="avatar-img__img" />
                    </a>
                </div>
            </div>
        )
    }
}

export default SocialCard;