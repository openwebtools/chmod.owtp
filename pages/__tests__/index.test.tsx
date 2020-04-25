import React from 'react';
import { mount } from 'enzyme';
import Index from '../index';


const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('index page', () => {
  it('should have App component', () => {

    const subject = mount(
            <Index />
        );

    expect(subject.find('App')).toHaveLength(1);
  });
});