import React from 'react';
import { shallow } from '../src/enzyme';
import { shallowToJson  } from 'enzyme-to-json';
import { SmallInfo } from '../src/components/SmallInfo';
import mock from '../mock.js'

it('Error отображается корректно', () => {
    var serverInfo = {
        isErrored: true,
        city: "Moscow",
        data: mock
    };

    const miniCity = shallow(
        <SmallInfo serverInfo = {serverInfo} />
    );
    expect(shallowToJson(miniCity)).toMatchSnapshot();
});

it('Loading отображается корректно', () => {
    var serverInfo = {
        isErrored: false,
        city: "Moscow",
        data: mock
    };

    const miniCity = shallow(
        <SmallInfo serverInfo = {serverInfo} />
    );
    expect(shallowToJson(miniCity)).toMatchSnapshot();
});

it('Loaded отображается корректно', () => {
    var serverInfo = {
        isLoaded: true,
        isErrored: false,
        city: "Moscow",
        data: mock
    };

    const miniCity = shallow(
        <SmallInfo serverInfo = {serverInfo} />
    );
    expect(shallowToJson(miniCity)).toMatchSnapshot();
});