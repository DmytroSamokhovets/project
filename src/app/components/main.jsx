/** In this file, we create a React component which incorporates components provided by material-ui */

var React = require('react');
var mui = require('material-ui');
var SelectField = mui.SelectField;
var Paper = mui.Paper;
var Toolbar = mui.Toolbar;
var ToolbarGroup = mui.ToolbarGroup;
var TextField = mui.TextField;
var FlatButton = mui.FlatButton;
var Snackbar = mui.Snackbar;
var ThemeManager = new mui.Styles.ThemeManager();

var menuItemsPurpose = [
  { playload : '1', text: 'build a monthly budget' },
  { playload : '2', text: 'something else' },
  { playload : '3', text: 'something else' }
];

var menuItemsObjective = [
    { playload : '1', text: 'maximize my savings' },
    { playload : '2', text: 'something else' },
    { playload : '3', text: 'something else' }
];

var menuItemsHousing = [
    { playload : '1', text: 'own a home' },
    { playload : '2', text: 'something else' },
    { playload : '3', text: 'something else' }
];

var menuItemsFamilyMembers = [
    { playload : '1', text: 'with my spouse and kid(s)' },
    { playload : '2', text: 'something else' },
    { playload : '3', text: 'something else' }
];

var menuItemsLifestyle = [
    { playload : '1', text: 'luxurious' },
    { playload : '2', text: 'something else' },
    { playload : '3', text: 'something else' }
];

var menuItemsSavings = [
    { playload : '1', text: 'quite a bit' },
    { playload : '2', text: 'something else' },
    { playload : '3', text: 'something else' }
];

var menuItemsIncome = [
    { playload : '1', text: '$40K or less' },
    { playload : '2', text: 'something else' },
    { playload : '3', text: 'something else' }
];

