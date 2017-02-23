import React from 'react';
import store from '../../../redux/configureStoreForTests';
import { shallow, mount, render } from 'enzyme';
import BulkSelection from './BulkSelection';
import { Grid, Actions } from 'react-redux-grid';

jest.unmock()

describe('<BulkSelection />', () => {

  it("should render swallowly without testing sub components", function() {
     const wrapper = shallow(<BulkSelection store={store} />);
     expect(wrapper).toBeDefined();
  });

  it("should render mounted with sub components affecting tests", function() {
     const wrapper = mount(<BulkSelection store={store} />);
     expect(wrapper).toBeDefined();
  });

  it("should have a Grid with data", function() {
     const wrapper = mount(<BulkSelection store={store} />);
     expect( wrapper.find('Grid') ).toBeDefined();
     //expect(wrapper.prop('data')).to.have.length.toBeGreaterThan(1);
  });

  it("should have a Grid with data with 1 on init", function() {
     const wrapper = mount(<BulkSelection store={store} />);
     const data = wrapper.find('Grid').prop('data');

     expect(data).toBeDefined();
  });

  it("should have a Grid with data with greater than 1 after load", function() {
     const wrapper = mount(<BulkSelection store={store} />);
     const data = wrapper.find('Grid').prop('data');
     
     expect(data.length).toBeGreaterThan(1);
  });


});

