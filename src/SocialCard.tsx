import * as React from 'react';
import './SocialCard.css';

interface IProps {
    avatarImgUrl: string;
    name: string;
    timestamp: string;
    username: string;
}

class SocialCard extends React.Component<IProps> {
    public render() {
        return (
            <div className="social-card">
                <div className="avatar-img">
                    <a href={`http://www.twitter.com/${this.props.username}`}>
                        <img src={this.props.avatarImgUrl} className="avatar-img__img" />
                    </a>
                </div>
                <div className="name">
                    <p>{this.props.name}</p>
                </div>
                <div className="username">
                    <a href={`http://www.twitter.com/${this.props.username}`}>
                        <p>@{this.props.username}</p>
                    </a>
                </div>
                <div className="timestamp">
                    <p>{this.props.timestamp}</p>
                </div>
            </div>
        )
    }
}

export default SocialCard;