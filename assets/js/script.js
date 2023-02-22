import { soapDom } from "./DOM.js";
import { generateHeading, generateGeneralInfo, generateSubjective, generateObjective, generateAssessment, generatePlan } from "./generateNote.js";


initFieldsetStates(soapDom.fieldsets);
initGeneratePreview();
initPreviewBtn();
initDateField();


function initFieldsetStates(fieldsets) {
    fieldsets.forEach(el => {
        let fieldsetBody = el.querySelector('div');
        let fieldsetLegend = el.querySelector('legend');
        el.classList.add('close');
        fieldsetBody.classList.add('d-none');

        fieldsetLegend.addEventListener('click', function() {
            if (el.classList.contains('close')) {
                el.classList.remove('close');
                el.classList.add('open');
                fieldsetBody.classList.remove('d-none');
            } else {
                el.classList.add('close');
                fieldsetBody.classList.add('d-none');
            }
        });
    });

}

function initGeneratePreview() {
    document.addEventListener('change', function() {
        let note = '';
        note = generateHeading(note);
        note = generateGeneralInfo(note);
        note = generateSubjective(note);
        note = generateObjective(note);
        note = generateAssessment(note);
        note = generatePlan(note);
        document.querySelector('#printNote').innerHTML = note;
    });
}

function initPreviewBtn() {
    soapDom.previewBtn.addEventListener('click', function() {
        if (this.classList.contains('show')) {
            this.classList.remove('show');
            this.classList.add('hide');
            this.innerText = 'Show Preview';
            soapDom.printNote.classList.add('d-none');
            soapDom.soapNote.classList.add('col-12');
        } else {
            this.classList.add('show');
            this.classList.remove('hide');
            this.innerText = 'Hide Preview';
            soapDom.printNote.classList.remove('d-none');
            soapDom.soapNote.classList.remove('col-12');
        }
    });
}

function initDateField() {
    soapDom.date.innerText = new Date().toLocaleDateString();
}