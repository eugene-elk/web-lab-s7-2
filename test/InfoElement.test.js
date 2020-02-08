import React from 'react';
import InfoElement from '../src/components/InfoElement';
import renderer from 'react-test-renderer';

const data = {
    type: 'Влажность',
    value: '123' + ' %'
};

it('отображается корректно', () => {
    const tree = renderer.create(
        <InfoElement data={data}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();

});


