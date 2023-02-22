import { soapDom } from "./DOM.js";
import { tags } from "./tags.js";

export const generateHeading = (note) => {
    note += tags.h1('Logo Here', 'text-center') + tags.p('Address', 'text-center') + tags.p('Contact Information', 'text-center');
    return note;
}

export const generateGeneralInfo = (note) => {
    note += tags.span('Name:', 'd-inline-block col-2') + tags.span(soapDom.name.value) + tags.br();
    note += tags.span('Sex:', 'd-inline-block col-2') + tags.span(soapDom.sex.value) + tags.br();
    note += tags.span('Age:', 'd-inline-block col-2') + tags.span(soapDom.age.value) + tags.br();
    note += tags.span('Date:', 'd-inline-block col-2') + tags.span(soapDom.date.innerText) + tags.br();
    return note;
}

export const generateSubjective = (note) => {
    if (soapDom.subjectiveTxa.value) {
        note += tags.legend('Subjective', 'mt-5') + tags.p(soapDom.subjectiveTxa.value) + tags.br();
    }
    return note;
}

export const generateObjective = (note) => {
    if (soapDom.objectiveTxa.value) {
        note += tags.legend('Objective') + tags.p(soapDom.objectiveTxa.value) + tags.br();
    }
    return note;
}

export const generateAssessment = (note) => {
    if (soapDom.assessmentTxa.value) {
        note += tags.legend('Assessment') + tags.p(soapDom.assessmentTxa.value) + tags.br();
    }
    return note;
}

export const generatePlan = (note) => {
    if (soapDom.planTxa.value) {
        note += tags.legend('Plan') + tags.p(soapDom.planTxa.value);
    }
    return note;
}