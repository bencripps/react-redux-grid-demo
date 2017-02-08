
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
    
    it("should have a drag handle", function() {
      expect(wrapper.find('./react-grid-resizable')).toBeDefined();

    });

    // ok now I need to simulat the drag... 

  }); 
  */

});