var Main = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  componentWillMount: function(){
    ThemeManager.setComponentThemes({
        textField: {
            focusColor:"#2EA1F4"
        },
        flatButton: {
            color:"#FAFAFA",
            textColor:"#8CC540"
        },
        paper: {
            backgroundColor:"#FAFAFA"
        },
        snackbar: {
            backgroundColor:"#4D4D4D"
        }
    });
  },

  getInitialState: function(){
    return {
      purpose:'',
      objective: '',
      name: '',
      age: '',
      housing: '',
      city: '',
      state: '',
      familyMembers: '',
      lifestyle: '',
      savings: '',
      income: '',
      errorTextName: '',
      errorTextAge: '',
      errorTextCity: '',
      errorTextState: '',
      errorTextPurpose: '',
      autoHideDuration: 5000
    };
  },

    getStyles: function () {
      return {
          toolbar: {
              backgroundColor:"inherit",
              color: "black",
              borderRadius:"0 0 2px 2px"
          },
          snackbar:{
              position:"absolute",
              bottom:"65px",
              marginLeft:"115px",
              borderRadius:"4px"
          },
          error:{
              width:'70px',
              marginLeft:"-11px"
          },
          flatButton:{
              margin:"10px 0px"
          },
          longField:{
              width:"395px"
          },
          shortField:{
              width:"137px",
              float:"left"
          },
          nameField:{
              width:"166px"
          },
          ageField:{
              width:"35px"
          },
          housingField:{
              width:"166px",
              float:"left"
          },
          cityField:{
              width:"132px"
          },
          stateField:{
              width:"40px"
          },
          incomeField:{
              width:"228px",
              float:"left"
          }
      }
    },

    render() {

    var styles = this.getStyles();

    return (
      <div className="form-container">
        <Paper className="form">
            <h2 className="title-h2">Now, what would you like to do?</h2>

            <Toolbar style={styles.toolbar}>
              <ToolbarGroup className="select-field-wrapper" key={1} float="right">
                <span className="form-text purpose-bg">I want to</span>
                <SelectField
                    className="select-field"
                    style={styles.longField}
                    hintText="[ Select a financial purpose ]"
                    value={this.state.purpose}
                    menuItems={menuItemsPurpose}
                    onChange={this._handlePurposeChange}
                />
                  <div className="bg"></div>
              </ToolbarGroup>
            </Toolbar>

            <Toolbar style={styles.toolbar}>
              <ToolbarGroup className="select-field-wrapper" key={2} float="right">
                <span className="form-text objective-bg">So I can</span>
                <SelectField
                    className="select-field"
                    style={styles.longField}
                    value={this.state.objective}
                    hintText="[ Select an objective ]"
                    menuItems={menuItemsObjective}
                    onChange={this._handleObjectiveChange}
                />
              </ToolbarGroup>
            </Toolbar>

          <h2 className="title-h2">Please share a little about you</h2>

          <Toolbar style={styles.toolbar}>
            <ToolbarGroup className="text-field-wrapper" key={3} float="right" >
              <span className="form-text name-bg">I am</span>
              <TextField
                  ref="name"
                  pattern="[A-Za-z]"
                  style={styles.nameField}
                  className="text-field"
                  hintText="Full Name"
                  errorText={this.state.errorTextName}
                  onChange={this._handleNameChange}
              />
              <span className="form-text age-bg">and I am</span>
              <TextField
                  ref="age"
                  style={styles.ageField}
                  className="text-field age"
                  maxLength="2"
                  hintText="00"
                  errorText={this.state.errorTextAge}
                  errorStyle={styles.error}
                  onChange={this._handleAgeChange}
              />
              <span className="form-text">years of age.</span>
            </ToolbarGroup>
          </Toolbar>

          <Toolbar style={styles.toolbar}>
            <ToolbarGroup className="text-field-wrapper" key={4} float="right" >
              <span className="form-text housing-bg">I</span>
              <SelectField
                  style={styles.housingField}
                  className="select-field"
                  value={this.state.housing}
                  hintText="[ Select housing ]"
                  menuItems={menuItemsHousing}
                  onChange={this._handleHousingChange}
                  />
              <span className="form-text city-bg">in</span>
              <TextField
                  ref="city"
                  style={styles.cityField}
                  className="text-field"
                  hintText="City"
                  errorText={this.state.errorTextCity}
                  onChange={this._handleCityChange}
                  />
              <span className="form-text state-bg">,</span>
              <TextField
                  ref="state"
                  style={styles.stateField}
                  className="text-field state"
                  maxLength="2"
                  hintText="ST"
                  errorText={this.state.errorTextState}
                  errorStyle={styles.error}
                  onChange={this._handleStateChange}
                  />
            </ToolbarGroup>
          </Toolbar>

          <Toolbar style={styles.toolbar}>
            <ToolbarGroup className="select-field-wrapper" key={5} float="right">
              <span className="form-text members-bg">Where I live</span>
              <SelectField
                  style={styles.longField}
                  className="select-field"
                  value={this.state.familyMembers}
                  hintText="[ Select family members ]"
                  menuItems={menuItemsFamilyMembers}
                  onChange={this._handleMembersChange}
                  />
            </ToolbarGroup>
          </Toolbar>

          <Toolbar style={styles.toolbar}>
            <ToolbarGroup className="select-field-wrapper" key={6} float="right">
              <span className="form-text lifestyle-bg">My lifestyle is</span>
              <SelectField
                  style={styles.shortField}
                  className="select-field"
                  value={this.state.lifestyle}
                  hintText="[ Select lifestyle ]"
                  menuItems={menuItemsLifestyle}
                  onChange={this._handleLifestyleChange}
                  />
                <span className="form-text savings-bg">and I've saved</span>
                <SelectField
                    style={styles.shortField}
                    className="select-field"
                    value={this.state.savings}
                    hintText="[ Select savings ]"
                    menuItems={menuItemsSavings}
                    onChange={this._handleSavingsChange}
                    />
            </ToolbarGroup>
          </Toolbar>

          <Toolbar style={styles.toolbar}>
              <ToolbarGroup className="select-field-wrapper" key={7} float="right">
                  <span className="form-text income-bg">My yearly household income is about</span>
                  <SelectField
                      style={styles.incomeField}
                      className="select-field"
                      value={this.state.income}
                      hintText="[ Select your yearly income ]"
                      menuItems={menuItemsIncome}
                      onChange={this._handleIncomeChange}
                      />
              </ToolbarGroup>
          </Toolbar>

          <Toolbar className="button-wrapper" style={styles.toolbar}>
              <ToolbarGroup key={8} float="right">
                  <FlatButton
                      style={styles.flatButton}
                      onTouchTap={this._handleClick}
                      label="I'm done lets go!"
                      hoverColor="#F3F9EC"
                      />
              </ToolbarGroup>
          </Toolbar>

            <Snackbar
                style={styles.snackbar}
                ref="snackbar"
                message="Invalid input, please check and try again"
                autoHideDuration={this.state.autoHideDuration}
                />

        </Paper>
      </div>
    );
    },

    _handlePurposeChange: function(e, selectedIndex, menuItem){
      this.setState({
          purpose:menuItem.text
      });
    },

    _handleObjectiveChange: function(e, selectedIndex, menuItem){
      this.setState({
          objective:menuItem.text
      });
    },

    _handleHousingChange: function(e, selectedIndex, menuItem){
      this.setState({
          housing:menuItem.text
      });
    },

    _handleMembersChange: function(e, selectedIndex, menuItem){
      this.setState({
          familyMembers:menuItem.text
      });
    },

    _handleLifestyleChange: function(e, selectedIndex, menuItem){
      this.setState({
          lifestyle:menuItem.text
      });
    },

    _handleSavingsChange: function(e, selectedIndex, menuItem){
      this.setState({
          savings:menuItem.text
      });
    },

    _handleIncomeChange: function(e, selectedIndex, menuItem){
      this.setState({
          income:menuItem.text
      });
    },

    _handleNameChange: function (e){
      var value = this.refs.name.getValue();
      var re = /[^A-Za-z]/gi;
      if (re.test(value)) {
          this.refs.name.setValue(value.replace(re, ''));
          value = value.replace(re, '');
      }
      this.setState({
          name: value,
          errorTextName:""
      });
    },

    _handleAgeChange: function (e){
      var value = this.refs.age.getValue();
      var re = /[^0-9]/gi;
      if (re.test(value)) {
          this.refs.age.setValue(value.replace(re, ''));
          value = value.replace(re, '');
      }
      this.setState({
          age: value,
          errorTextAge:""
      });
    },

    _handleCityChange: function (e){
        var value = this.refs.city.getValue();
        var re = /[^A-Za-z]/gi;
        if (re.test(value)) {
            this.refs.city.setValue(value.replace(re, ''));
            value = value.replace(re, '');
        }
      this.setState({
          city: value,
          errorTextCity:""
      });
    },

    _handleStateChange: function (e){
        var value = this.refs.state.getValue();
        var re = /[^A-Za-z]/gi;
        if (re.test(value)) {
            this.refs.state.setValue(value.replace(re, ''));
            value = value.replace(re, '');
        }
      this.setState({
          state: value,
          errorTextState:""
      });
    },

    _handleClick: function(e){
      ThemeManager.setComponentThemes({
          flatButton: {
              color:"#DCEEC5"
          }
      });
        if (this.state.name === '') {
            this.setState({
                errorTextName:"Please type your Name"
            });
            this.refs.snackbar.show()
        }
        if (this.state.age === '') {
            this.setState({
                errorTextAge:"Check Age"
            });
            this.refs.snackbar.show()
        }
        if (this.state.city === '') {
            this.setState({
                errorTextCity:"Type City"
            });
            this.refs.snackbar.show()
        }
        if (this.state.state === '') {
            this.setState({
                errorTextState: "Type State"
            });
            this.refs.snackbar.show()
        }
        console.log(this.state);
    }

});

module.exports = Main;
