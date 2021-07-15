import React from 'react';
import moment from 'moment';
import { CountdownWrapper, Wrapper, CountItem } from './styled';

export default class Contador extends React.Component {
    state = {
        days: undefined,
        hours: undefined,
        minutes: undefined,
        seconds: undefined
    };

    componentDidMount() {
        this.interval = setInterval(() => {
            const { timeTillDate, timeFormat } = this.props;
            const then = moment(timeTillDate, timeFormat);
            const now = moment();
            const countdown = moment(then - now);
            const days = countdown.format('D');
            const hours = countdown.format('HH');
            const minutes = countdown.format('mm');
            const seconds = countdown.format('ss');

            this.setState({ days, hours, minutes, seconds });
        }, 1000);
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    render() {
        const { days, hours, minutes, seconds } = this.state;

        return (
            <CountdownWrapper>
                <Wrapper>
                    <CountItem>
                        {days}
                        <span>dias</span>
                    </CountItem>
                    <CountItem>
                        {hours}
                        <span>horas</span>
                    </CountItem>
                    <CountItem>
                        {minutes}
                        <span>minutos</span>
                    </CountItem>
                    <CountItem>
                        {seconds}
                        <span>segundos</span>
                    </CountItem>
                </Wrapper>
            </CountdownWrapper>
        );
    }
}

