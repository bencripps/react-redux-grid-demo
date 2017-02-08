<<<<<<< HEAD
import React from 'react';
import store from '../../../redux/configureStoreForTests';
import React from 'react';
import store from '../../../redux/configureStoreForTests';
import { shallow, mount, render } from 'enzyme';
import Complex from './Complex';
import { Grid, Actions } from 'react-redux-grid';

jest.unmock()

describe('<Complex />', () => {

  it("should render swallowly without testing sub components", function() {
     const wrapper = shallow(<Complex store={store} />);
     expect(wrapper).toBeDefined();
  });

  it("should render mounted with sub components affecting tests", function() {
     const wrapper = mount(<Complex store={store} />);
     expect(wrapper).toBeDefined();
  });

  it("should have a Grid with data", function() {
     const wrapper = mount(<Complex store={store} />);
     expect( wrapper.find('Grid') ).toBeDefined();
     //expect(wrapper.prop('data')).to.have.length.toBeGreaterThan(1);
  });

  it("should have a Grid with data with 1 on init", function() {
     const wrapper = mount(<Complex store={store} />);
     const data = wrapper.find('Grid').prop('data');

     expect(data).toBeDefined();
  });

  it("should have a Grid with data with greater than 1 after load", function() {
     const wrapper = mount(<Complex store={store} />);
     const data = wrapper.find('Grid').prop('data');
     
     expect(data.length).toBeGreaterThan(1);
  });

  describe('Phone Number column', () => {
    it("should have a drag handle", function() {
      const wrapper = mount(<Complex store={store} />);
      expect(wrapper.find('./react-grid-resizable')).toBeDefined();
      // react-grid-drag-handle
    });
  }); 

});
||||||| parent of 88c608e... white on white editable cells
=======

import React from 'react';
import store from '../../../redux/configureStoreForTests';
import sinon from 'sinon';
import expect from 'expect';
import { shallow, mount, render } from 'enzyme';
import Complex from './Complex';
import { Grid, Actions } from 'react-redux-grid';

jest.unmock()

describe('<Complex />', () => {

  const wrapperShallow = shallow(<Complex store={store} />);
  const wrapper = mount(<Complex store={store} />);

  it("should render swallowly without testing sub components", function() {
     expect(wrapperShallow).toBeDefined();
  });

  it("should render mounted with sub components affecting tests", function() {
     expect(wrapper).toBeDefined();
  });

  it("should have a Grid", function() {
     expect( wrapper.find('Grid') ).toBeDefined();
  });

  it("should have a Grid with data", function() {
     const data = wrapper.find('Grid').prop('data');
     expect(data).toBeDefined();
  });

  it("should have a Grid with data with greater than 1 after load", function() {
     const data = wrapper.find('Grid').prop('data');
     expect(data.length).toBeGreaterThan(1);
  });

<<<<<<< HEAD
  ///////////////////////////////////////////////////  EDIT ROW 

  /*
  
  I want eventually add these tests when I get them working...

  it("should have change the row into an editable state", function() {
    
    const onMockClick = sinon.spy();

    const actionBtn = wrapper.find('tbody').find('.react-grid-action-container').first();
    //actionBtn.onClick = onMockClick;

    actionBtn.simulate('click');
    // this test isn't working... it should be true if it's clicked once
    expect(onMockClick.calledOnce).toEqual(false);

  });

  ///////////////////////////////////////////////////  DRAG 

  describe('Draggable column', () => {
    
||||||| merged common ancestors
  describe('Phone Number column', () => {
=======
  ///////////////////////////////////////////////////  EDIT ROW 

  /*
  
  I want eventually add these tests when I get them working...

  it("should have change the row into an editable state", function() {
    git a
    const onMockClick = sinon.spy();

    const actionBtn = wrapper.find('tbody').find('.react-grid-action-container').first();
    //actionBtn.onClick = onMockClick;

    actionBtn.simulate('click');
    // this test isn't working... it should be true if it's clicked once
    expect(onMockClick.calledOnce).toEqual(false);

  });

  ///////////////////////////////////////////////////  DRAG 

  describe('Draggable column', () => {
    
>>>>>>> master
    it("should have a drag handle", function() {
      expect(wrapper.find('./react-grid-resizable')).toBeDefined();

    });

    // ok now I need to simulat the drag... 

  }); 
  */

});
>>>>>>> 88c608e... white on white editable cells
