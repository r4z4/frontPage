// Aaron Rozanski 0718031
// Newspaper Spiral Hopefully

import React, { Component } from "react";
import ReactDOM from 'react-dom';
import "./main_component.css";
import { motion } from "framer-motion";
import domtoimage from 'dom-to-image';
import "./newspaperPage.css";
import NewWindow from 'react-new-window';
import * as consts from "./constants/index.js";
import { Button } from './Buttons';
import ImageUploader from 'react-images-upload';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      newspaperName: "",
      city: "",
      state: "",
      month: "",
      day: "",
      year: "",
      fontHeader: "",
      fontBody: "",
      fontHeadline: "",
      headerFontPreview: "",
      isVertical: false,
      mainHeadline: "",
      mainSubHeading: "",
      mainStory: "",
      mainStoryAuto: false,
      headlineTwo: "",
      author: "",
      storyTwo: "",
      storyTwoAuto: false,
      allAuto: false,
      elseAuto: false,
      image: null,
      pictures: [],
      selectedFile: null,
      imgCaption: "",
      imgFilter: "none",
      imgW: "500px",
      imgH: "300px",
      isGrayscale: false,
      result: "",
      pageColor: "white",
      rotation: "",
      style: "",
      rotation: 0,
      error: "",
      errorMessage: "",
      errorNewspaperName: "",
      errorCity: "",
      errorState: "",
      errorMainHeadline: "",
      errorMainSubHeading: "",
      errorHeadlineTwo: "",
      errorAuthor: "",
      errorYear: "",
      errorDay: "",
      errorMonth: "",
      errorMainStory: "",
      errorStoryTwo: "",
    };
    this.toImage = this.toImage.bind(this);
    this.rotate = this.rotate.bind(this);
    this.clearImage = this.clearImage.bind(this);
    this.spin = this.spin.bind(this);
    this.generate = this.generate.bind(this);
    this.portal = this.portal.bind(this);
    this.download = this.download.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleSelectboxChange = this.handleSelectboxChange.bind(this);
    this.fileChangeHandler = this.fileChangeHandler.bind(this);
    this.uploadHandler = this.uploadHandler.bind(this);
  }
/* toImage() is throwing an uncaught error when the image in frontPageDiv is empty.  Only works with
an image uploaded...which is weird */

toImage(){
  let node = document.getElementById('frontPageDiv');
  let img = Image;

  console.log(node);

  domtoimage.toPng(node)
  .then (function (dataURL) {
    img.src = dataURL;
    console.log(dataURL)
  })
  .then (result => this.setState({"image": img.src}))
    //document.appendChild(img);
  .catch(function (error) {
    console.error("oops", error);
  })

//this.setState({
  //image: img.src,
//})
//console.log(this.state.image);
}

onDrop(pictureFiles, pictureDataURLs) {
  this.setState({
    pictures: this.state.pictures.concat(pictureFiles),
  });
}

