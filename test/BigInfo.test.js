import React from 'react';
import { shallow } from '../src/enzyme';
import { shallowToJson  } from 'enzyme-to-json';
import BigInfo from '../src/components/BigInfo';
import serverInfo from '../mock'

it('Loading отображается корректно', () => {
    const largeCity = shallow(<BigInfo />);
    expect(shallowToJson(largeCity)).toMatchSnapshot();
});

it('Connection Problems отображается корректно', () => {
    const largeCity = shallow(<BigInfo />);
    largeCity.setState({connectionProblems: true});
    expect(shallowToJson(largeCity)).toMatchSnapshot();
});

it('Loaded отображается корректно', () => {
    const largeCity = shallow(<BigInfo />);
    largeCity.setState({isLoaded: true, serverInfo: serverInfo});
    expect(shallowToJson(largeCity)).toMatchSnapshot();
});
