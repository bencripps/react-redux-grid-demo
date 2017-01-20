import Immutable from 'immutable';
const FakeObjectDataStore = require('./FakerStore');
const UIPlugins = require("./react-data-grid.ui-plugins");
/*
const Editors             = UIPlugins.Editors;
const AutoCompleteEditor  = Editors.AutoComplete;
const DropDownEditor      = Editors.DropDownEditor;

var data = {
 counties: [{id : 0, title : 'Bedfordshire'}, 
   { id : 1, title : 'Berkshire'}, 
   { id : 2, title : 'Buckinghamshire'}, 
   { id : 3, title : 'Cambridgeshire'}, 
   { id : 4, title : 'Cheshire'}, 
   { id : 5, title :'Cornwall'},
   { id : 6, title : 'Cumbria, (Cumberland)'}, 
   { id : 7, title : 'Derbyshire'}, 
   { id : 8, title :'Devon'}, 
   { id : 9, title :'Dorset'},
   { id : 10, title :'Durham'},
   { id : 11, title :'Essex'},
   { id : 12, title :'Gloucestershire'},
   { id : 13, title :'Hampshire'},
   { id : 14, title :'Hertfordshire'},
   { id : 15, title :'Huntingdonshire'},
   { id : 16, title :'Kent'},
   { id : 17, title :'Lancashire'},
   { id : 18, title :'Leicestershire'},
   { id : 19, title :'Lincolnshire'},
   { id : 20, title :'Middlesex'},
   { id : 21, title :'Norfolk'},
   { id : 22, title :'Northamptonshire'},
   { id : 23, title :'Northumberland'},
   { id : 24, title :'Nottinghamshire'},
   { id : 25, title :'Northamptonshire'},
   { id : 26, title :'Oxfordshire'},
   { id : 27, title :'Northamptonshire'},
   { id : 28, title :'Rutland'},
   { id : 29, title :'Shropshire'},
   { id : 30, title :'Somerset'},
   { id : 31, title :'Staffordshire'},
   { id : 32, title :'Suffolk'},
   { id : 33, title :'Surrey'},
   { id : 34, title :'Sussex'},
   { id : 35, title :'Warwickshire'},
   { id : 36, title :'Westmoreland'},
   { id : 37, title :'Wiltshire'},
   { id : 38, title :'Worcestershire'},
   { id : 39, title :'Yorkshire'}],
   titles: ['Dr.', 'Mr.', 'Mrs.', 'Miss', 'Ms.'],
 };
*/

export var getColumns = function(){

      const threeColumns = new Immutable.List([
      {
        key: 'id',
        name: 'ID',
        width : 80,
        resizable: true
      },
      {
        key: 'avartar',
        name: 'Avartar',
        width : 60,
        formatter : UIPlugins.Formatters.ImageFormatter,
        resizable : true
      },
      {
        key: 'firstName',
        name: 'First Name',
        editable:true,
        width : 200,
        resizable: true
      }
    ]);

    /*  
    const allColumns = new Immutable.List([
      {
        key: 'id',
        name: 'ID',
        width : 80,
        resizable: true
      },
      {
        key: 'avartar',
        name: 'Avartar',
        width : 60,
        formatter : UIPlugins.Formatters.ImageFormatter,
        resizable : true
      },
      {
        key: 'county',
        name: 'County',
        editor: <AutoCompleteEditor options={data.counties} onCommit={() => {}} column={{name:'county', key:'county', width: 200}} value='wicklow'/>,
        width : 200,
        resizable: true
      },
      {
        key: 'title',
        name: 'Title',
        editor : <DropDownEditor options={data.titles}/>,
        width : 200,
        resizable: true
      },
      {
        key: 'firstName',
        name: 'First Name',
        editable:true,
        width : 200,
        resizable: true
      },
      {
        key: 'lastName',
        name: 'Last Name',
        editable:true,
        width : 200,
        resizable: true
      },
      {
        key: 'email',
        name: 'Email',
        editable:true,
        width : 200,
        resizable: true
      },
      {
        key: 'street',
        name: 'Street',
        editable:true,
        width : 200,
        resizable: true
      },
      {
        key: 'zipCode',
        name: 'ZipCode',
        editable:true,
        width : 200,
        resizable: true
      },
      {
        key: 'date',
        name: 'Date',
        editable:true,
        width : 200,
        resizable: true
      },
      {
        key: 'bs',
        name: 'bs',
        editable:true,
        width : 200,
        resizable: true
      },
      {
        key: 'catchPhrase',
        name: 'Catch Phrase',
        editable:true,
        width : 200,
        resizable: true
      },
      {
        key: 'companyName',
        name: 'Company Name',
        editable:true,
        width : 200,
        resizable: true
      },
      {
        key: 'sentence',
        name: 'Sentence',
        editable:true,
        width : 200,
        resizable: true
      }
    ]);
    */
    return threeColumns; 
  }

export var getRows = function( numRows ){
    let fakeRows = FakeObjectDataStore.createRows(numRows);
    return Immutable.fromJS(fakeRows);
}
     