rotate(){
  let newRotation = this.state.rotation + 45;
  if (newRotation >= 360){
    newRotation =-360;
  }
  this.setState({
    rotation: newRotation,
  })
};

  portal() {
    return ReactDOM.createPortal(
      <consts.FrontPageHTML id="frontPage" className='frontPage'
      newspaperName = { this.state.newspaperName }
      city = { this.state.city }
      state = { this.state.state }
      date = { this.state.date }
      mainHeadline = { this.state.mainHeadline }
      mainSubHeading = { this.state.mainSubHeading }
      mainStory = {this.state.mainStory }
      headlineTwo = { this.state.headlineTwo }
      storyTwo = {this.state.storyTwo }
      imgCaption = { this.state.imgCaption }
    />, document.body);
  }

  
  download() {
    domtoimage.toPng(document.getElementById('frontPageDiv'))
    .then(function(dataUrl) {
      var link = document.createElement('a');
      link.download = 'imageName.png';
      link.href = dataUrl;
      link.click();
    });
  }
  isValid() {
    if (this.state.errorList)
    {this.state.errorList.map((value, index) => {
    return <p>#{index} - {value}</p>
    })}

  }
  clearImage() {
    this.setState ({selectedFile: null})
  }

  generate() {
    if ( this.state.newspaperName !== ''  && this.state.mainHeadline !== ''
      && this.state.HeadlineTwo !== ''
    && this.state.errorNewspaperName === "" && this.state.errorMainHeadline === "" 
    && this.state.errorYear === "" && this.state.errorMonth === "" && this.state.errorDay === ""
    && this.state.errorHeadlineTwo === "" && this.state.errorMainStory === ""
    && this.state.errorMainSubHeading === "" && this.state.errorAuthor === ""
    && this.state.errorStoryTwo === "" && this.state.errorCity === "" && this.state.errorState === "") {
      
      console.log('generate registers');

      let frontPageHTML =
      <consts.FrontPageHTML id="frontPage"
      newspaperName = { this.state.newspaperName }
      city = { this.state.city }
      state = { this.state.state }
      month = { this.state.month }
      day = { this.state.day }
      year = { this.state.year }
      mainHeadline = { this.state.mainHeadline }
      mainSubHeading = { this.state.mainSubHeading }
      mainStory = {this.state.mainStory }
      headlineTwo = { this.state.headlineTwo }
      author = { this.state.author }
      storyTwo = { this.state.storyTwo }
      fontHeadline = { this.state.fontHeadline }
      fontHeader = { this.state.fontHeader }
      fontBody = { this.state.fontBody }
      picture = { this.state.selectedFile }
      /*picture = { (this.state.selectedFile) ? this.state.selectedFile : this.state.genericImage }*/
      imgFilter = { this.state.imgFilter }
      imgH = { this.state.imgH }
      imgW = { this.state.imgW }
      imgCaption = { this.state.imgCaption }
    />
      this.setState({
      result: frontPageHTML
    })
  } else {
    this.setState ({errorMessage: "Errors Exist. Check required fields."})
  };
}
      /*<NewWindow>
      <consts.FrontPageHTML id="frontPage"
      newspaperName = { this.state.newspaperName }
      city = { this.state.city }
      state = { this.state.state }
      date = { this.state.date }
      mainHeadline = { this.state.mainHeadline }
      mainSubHeading = { this.state.mainSubHeading }
      mainStory = {this.state.mainStory }
      headlineTwo = { this.state.headlineTwo }
      storyTwo = {this.state.storyTwo }
      imgCaption = { this.state.imgCaption }
    />
    </NewWindow>

      <FrontPage className="newspaper" id="frontPage"
        newspaperName = { this.state.newspaperName }
        date = { this.state.date }
        mainHeadline = { this.state.mainHeadline }
        mainStory = {this.state.mainStory }
        headlineTwo = { this.state.headlineTwo }
        storyTwo = {this.state.storyTwo }
      />
    */
  
//For some reason, it redisplays popout window only after I click spin()??? Changing the result?
  spin() {
    let page = this.state.image;
    const style = {
      transform: 'rotate(180deg)',
      transition: 'transform 150ms ease', 
    }

    this.setState({
      style: style,
      result: page,
    })
}
 
  handleSelectboxChange(event) {
    const target = event.target;
    const name = target.name;

    this.setState(() => ({[name]: event.target.value}));
  }
