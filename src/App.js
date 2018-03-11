import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';

class App extends Component {
  render() {
    return (
      <div className="App">
        some text
      </div>
    );
  }
}

//export default App;
export default class Sample extends React.Component {
    render() {
    return (
        <Gallery photos={PHOTO_SET} columns={4} />
    );
    }
}
const PHOTO_SET = [
  {
    src: 'https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=53417780c9a34ffae5334a1d03b105a6&auto=format&fit=crop&w=1350&q=80',
    width: 3,
    height: 2,
    alt: "a fancy coffee shoppe"
  },
  {
    src: 'https://images.unsplash.com/photo-1477512076069-d31eb021716f?ixlib=rb-0.3.5&s=754f6c0baade39007dc0e8816128290f&auto=format&fit=crop&w=750&q=80',
    width: 3,
    height: 2
  },
  {
    src: 'https://images.unsplash.com/photo-1506456331400-7088248a8db1?ixlib=rb-0.3.5&s=420f01eb4341bfb6aa2439bae41c9458&auto=format&fit=crop&w=667&q=80',
    width: 3,
    height: 2
  },
  {
    src: 'https://images.unsplash.com/photo-1496430551739-3b0c25d12f53?ixlib=rb-0.3.5&s=8d82b5de377294f799b368c8328508fd&auto=format&fit=crop&w=750&q=80',
    width: 3,
    height: 2
  },
  {
    src: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?ixlib=rb-0.3.5&s=f15266c44ad3a10610cddcc54bb54d85&auto=format&fit=crop&w=334&q=80',
    width: 3,
    height: 2
  },
  {
    src: 'https://images.unsplash.com/photo-1469131792215-9c8aaff71393?ixlib=rb-0.3.5&s=67af4509a97264cefb2cf898f2ed5bf6&auto=format&fit=crop&w=750&q=80',
    width: 3,
    height: 2
  },
  {
    src: 'https://images.unsplash.com/photo-1496275068113-fff8c90750d1?ixlib=rb-0.3.5&s=55c84b1ad057a4ffb9836022611b2495&auto=format&fit=crop&w=750&q=80',
    width: 3,
    height: 2
  },
  {
    src: 'https://images.unsplash.com/photo-1489702932289-406b7782113c?ixlib=rb-0.3.5&s=2222a9f97dac574aa09cc67aaf8929eb&auto=format&fit=crop&w=752&q=80',
    width: 3,
    height: 2
  },
  {
    src: 'https://images.unsplash.com/photo-1467564151038-a705a00e19bf?ixlib=rb-0.3.5&s=0771f64b5d2679f8859b1bdd738552ba&auto=format&fit=crop&w=334&q=80',
    width: 3,
    height: 2
  },
  {
    src: 'https://images.unsplash.com/photo-1474626783033-ca9bac39339e?ixlib=rb-0.3.5&s=80c70ad184644060bec9eae61780f949&auto=format&fit=crop&w=753&q=80',
    width: 3,
    height: 2
  }
];


/*

*/
