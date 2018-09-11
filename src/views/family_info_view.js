const PubSub = require('../helpers/pub_sub.js');

const FamilyInfoView = function() {

}

FamilyInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('InstrumentFamilies:selected-family-ready', (event) => {
    const selectedInstrument = event.detail;
    this.generateInfo(selectedInstrument);
  });
};

  FamilyInfoView.prototype.generateInfo = function(instrument){
    const infoParagraph = document.querySelector('#instrument-info');

  infoParagraph.innerHTML = '';

  const instrumentName = document.createElement('h2');
  instrumentName.textContent = instrument.name;
  infoParagraph.appendChild(instrumentName);

  const instrumentDescription = document.createElement('p');
  instrumentDescription.textContent = instrument.description;
  infoParagraph.appendChild(instrumentDescription);
}
module.exports = FamilyInfoView;