/* Set the preview in the callback function, and thats it. */

  handleCheckboxChange(event) {
    const target = event.target;
    const name = target.name;
    const status = target.value;

    console.log(event.target.name);

    {/* Use a callback function after setState to get checkboxes to work properly --
    setState calls render which causes a delay/loggging issue?? */}
    this.setState({[name]: !this.state[name]}, () => {
    switch(name) {
      case "mainStoryAuto":
      if ( this.state.mainStoryAuto === true ) { this.setState({ mainStory: consts.autoMainStory })}
      else { this.setState({ mainStory: '' })}
      break;
      case "storyTwoAuto":
      if ( this.state.storyTwoAuto === true ) { this.setState({ storyTwo: consts.autoStoryTwo })}
      else { this.setState({ storyTwo: '' })}
      break;
      case "allAuto":
      if ( this.state.allAuto === true ) { this.setState({ 
        newspaperName: consts.autoNewspaperName,
        city: consts.autoCity,
        state: consts.autoState,
        mainHeadline: consts.autoHeadline,
        mainSubHeading: consts.autoMainSubHeading,
        headlineTwo: consts.autoHeadlineTwo,
        author: consts.autoAuthor,
        month: consts.autoMonth,
        day: consts.autoDay,
        year: consts.autoYear,
        mainStory: consts.autoMainStory,
        storyTwo: consts.autoStoryTwo,
        imgCaption: consts.autoImgCaption 
      })}
      else { this.setState({ 
        newspaperName: '',
        city: '',
        state: '',
        mainHeadline: '',
        mainSubHeading: '',
        headlineTwo: '',
        author: '',
        month: '',
        day: '',
        year: '',
        mainStory: '',
        storyTwo: '',
        imgCaption: '' 
      })}
      break;
      case "elseAuto":
      if ( this.state.elseAuto === true ) {
        (this.state.newspaperName) ? this.setState({newspaperName: this.state.newspaperName}) : this.setState({newspaperName: consts.autoNewspaperName});
        (this.state.city) ? this.setState({city: this.state.city}) : this.setState({city: consts.autoCity});
        (this.state.state) ? this.setState({state: this.state.state}) : this.setState({state: consts.autoState});
        (this.state.mainHeadline) ? this.setState({mainHeadline: this.state.mainHeadline}) : this.setState({mainHeadline: consts.autoHeadline});
        (this.state.mainSubHeading) ? this.setState({mainSubHeading: this.state.mainSubHeading}) : this.setState({mainSubHeading: consts.autoMainSubHeading});
        (this.state.headlineTwo) ? this.setState({headlineTwo: this.state.headlineTwo}) : this.setState({headlineTwo: consts.autoHeadlineTwo});
        (this.state.author) ? this.setState({author: this.state.author}) : this.setState({author: consts.autoAuthor});
        (this.state.month) ? this.setState({month: this.state.month}) : this.setState({month: consts.autoMonth});
        (this.state.day) ? this.setState({day: this.state.day}) : this.setState({day: consts.autoDay});
        (this.state.year) ? this.setState({year: this.state.year}) : this.setState({year: consts.autoYear});
        (this.state.mainStory) ? this.setState({mainStory: this.state.mainStory}) : this.setState({mainStory: consts.autoMainStory});
        (this.state.storyTwo) ? this.setState({storyTwo: this.state.storyTwo}) : this.setState({storyTwo: consts.autoStoryTwo});
        (this.state.imgCaption) ? this.setState({imgCaption: this.state.imgCaption}) : this.setState({imgCaption: consts.autoImgCaption});
      }
      break;
      case "isVertical":
        (this.state.isVertical) ? 
        this.setState({
          imgH: "500px",
          imgW: "300px"
          })
        : this.setState({
          imgH: "300px",
          imgW: "500px"
          })
      break;
      case "isGrayscale":
        (this.state.isGrayscale) ? 
        this.setState({
          imgFilter: "grayscale()"
          })
        : this.setState({
          imgFilter: "none"
          })
      break;
      default:
    }
  });
}
    /*this.setState({ [name]: !target.checked }, () => { 
      console.log(this.state[name].status);
    });
  */


    
