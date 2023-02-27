const csv = require('csv-parser');
const fs = require('fs');
const BloomFilter = require('bloomfilter').BloomFilter;

const bloomFilter = new BloomFilter(1000000, 1);
const duplicates = [];
const patientList = [];
let index = 0;

const csvPath = 'patient-records .csv'

const patientMatching = async () => {

    try {
        fs.createReadStream(csvPath)
        .pipe(csv())
        .on('data', (data) => {
            data.goldenId = '';
            const record = JSON.stringify(data);
            patientList.push(data);
            bloomFilter.add(record);
        })
        .on('end', () => {
            console.log('CSV file successfully read and Bloom filter created.');

            fs.createReadStream(csvPath)
            .pipe(csv())
            .on('data', (data) => {
                data.goldenId = '';
                const record = JSON.stringify(data);
                if (bloomFilter.test(record)) {
                    patientList[index].goldenId = `Duplicate-${patientList[index]["Date of Birth"]}`
                    duplicates.push(record);
                }
                index++
            })
            .on('end', () => {
                console.log(`Found ${duplicates.length} duplicates:`);
                console.log(`Number of patients: ${patientList.length}`);
            });
        });

        return { data: "Successfully found the duplicates from csv"};
    } catch(e) {
        console.error(e);
        return e;
    }
}

const fetchMatching = () => {
    return patientList;
}

const fetchDuplicates = (id) => {
    return patientList.filter(patient => patient.goldenId === id);
}

module.exports = { 
    patientMatching,
    fetchMatching,
    fetchDuplicates
 };