const express = require('express');
const router = express.Router();

const patientMatchingController = require('../controllers/patient-matching.controller');

router.get('/match', patientMatchingController.patientMatching);
router.get('/patients', patientMatchingController.fetchMatching);
router.get('/patients/:id', patientMatchingController.fetchDuplicates);

module.exports = router;