/* For when I expand out.  Make a data file for each newspaper (LATimes, NYT etc..)
    if (event.target.value === checked) {this.setState({})}
*/
/*
    if ( this.state.mainStoryAuto === true ) {
      console.log('checked');
      this.setState({ mainStory: consts.autoMainStory });
    } else {
      console.log('unchecked');
      this.setState({ mainStory: '' });
    }

    if ( this.state.storyTwoAuto === true ) {
      console.log('storyTwoChecked');
      this.setState({ storyTwo: consts.autoStoryTwo });
    } else {
      console.log('unchecked');
      this.setState({ storyTwo: '' });
    }
    
    if ( this.state.allAuto === true ) {
      console.log('allAutoChecked');
      this.setState({ 
        newspaperName: consts.autoNewspaperName,
        city: consts.autoCity,
        state: consts.autoState,
        mainHeadline: consts.autoHeadline,
        mainSubHeading: consts.autoMainSubHeading,
        headlineTwo: consts.autoHeadlineTwo,
        author: consts.autoAuthor,
        month: consts.autoMonth,
        day: consts.autoDay,
        year: consts.autoYear,
        mainStory: consts.autoMainStory,
        storyTwo: consts.autoStoryTwo,
        imgCaption: consts.autoImgCaption,
         });
    }

    if ( this.state.elseAuto === true ) {
        console.log('elseChecked');
        (this.state.newspaperName) ? this.setState({newspaperName: this.state.newspaperName}) : this.setState({newspaperName: consts.autoNewspaperName});
        (this.state.city) ? this.setState({city: this.state.city}) : this.setState({city: consts.autoCity});
        (this.state.state) ? this.setState({state: this.state.state}) : this.setState({state: consts.autoState});
        (this.state.mainHeadline) ? this.setState({mainHeadline: this.state.mainHeadline}) : this.setState({mainHeadline: consts.autoHeadline});
        (this.state.mainSubHeading) ? this.setState({mainSubHeading: this.state.mainSubHeading}) : this.setState({mainSubHeading: consts.autoMainSubHeading});
        (this.state.headlineTwo) ? this.setState({headlineTwo: this.state.headlineTwo}) : this.setState({headlineTwo: consts.autoHeadlineTwo});
        (this.state.author) ? this.setState({author: this.state.author}) : this.setState({author: consts.autoAuthor});
        (this.state.month) ? this.setState({month: this.state.month}) : this.setState({month: consts.autoMonth});
        (this.state.day) ? this.setState({day: this.state.day}) : this.setState({day: consts.autoDay});
        (this.state.year) ? this.setState({year: this.state.year}) : this.setState({year: consts.autoYear});
        (this.state.mainStory) ? this.setState({mainStory: this.state.mainStory}) : this.setState({mainStory: consts.autoMainStory});
        (this.state.storyTwo) ? this.setState({storyTwo: this.state.storyTwo}) : this.setState({storyTwo: consts.autoStoryTwo});
        (this.state.imgCaption) ? this.setState({imgCaption: this.state.imgCaption}) : this.setState({imgCaption: consts.autoImgCaption});
    }
*/

  /*
  <ReactBootstrap.Checkbox
    id={this.props.controlId}
    onChange={this.props.onChange.bind(this)}
    checked={this.state.form[this.props.controlId]}
    defaultChecked={this.props.placeholder} >
  </ReactBootstrap.Checkbox>);
  */

  /*    this.setState(previousState => ({
           errorList: [...previousState.errorList, this.errorNewspaperName]
         }));    -- Using errorList
  */

   handleInputChange(event) {
     const target = event.target;
     const value = target.value;
     const name = target.name;

     switch(name) {
       case "newspaperName":
         if (value === "") {
           this.errorNewspaperName = "*";
         }
         else if (isNaN(value) && value.length > 1 && value.length < 51) {
           this.errorNewspaperName = "";
         }
         else {
           this.errorNewspaperName = "*2-50 letters";
         }
         this.setState({ errorNewspaperName: this.errorNewspaperName })
         break;
        case "city":
          if (isNaN(value) && value.length > 1 && value.length < 31) {
            this.errorCity = "";
          }
          else {
            this.errorCity = "*2-30 letters";
          }
          this.setState({ errorCity: this.errorCity })
          break;
        case "state":
            if (isNaN(value) && value.length > 1 && value.length < 31) {
              this.errorState = "";
            }
            else {
              this.errorState = "*1-15 characters";
            }
            this.setState({ errorState: this.errorState })
            break;
        case "mainHeadline":
          if (isNaN(value) && value.length > 1 && value.length <= 50) {
            this.errorMainHeadline = "";
          }
          else {
            this.errorMainHeadline = "*2-50 characters";
          }
          this.setState({ errorMainHeadline: this.errorMainHeadline })
          break;
        case "headlineTwo":
            if (isNaN(value) && value.length > 1 && value.length <= 50) {
              this.errorHeadlineTwo = "";
            }
            else {
              this.errorHeadlineTwo = "*2-50 characters";
            }
            this.setState({ errorHeadlineTwo: this.errorHeadlineTwo })
            break;
        case "mainSubHeading" :
            if (isNaN(value) && value.length > 1 && value.length <= 50) {
                this.errorMainSubHeading = "";
              }
            else {
                this.errorMainSubHeading = "*2-50 characters";
              }
              this.setState({ errorMainSubHeading: this.errorMainSubHeading })
            break;
        case "author":
          if (isNaN(value) && value.length > 1 && value.length < 51) {
            this.errorAuthor = "";
          }
          else {
            this.errorAuthor = "*2-50 characters";
          }
          this.setState({ errorAuthor: this.errorAuthor })
          break;
        case "month":
          if (isNaN(value) && value.length > 2 && value.length <= 11) {
            this.errorMonth = "";
          }
          else {
            this.errorMonth = "*2-11 letters";
          }
          this.setState({ errorMonth: this.errorMonth })
          break;
        case "day":
            if (!isNaN(value) && value > 0 && value <= 32) {
              this.errorDay = "";
            }
            else {
              this.errorDay = "*Between 1 and 31";
            }
            this.setState({ errorDay: this.errorDay })
            break;
        case "year":
            if (!isNaN(value) && value > 1900 && value < 4000) {
              this.errorYear = "";
            }
            else {
              this.errorYear = "*Between 1900 and 4000";
            }
            this.setState({ errorYear: this.errorYear })
            break;
        case "mainStory" :
            if (isNaN(value) && value.length > 50 && value.length < 4000) {
              this.errorMainStory = "";
            }
            else {
              this.errorMainStory = "Stories must be 50-4000 characters";
            }
            this.setState({ errorMainStory: this.errorMainStory })
            break;
            case "storyTwo" :
              if (isNaN(value) && value.length > 50 && value.length < 4000) {
                this.errorStoryTwo = "";
              }
              else {
                this.errorStoryTwo = "Stories must be 50-4000 characters";
              }
              this.setState({ errorStoryTwo: this.errorStoryTwo })
              break;
        default:
            break;
     }

     this.setState({
       [name]: value,    
     });
  }
