import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Footer extends Component {
    clear = () => {
        this.props.clearAll()
    }

    render() {
        return (
            <footer>
                <span className="footer">Copyright © 2019 lizhan1@xiaomi.com</span>
                {/* eslint-disable-next-line */}
                <span><a onClick={this.clear} href="javascript:void(0)">clear</a></span>
            </footer>
        );
    }
}

Footer.propTypes = {
    clearAll: PropTypes.func.isRequired
}