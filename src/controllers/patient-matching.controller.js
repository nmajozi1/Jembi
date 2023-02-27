const patientMatchingService = require('../services/patient-matching.service');

const patientMatching = async (req, res) => {
    try {
        const matched = await patientMatchingService.patientMatching();
        res.status(200).send(matched);
    } catch (e) {
        res.status(400).send(e);
    }
}

const fetchMatching = async (req, res) => {
    try {
        res.status(200).send(patientMatchingService.fetchMatching());
    } catch (e) {
        res.status(400).send(e);
    }
}

const fetchDuplicates = (req, res) => {
    try {
        const { id } = req.params;
        res.status(200).send(patientMatchingService.fetchDuplicates(id));
    } catch (e) {
        res.status(400).send(e);
    }
}

module.exports = { 
    patientMatching,
    fetchMatching,
    fetchDuplicates
 };