/* Add this to fileChangeHandler for preview
*/

  fileChangeHandler = (event) => {
    this.setState({ selectedFile: URL.createObjectURL(event.target.files[0]) });
    console.log(this.state.selectedFile);
  }

  uploadHandler = () => { 
    console.log(this.state.selectedFile);
  }

//No <span?s displaying the text errors, also add errors for storys to get text length right?
//Add auto-generate story option, checkbox next to label
  render() {
    const { rotation } = this.state;
    return (
      <div className="App">
        <div className="template_select">
        <aside>
            <consts.SelectBox
            options={consts.templates}
            className='templateSelectBox'
            label='Template'
            name='template'
            stateVar={this.state.pageColor}
            onChangeFunction={ this.handleSelectboxChange }
            />  
            </aside>
        </div>
        <div>
        <form className="input">
          <h1>Newspaper Front Page Generator</h1>
          <h2>Headings</h2>
          <div className="headingsInputs">
          <consts.InputAndError
            fullName = "*Newspaper Name"
            name = "newspaperName"
            type = "text"
            value = { this.state.newspaperName }
            onChangeFunction = { this.handleInputChange }
            err = { this.state.errorNewspaperName }
          />
          <consts.InputAndError
            fullName = "City"
            name = "city"
            type = "text"
            value = { this.state.city }
            onChangeFunction = { this.handleInputChange }
            err = { this.state.errorCity }
          />
          {/*Change this to select box*/}
          <consts.InputAndError
            fullName = "State"
            name = "state"
            type = "text"
            value = { this.state.state }
            onChangeFunction = { this.handleInputChange }
            err = { this.state.errorState }
          />
          <consts.InputAndError
            fullName = "*Main Headline"
            name = "mainHeadline"
            type = "text"
            value = { this.state.mainHeadline }
            onChangeFunction = { this.handleInputChange }
            err = { this.state.errorMainHeadline }
          />
          <consts.InputAndError
            fullName = "Main SubHeading"
            name = "mainSubHeading"
            type = "text"
            value = { this.state.mainSubHeading }
            onChangeFunction = { this.handleInputChange }
            err = { this.state.errorMainSubHeading }
          />
          <consts.InputAndError
            fullName = "*Headline Two"
            name = "headlineTwo"
            type = "text"
            value = { this.state.headlineTwo }
            onChangeFunction = { this.handleInputChange }
            err = { this.state.errorHeadlineTwo }
          />
          <consts.InputAndError
            fullName = "Author"
            name = "author"
            type = "text"
            value = { this.state.author }
            onChangeFunction = { this.handleInputChange }
            err = { this.state.errorAuthor }
          />
          <consts.InputAndError
            fullName = "Month"
            name = "month"
            type = "text"
            value = { this.state.month }
            onChangeFunction = { this.handleInputChange }
            err = { this.state.errorMonth }
          />
          <consts.InputAndError
            fullName = "Day"
            name = "day"
            type = "text"
            value = { this.state.day }
            onChangeFunction = { this.handleInputChange }
            err = { this.state.errorDay }
          />
          <consts.InputAndError
            fullName = "Year"
            name = "year"
            type = "text"
            value = { this.state.year }
            onChangeFunction = { this.handleInputChange }
            err = { this.state.errorYear }
          />
          </div> {/* This closes headlinesInputs div */}
          <h2>Stories</h2>
          <div className="storyInputs">
          <consts.StoryCheckbox
            label = ""
            id="story_checkbox"
            name = "mainStoryAuto"
            checked={ this.state.mainStoryAuto }
            onChangeFunction = { this.handleCheckboxChange }
            err = { this.state.errorHeadline }
          />
          <consts.TextArea
            fullName = "Main Story"
            rows = "8"
            cols = "55"
            name = "mainStory"
            value = { this.state.mainStory }
            onChangeFunction = { this.handleInputChange }
            err = { this.state.errorMainStory }
          />
          <consts.StoryCheckbox
            label = ""
            id="story_checkbox"
            name = "storyTwoAuto"
            
            onChangeFunction = { this.handleCheckboxChange }
            err = { this.state.errorHeadline }
          />
          <consts.TextArea
            fullName = "Story Two"
            rows = "8"
            cols = "55"
            name = "storyTwo"
            value = { this.state.storyTwo }
            onChangeFunction = { this.handleInputChange }
            err = { this.state.errorStoryTwo }
          />
          </div> {/* This closes storyInputs div */}
          <div className="checkboxes">
          <consts.Checkbox
            label = "Auto-Fill All (Dbl-Click to Clear)"
            id="checkbox"
            name = "allAuto"
            checked={ this.state.allAuto }
            onChangeFunction = { this.handleCheckboxChange }
            err = { this.state.errorHeadline }
          />
          <consts.Checkbox
            label = "Auto-Fill the Rest"
            id="checkbox"
            name = "elseAuto"
            checked={ this.state.elseAuto }
            onChangeFunction = { this.handleCheckboxChange }
            err = { this.state.errorHeadline }
          />
          </div>
          <h2>Style</h2>
          <div className="styleInputs">
          <consts.SelectBox
            options={consts.fonts}
            className='styleSelectBox'
            label='Header Font'
            name='fontHeader'
            stateVar={this.state.fontHeader}
            onChangeFunction={ this.handleSelectboxChange }
          />
          <consts.SelectBox
            options={consts.fonts}
            className='styleSelectBox'
            label='Headline Font'
            name='fontHeadline'
            stateVar={this.state.fontHeadline}
            onChangeFunction={ this.handleSelectboxChange }
          />
          <consts.SelectBox
            options={consts.bodyFonts}
            className='styleSelectBox'
            label='Body Font'
            name='fontBody'
            stateVar={this.state.fontBody}
            onChangeFunction={ this.handleSelectboxChange }
          />
          </div>
          <div className="styleInputsRowTwo">

          </div>
          <h2>Image</h2>
          <div className='imageInputs'>
          <div className="imageLeft">
            <input type="file" className="imgButton" onChange={this.fileChangeHandler} />
              {/*<button onClick={this.uploadHandler}>Upload</button> -- Get rid of upload, didn't need*/}
          <Button
            onClick={this.clearImage}
            className='clearImage'
            value='Clear'
          />
            <div className='imagePreview'>
            {(this.state.selectedFile) ? (
              <img src={this.state.selectedFile} style={{filter: this.state.imgFilter}} height='200px' width='200px' alt='' />
              ) : (<p className="centered">Image Preview</p>)}
            </div>
          </div>
          <div className="imageRight">
          <consts.Checkbox
            label = "Toggle Orientation"
            id="checkbox"
            name = "isVertical"
            onChangeFunction = { this.handleCheckboxChange }
            err = { this.state.errorHeadline }
          />
          <div className="orientation">
          {(this.state.isVertical === true) ? <span>Orientation: Vertical</span> : <span>Orientation: Horizontal</span>}
          </div>
          <consts.Checkbox
            label = "Grayscale"
            id="checkbox"
            name = "isGrayscale"
            onChangeFunction = { this.handleCheckboxChange }
            err = { this.state.errorHeadline }
          />
          <consts.InputAndError
            fullName = "Image Caption"
            name = "imageCaption"
            type = "text"
            value = { this.state.imageCaption }
            onChangeFunction = { this.handleInputChange }
            err = { this.state.errorHeadline }
          />
          </div>
          </div>
{/*}
          <label>Image</label>
            <img src={ this.state.image } className='image' alt='' />
          <br />
    */}
          <h3>Color</h3>
          <div className="colorInputs">
          <consts.SelectBox
            options={consts.pageColors}
            className='colorSelectBox'
            label='Page Color'
            name='pageColor'
            stateVar={this.state.pageColor}
            onChangeFunction={ this.handleSelectboxChange }
          />
          </div>
          <h3>Front Page Image</h3>
          {(this.state.image) ? (
            <div className="borderTest">
          <img
            className="frontPageDivImage"
            height="1000px"
            width="1300px"
            /*maxWidth='100%'
            maxHeight='100%'*/
            src={ this.state.image }
            alt =''
          /> 
          </div>
          )
          :
          <p className='centered'>No Image Yet</p>
          }
          <div className="errorMessage">
            { this.state.errorMessage }
          </div>
          <div className="buttons">
          <label>&nbsp;</label>
          <Button
          onClick={this.generate}
          className='generateButton'
          value='Generate'
          />
          <label>&nbsp;</label>
          <Button
          onClick={this.spin}
          className='spinButton'
          value='Spin'
          />
          <label>&nbsp;</label>
          <Button
          onClick={this.toImage}
          className='imageButton'
          value='Image'
          />
          <Button
          onClick={this.portal}
          className='portalButton'
          value='Portal'
          />
          <Button
          onClick={this.download}
          className='downloadButton'
          value='Download'
          />
          </div>
{/*
          <label>&nbsp;</label>
          <input type="button" id="toImage" value="toImage"
          onClick={this.toImage} />
          <br />
            This is the old way for buttons
          <label>&nbsp;</label>
          <input type="button" id="spin" value="Spin"
          onClick={this.spin} />
*/}
          </form>
          <br />

          <h2 className="align">Front Page:</h2>
          {(this.state.result) ? (
          <div className="generated">
            <div id='frontPageDiv' style={{backgroundColor: this.state.pageColor}}>
              { this.state.result }
            </div>
            
            <aside>
            <consts.SelectBox
            options={consts.pageColors}
            className='generatedSelectBox'
            label='Page Color'
            name='pageColor'
            stateVar={this.state.pageColor}
            onChangeFunction={ this.handleSelectboxChange }
            />  
            </aside>
          </div>
          ) : (<p className="centered">No Front Page Yet</p>)}
          <br />

        </div>
      </div>
    );
  }
}

export default App;

/*For testing, export your components*/

export	{
	Button,
}

{/*
  download() {
    domtoimage.toJpeg(document.getElementById('frontPageDiv'), { quality: 0.95 })
    .then(function(dataUrl) {
      var link = document.createElement('a');
      link.download = 'imageName.jpeg';
      link.href = dataUrl;
      link.click();
    });
  }
*/}

{/*
<ImageUploader
className='uplogo'
withIcon={false}
withPreview={true}
buttonText='Choose Image'
onChange={this.onDrop}
imgExtension={['.jpg', '.gif', '.png']}
maxFileSize={5242880}
/>
*/}